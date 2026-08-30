export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  points: string[];
}

// Edit with your own work history, most recent first.
export const experience: ExperienceItem[] = [
  {
    company: "Current Company",
    role: "Senior Software Engineer",
    period: "JAN 2024 – PRESENT",
    points: [
      "Describe a key responsibility or ownership area on this team.",
      "Highlight a measurable impact or outcome you drove.",
    ],
  },
  {
    company: "Previous Company",
    role: "Software Engineer",
    period: "JUN 2021 – DEC 2023",
    points: [
      "Describe a project you shipped and the technologies used.",
      "Mention any cross-team collaboration or mentorship.",
    ],
  },
  {
    company: "First Company",
    role: "Junior Developer",
    period: "JUL 2019 – MAY 2021",
    points: [
      "Describe an early accomplishment or skill you developed.",
    ],
  },
];
