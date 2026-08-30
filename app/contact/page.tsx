import { siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { SOCIAL_ICONS } from "@/lib/social-icons";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="px-6 py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Get in Touch"
        description="Have a project in mind or just want to say hi? I'd love to hear from you."
      />

      <div className="mx-auto mt-16 grid max-w-4xl gap-10 sm:grid-cols-2">
        <div>
          <h3 className="font-semibold">Let&apos;s Connect</h3>
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
                  <div>
                    <p className="text-sm font-medium">{link.label}</p>
                    <p className="text-sm text-muted">{displayValue}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
