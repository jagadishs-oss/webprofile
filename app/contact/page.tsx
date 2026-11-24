import { siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { SOCIAL_ICONS } from "@/lib/social-icons";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const formEnabled = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);

  return (
    <section className="px-6 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Get in Touch"
        description="Connect with me about enterprise AI agents, agent lifecycle management, or open source."
      />

      <div className={`mx-auto mt-10 grid gap-10 ${formEnabled ? "max-w-4xl sm:grid-cols-2" : "max-w-lg"}`}>
        <div className="min-w-0">
          <div className="mt-4 space-y-3">
            {siteConfig.social.map((link) => {
              const Icon = SOCIAL_ICONS[link.icon];
              const isExternal = link.url.startsWith("http");
              const displayValue = link.url.replace(/^mailto:/, "").replace(/^https?:\/\//, "");

              return (
                <a
                  key={link.label}
                  href={link.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-accent"
                >
                  <Icon className="size-5 text-accent" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{link.label}</p>
                    <p className="break-all text-sm text-muted">{displayValue}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {formEnabled && <ContactForm />}
      </div>
    </section>
  );
}
