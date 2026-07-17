export type NavItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  icon: string;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  challenge: string;
  stack: string[];
  highlights: string[];
  results: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
};
