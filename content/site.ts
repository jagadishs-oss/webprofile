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
  name: "Jagadish Songapa Gounder",
  role: "Agent Systems Expert | LLM Orchestration Architect | Agent Engineering Systems",
  tagline: "Building intelligent agent systems with cloud and on-prem solutions",
  bio: "Expert in agent systems, building LLM orchestration and architecting agent engineering systems with cloud and on-prem solutions. Passionate about creating intelligent, scalable agent-based architectures.",
  email: "jagadish.gounder@example.com",
  location: "Chennai, India",
  resumeUrl: "/resume.pdf",
  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jagadishsongapagounder/", icon: "linkedin" },
    { label: "GitHub", url: "https://github.com/jagadishs-oss", icon: "github" },
    { label: "Email", url: "mailto:jagadish.gounder@example.com", icon: "mail" },
  ],
};
