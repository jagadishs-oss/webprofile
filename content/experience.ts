interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Red Hat",
    role: "Principal Machine Learning Engineer",
    period: "From Jun 2026",
    points: [
      "Led AI transformation work by designing, building, and operating enterprise AI agents.",
      "Evaluated task performance and answer quality across representative scenarios and edge cases. Used the findings to refine behavior and verify changes before rollout.",
      "Added structured logging, tracing, and monitoring to diagnose failures in deployed agents.",
    ],
  },
  {
    company: "ABB",
    role: "AI Transformation Lead",
    period: "May 2024 – Jun 2026",
    points: [
      "Led AI transformation initiatives focused on where AI and automation could improve business processes.",
    ],
  },
  {
    company: "Bosch Global Software Technologies",
    role: "Senior Machine Learning Engineer",
    period: "Jun 2017 – May 2024",
    points: [
      "Built and maintained MLOps infrastructure across data preparation, training, validation, deployment, and monitoring.",
      "Implemented CI/CD and artifact versioning for repeatable releases, and set up alerts for model performance and data drift.",
    ],
  },
  {
    company: "Capgemini",
    role: "AI and Automation Consultant",
    period: "Jul 2015 – Jun 2017",
    points: [
      "Developed reusable automation components for manual business processes and presented proposals to clients.",
    ],
  },
  {
    company: "Tech Mahindra",
    role: "Automation Engineer",
    period: "Nov 2012 – Jun 2015",
    points: [
      "Automated infrastructure workflows with PowerShell, Perl, and ServiceNow, and integrated orchestration with BMC ticketing.",
    ],
  },
];
