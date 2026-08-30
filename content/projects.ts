export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// Edit with your own projects.
export const projects: Project[] = [
  {
    title: "Project One",
    description: "One or two sentences describing what this project does and why it's interesting.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://example.com",
  },
  {
    title: "Project Two",
    description: "One or two sentences describing what this project does and why it's interesting.",
    tags: ["Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description: "One or two sentences describing what this project does and why it's interesting.",
    tags: ["Python", "FastAPI"],
    liveUrl: "https://example.com",
  },
];
