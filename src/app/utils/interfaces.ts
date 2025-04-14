export interface NavItem {
  label: string
  japaneseLabel: string
  href: string
}

export interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

export interface SkillsData {
  category: string;
  icon: string;
  items: string[];
}

export interface WorkExperienceProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  isLast?: boolean
}

export interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoLink: string
  codeLink: string
}