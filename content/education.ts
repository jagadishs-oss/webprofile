export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  details?: string;
}

// Edit with your own education history.
export const education: EducationItem[] = [
  {
    degree: "MSc in Your Field",
    school: "University Name",
    period: "2023 – 2025",
  },
  {
    degree: "BSc in Your Field",
    school: "University Name",
    period: "2019 – 2023",
    details: "Optional detail, e.g. honors or GPA.",
  },
];
