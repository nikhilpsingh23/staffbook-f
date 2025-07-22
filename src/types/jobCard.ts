export interface JobCard {
  company: string;
  role: string;
  tags: string[];
  location: string;
  salary: string;
  position: { top?: string; left?: string; bottom?: string };
} 