export interface SocialLink {
  label: string;
  url: string;
  icon: "linkedin" | "github" | "mail" | "medium";
}

export const siteConfig = {
  name: "Jagadish Songapa Gounder",
  role: "AI Transformation · Enterprise AI Agents · AI Security",
  bio: "I lead AI transformation initiatives, build enterprise agents from design through production, and work on securing AI applications, governing agents, and helping teams use AI safely.",
  location: "Bengaluru, India",
  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jagadishsongapagounder/", icon: "linkedin" },
    { label: "GitHub", url: "https://github.com/jagadishs-oss", icon: "github" },
  ] satisfies SocialLink[],
};
