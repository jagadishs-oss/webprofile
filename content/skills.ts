export interface SkillCategory {
  category: string;
  items: string[];
}

// Edit with your own skills, grouped however makes sense to you.
export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Next.js", "React", "Node.js", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    items: ["Docker", "PostgreSQL", "Git", "Vercel"],
  },
];
