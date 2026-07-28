import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Eye,
  GitBranch,
  Mail,
  MapPin,
  Rocket,
  ServerCog,
} from 'lucide-react'

export type Project = {
  title: string
  image: string
  imageStatus: string
  featured?: boolean
  overview: string
  problemDefinition: string
  myContribution: string[]
  techStack: string[]
  keyResults: string[]
  githubUrl: string
  liveDemoUrl: string
}

export type SkillGroup = {
  title: string
  icon: LucideIcon
  skills: Array<{
    name: string
    verified: boolean
  }>
}

export type TimelineItem = {
  title: string
  organization: string
  period: string
  summary: string
  highlights: string[]
}

export type ContactLink = {
  label: string
  href: string
  icon: LucideIcon
  ariaLabel: string
  external?: boolean
}

export const profile = {
  name: 'Jinhyeok Kim',
  title: 'AI & Data Graduate',
  subtitle:
    'Building practical machine learning solutions from data preparation to deployment.',
  heroLines: [
    'Building practical machine learning solutions',
    'from data preparation to deployment.',
  ],
  location: 'TODO: Add current location',
  availability: 'TODO: Add availability',
  resumeUrl: 'TODO',
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    icon: Code2,
    skills: [
      { name: 'React', verified: true },
      { name: 'TypeScript', verified: true },
      { name: 'Vite', verified: true },
      { name: 'Tailwind CSS', verified: true },
      { name: 'Framer Motion', verified: true },
      { name: 'TODO: Add verified Python / SQL / R skills', verified: false },
    ],
  },
  {
    title: 'Machine Learning',
    icon: BrainCircuit,
    skills: [
      { name: 'TODO: Add verified ML frameworks', verified: false },
      { name: 'TODO: Add verified model evaluation methods', verified: false },
      { name: 'TODO: Add verified NLP experience', verified: false },
    ],
  },
  {
    title: 'Data Analysis',
    icon: BarChart3,
    skills: [
      { name: 'TODO: Add verified data cleaning tools', verified: false },
      { name: 'TODO: Add verified visualization tools', verified: false },
      { name: 'TODO: Add verified statistics or analytics tools', verified: false },
    ],
  },
  {
    title: 'Computer Vision',
    icon: Eye,
    skills: [
      { name: 'Real-Time Tennis Ball Tracking', verified: true },
      { name: 'OpenCV / Kalman Filtering', verified: true },
      { name: 'Video Processing with FFmpeg', verified: true },
    ],
  },
  {
    title: 'Deployment & Tools',
    icon: ServerCog,
    skills: [
      { name: 'GitHub URL fields ready', verified: true },
      { name: 'Live Demo URL fields ready', verified: true },
      { name: 'TODO: Add verified model serving stack', verified: false },
      { name: 'TODO: Add verified cloud or container tools', verified: false },
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'BioGeoDA - Australian Native Plant Trait Extraction',
    image: '/images/projects/biogeoda.svg',
    imageStatus: 'Placeholder image - replace with verified project visual',
    featured: true,
    overview:
      'TODO: Add a verified 1-2 sentence overview of the BioGeoDA project scope, dataset, and intended users.',
    problemDefinition:
      'TODO: Define the exact plant trait extraction problem, input sources, and evaluation criteria.',
    myContribution: [
      'TODO: Add verified contribution to data preparation, model design, annotation, evaluation, or deployment.',
      'TODO: Add verified collaboration or ownership details.',
    ],
    techStack: ['TODO: Add verified stack'],
    keyResults: [
      'TODO: Add verified metric, output, paper, demo, or product result.',
    ],
    githubUrl: 'TODO',
    liveDemoUrl: 'TODO',
  },
  {
    title: 'Real-Time Tennis Ball Tracking',
    image: '/images/projects/tennis-tracking.png',
    imageStatus: 'Verified Kalman tracking screenshot from project output',
    overview:
      'Computer vision pipeline for tracking a tennis ball in broadcast match footage with a Kalman-smoothed classical CV approach and portfolio-ready diagnostics.',
    problemDefinition:
      'Detect and track a very small, fast-moving tennis ball in 1280x720 broadcast footage where motion blur, court lines, player occlusion, and net-region noise create frequent false positives.',
    myContribution: [
      'Implemented the Kalman-based tracker using HSV color cues, whiteness cues, Farneback optical flow, Difference of Gaussians blobness, court masking, and net suppression.',
      'Restored sparse ground-truth alignment, IoU/CLE evaluation, trajectory rendering, and README visuals from Google Drive project artifacts.',
      'Separated my classical CV/Kalman contribution from collaborator YOLO and TrackNet baseline work in the GitHub documentation.',
    ],
    techStack: ['Python', 'OpenCV', 'NumPy', 'FilterPy', 'FFmpeg', 'Pillow', 'IoU/CLE evaluation'],
    keyResults: [
      'Packaged 207-frame tracking output with 4 representative frame captures, trajectory visualization, and frame-level evaluation diagnostics.',
      'Measured sparse-label performance: mean IoU 0.1827, Success@IoU>=0.5 2.4%, mean CLE 131.18 px.',
      'Published the completed portfolio repository with restored code, predictions, labels, metrics, and visual assets.',
    ],
    githubUrl: 'https://github.com/Jinhyeok513/Tennis-Ball-Tracking',
    liveDemoUrl: 'https://github.com/Jinhyeok513/Tennis-Ball-Tracking/blob/main/src/trackers/kalman/vis.mp4',
  },
  {
    title: 'Stock Market Prediction',
    image: '/images/projects/stock-market.svg',
    imageStatus: 'Placeholder image - replace with verified dashboard or notebook visual',
    overview:
      'TODO: Add a verified 1-2 sentence overview of the stock market prediction project.',
    problemDefinition:
      'TODO: Define the target variable, data source, prediction horizon, and baseline.',
    myContribution: [
      'TODO: Add verified contribution to feature engineering, modeling, validation, or dashboarding.',
      'TODO: Add verified risk controls and evaluation details.',
    ],
    techStack: ['TODO: Add verified stack'],
    keyResults: [
      'TODO: Add verified result without overstating financial performance.',
    ],
    githubUrl: 'TODO',
    liveDemoUrl: 'TODO',
  },
]

export const timelineItems: TimelineItem[] = [
  {
    title: 'Education',
    organization: 'UTS Bachelor of Artificial Intelligence',
    period: 'TODO: Add verified dates',
    summary:
      'TODO: Add verified degree status, major details, coursework, and academic focus.',
    highlights: [
      'TODO: Add verified coursework, thesis, capstone, or award.',
      'TODO: Add verified GPA only if you want to disclose it.',
    ],
  },
  {
    title: 'Experience',
    organization: 'TODO: Add company / lab / role',
    period: 'TODO: Add verified dates',
    summary:
      'TODO: Add verified internship, research, project, or work experience summary.',
    highlights: [
      'TODO: Add verified responsibility or impact.',
      'TODO: Add verified tools and collaboration context.',
    ],
  },
]

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:winsuwon127@gmail.com?subject=Portfolio%20Enquiry',
    icon: Mail,
    ariaLabel: 'Email Jinhyeok Kim about a portfolio enquiry',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/jinhyeok513',
    icon: GitBranch,
    ariaLabel: "Visit Jinhyeok Kim's GitHub profile",
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/Jinhyeok Kim',
    icon: BriefcaseBusiness,
    ariaLabel: "Visit Jinhyeok Kim's LinkedIn profile",
    external: true,
  },
]

export const stats = [
  { label: 'Primary Focus', value: 'AI / Data' },
  { label: 'Projects', value: '3 featured' },
  { label: 'Location', value: 'TODO' },
  { label: 'Availability', value: 'TODO' },
]

export const focusAreas = [
  {
    icon: BrainCircuit,
    title: 'AI / Data Focus',
    description:
      'Practical ML workflow, data preparation, model evaluation, and deployment-oriented portfolio structure.',
  },
  {
    icon: Database,
    title: 'Projects',
    description:
      '3 featured projects are prepared as case studies, with unverified results intentionally marked as TODO.',
  },
  {
    icon: MapPin,
    title: 'Location',
    description:
      'TODO: Add verified location or work preference.',
  },
  {
    icon: Rocket,
    title: 'Availability',
    description:
      'TODO: Add verified availability for graduate, internship, or full-time opportunities.',
  },
]

export const workflowSteps = [
  { label: 'Prepare', description: 'Clean, structure, and validate data' },
  { label: 'Model', description: 'Train practical ML solutions' },
  { label: 'Evaluate', description: 'Measure results against clear baselines' },
  { label: 'Deploy', description: 'Package demos, APIs, or dashboards' },
]

export const toolBadges = [
  { label: 'React', verified: true },
  { label: 'TypeScript', verified: true },
  { label: 'Tailwind CSS', verified: true },
  { label: 'Framer Motion', verified: true },
  { label: 'TODO: AI stack', verified: false },
]

export const footerLinks = contactLinks

export const codeCardLines = [
  { prompt: '$ portfolio status', value: 'dark-ai-redesign' },
  { prompt: '$ focus', value: 'data -> model -> deployment' },
  { prompt: '$ featured', value: 'BioGeoDA, Tennis Tracking, Stock Prediction' },
  { prompt: '$ verified-results', value: 'TODO until evidence is added' },
]
