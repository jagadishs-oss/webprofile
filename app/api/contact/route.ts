import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/content/site";

const noNewlines = (value: string) => !/[\r\n]/.test(value);

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100).refine(noNewlines, "Invalid characters in name."),
  email: z.string().trim().email().max(254),
  subject: z
    .string()
    .trim()
    .max(150)
    .refine(noNewlines, "Invalid characters in subject.")
    .optional()
    .default(""),
  message: z.string().trim().min(1).max(5000),
  // honeypot: only bots fill hidden fields, so any non-empty value marks the submission as spam
  company: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const isHoneypotTrip = parsed.error.issues.some((issue) => issue.path[0] === "company");
    if (isHoneypotTrip) {
      // pretend success so bots don't learn the honeypot was detected
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: "Please check your input and try again." }, { status: 400 });
  }

  const { name, email, subject, message } = parsed.data;

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    console.error("Contact form is missing RESEND_API_KEY or CONTACT_TO_EMAIL env vars.");
    return NextResponse.json({ error: "Email service isn't configured yet." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: subject ? `[${siteConfig.name}] ${subject}` : `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
