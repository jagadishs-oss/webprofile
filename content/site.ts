export interface SocialLink {
  label: string;
  url: string;
  icon: "linkedin" | "github" | "mail" | "medium";
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  resumeUrl: string;
  social: SocialLink[];
}

// Edit this file with your own details — it's the single source of truth for the whole site.
export const siteConfig: SiteConfig = {
  name: "Your Name",
  role: "Software Engineer",
  tagline: "Building Thoughtful Software.",
  bio: "I design and build reliable, user-focused products across the stack — replace this bio in content/site.ts with a couple of sentences about what you do and what you care about.",
  email: "you@example.com",
  location: "City, Country",
  resumeUrl: "/resume.pdf",
  social: [
    { label: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "linkedin" },
    { label: "GitHub", url: "https://github.com/yourusername", icon: "github" },
    { label: "Email", url: "mailto:you@example.com", icon: "mail" },
  ],
};
