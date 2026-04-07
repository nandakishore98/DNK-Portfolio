export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  projects?: Project[];
  bullets?: string[];
  highlight?: string;
}

export interface Project {
  title: string;
  period: string;
  bullets: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade?: string;
  achievements?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  metric: string;
  label: string;
  description: string;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}
