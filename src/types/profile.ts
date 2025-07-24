export interface PersonalInfo {
  personal: string;
  dob: string;
  category: string;
  workPermit: string;
  address: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

// profileSummary: string
// resumeFile: string 

export interface BasicDetails {
  totalExperience: string;
  location: string;
  currentSalary: string;
  noticePeriod: string;
  socialMedia: string;
  personalEmail: string;
  workEmail: string;
  personalContact: string;
  workNoticePeriod: string;
} 

export interface Experience {
  companyLogo: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  skills: string[];
} 

export interface Education {
  degree: string;
  specialization: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
  description: string;
  achievements: string[];
  skills: string[];
} 

export interface Project {
  name: string;
  duration: string;
  role: string;
  description: string;
  achievements: string[];
  skills: string[];
  softwares: string[];
  url: string;
} 

export interface Certification {
  name: string;
  institution: string;
  location: string;
  issued: string;
  expires: string;
  credentialId: string;
  description: string;
  url: string;
  skills: string[];
} 

export interface ProfileCompletion {
  label: string;
  skill: string;
  percent: number;
  helper: string;
} 