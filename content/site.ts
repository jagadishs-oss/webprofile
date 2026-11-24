export interface SocialLink {
  label: string;
  url: string;
  icon: "linkedin" | "github" | "mail" | "medium";
}

export const siteConfig = {
  name: "Jagadish Songapa Gounder",
  role: "AI Transformation · Enterprise AI Agents · Agent Lifecycle Management",
  bio: "I lead AI transformation initiatives that turn business workflows into enterprise AI agents. I design how they work, evaluate them before release, and use monitoring and traces to improve them in production.",
  location: "Bengaluru, India",
  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jagadishsongapagounder/", icon: "linkedin" },
    { label: "GitHub", url: "https://github.com/jagadishs-oss", icon: "github" },
  ] satisfies SocialLink[],
};
