import Link from "next/link";
import { siteConfig } from "@/content/site";
import { SOCIAL_ICONS } from "@/lib/social-icons";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {siteConfig.social.map((link) => {
            const Icon = SOCIAL_ICONS[link.icon];
            return (
              <Link
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="transition-colors hover:text-foreground"
              >
                <Icon className="size-5" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
