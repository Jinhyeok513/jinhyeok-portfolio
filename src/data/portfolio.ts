import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Dumbbell,
  Eye,
  GitBranch,
  Mail,
  ServerCog,
  Sprout,
} from 'lucide-react'

export type Project = {
  id: string
  slug: string
  title: string
  summary: string
  description: string
  image: string
  imageStatus: string
  featured?: boolean
  overview: string
  problemDefinition: string
  myContribution: string[]
  techStack: string[]
  verifiedTechStack: string[]
  keyResults: string[]
  repositoryUrl: string
  demoUrl: string
  internalDemoPath?: string
  demoType: 'live-app' | 'video' | 'unavailable'
  demoLabel: string
  repositoryStatus: 'available' | 'unavailable'
  deploymentStatus: string
  videoAsset?: string
  posterAsset?: string
  accessibleLabel: string
  githubUrl: string
  liveDemoUrl: string
  contextUrl?: string
  contextLabel?: string
}

export type SkillGroup = {
  title: string
  icon: LucideIcon
  skills: string[]
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
  title: 'Bachelor of Artificial Intelligence',
  subtitle:
    'Building practical machine learning solutions from data preparation to deployment.',
  heroLines: [
    'Building practical machine learning solutions',
    'from data preparation to deployment.',
  ],
  location: 'Not published',
  availability: 'Not published',
  resumeUrl: '',
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
    skills: ['Python', 'TypeScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Machine Learning',
    icon: BrainCircuit,
    skills: [
      'scikit-learn',
      'TF-IDF + Logistic Regression',
      'BERT extractive QA',
      'TensorFlow / MobileNetV2',
      'Model evaluation',
    ],
  },
  {
    title: 'Data Analysis',
    icon: BarChart3,
    skills: [
      'pandas',
      'NumPy',
      'CSV / JSON reporting',
      'Data preprocessing',
      'Synthetic sample data demos',
    ],
  },
  {
    title: 'Computer Vision',
    icon: Eye,
    skills: [
      'OpenCV',
      'MediaPipe Pose',
      'Kalman filtering',
      'Optical flow',
      'Annotated video output',
    ],
  },
  {
    title: 'Deployment & Tools',
    icon: ServerCog,
    skills: ['Vercel', 'FastAPI', 'Streamlit', 'Git / GitHub', 'pytest'],
  },
]

export const projects: Project[] = [
  {
    id: 'biogeoda',
    slug: 'biogeoda',
    title: 'BioGeoDA - Australian Native Plant Trait Extraction',
    summary:
      'NLP and Streamlit project for extracting structured trait records from botanical text.',
    description:
      'A verified BioGeoDA case study with a public GitHub repository and Streamlit Trait Explorer demo.',
    image: '/images/projects/biogeoda-pipeline.svg',
    imageStatus: 'Verified pipeline visual based on the public project structure',
    featured: true,
    overview:
      'NLP pipeline that converts OCR-ready Australian native plant descriptions into structured trait-value records, reconstructed from Jinhyeok Kim\'s AI/NLP contribution to a UTS capstone.',
    problemDefinition:
      'Australian Plants Journal text can describe propagation, bud bank location, germination treatment, flowering time, plant height, and other traits in free text. The project structures those sentences into trait-value outputs while documenting rule-based, baseline, and extractive QA limitations.',
    myContribution: [
      'Worked on the AI component with a teammate in the original four-person UTS capstone, without including teammate-owned code or confidential client data in the public reconstruction.',
      'Built trait-to-value mappings, QA example generation, BERT extractive QA fine-tuning, TF-IDF Logistic Regression baseline work, propagation post-processing, and model evaluation.',
      'Restructured the AI/NLP work into reusable Python modules, tests, sample data, and a Streamlit portfolio demo called BioGeoDA Trait Explorer.',
    ],
    techStack: [
      'Python',
      'Streamlit',
      'pandas',
      'scikit-learn',
      'TF-IDF',
      'BERT QA',
      'pytest',
    ],
    verifiedTechStack: [
      'Python',
      'Streamlit',
      'pandas',
      'scikit-learn',
      'TF-IDF',
      'BERT QA',
      'pytest',
    ],
    keyResults: [
      'Public sample files are synthetic and intentionally small, avoiding private APJ source text, client data, credentials, and full OCR output.',
      'Historical capstone notebooks recorded TF-IDF Logistic Regression accuracy of 90.7% and macro F1 of 46.2%, highlighting class-imbalance limits for rare trait categories.',
      'BERT QA training records show 137,408 valid QA examples, a 20,000-example training subset, one epoch, and evaluation loss of approximately 0.321.',
      'Team validation reviewed more than 2,400 AI-generated candidates and retained 844 correctly matched trait records; this is a team validation result, not a solo claim.',
    ],
    repositoryUrl: 'https://github.com/Jinhyeok513/BioGeoDA',
    demoUrl: 'https://at4fgpvm22qsheizvjagyt.streamlit.app/',
    demoType: 'live-app',
    demoLabel: 'Live Demo',
    repositoryStatus: 'available',
    deploymentStatus:
      'Streamlit Community Cloud URL documented in the BioGeoDA README; CLI curl shows Streamlit auth/session redirects, so browser-level public flow still needs manual verification if the app is private or sleeping.',
    accessibleLabel: 'Open BioGeoDA Streamlit Trait Explorer live demo',
    githubUrl: 'https://github.com/Jinhyeok513/BioGeoDA',
    liveDemoUrl: 'https://at4fgpvm22qsheizvjagyt.streamlit.app/',
    contextUrl:
      'https://resources.austplants.com.au/stories/help-wanted-to-gather-plant-trait-data/',
    contextLabel: 'Australian Plants Society - Project Context',
  },
  {
    id: 'gym-ai-trainer',
    slug: 'gym-ai-trainer',
    title: 'AI Gym Trainer',
    summary:
      'Production-style exercise analysis app with Next.js, FastAPI, MobileNetV2, MediaPipe, and OpenCV.',
    description:
      'A verified KINETIQ demo that accepts short workout clips and returns JSON metrics plus an annotated video.',
    image: '/images/projects/gym-ai-trainer.svg',
    imageStatus: 'Verified system visual based on the inspected Gym AI Trainer pipeline',
    overview:
      'KINETIQ is a portfolio application for exercise recognition, pose tracking, annotated video feedback, and downloadable session metrics.',
    problemDefinition:
      'Workout videos need an interpretable analysis path that combines movement classification, pose landmark extraction, joint-angle calculations, repetition estimates, and transparent feedback while handling low-confidence predictions carefully.',
    myContribution: [
      'Connected a Next.js interface to a FastAPI analysis route backed by the existing Python video pipeline.',
      'Used MobileNetV2 classification, MediaPipe Pose landmarks, OpenCV rendering, joint-angle calculations, and rule-based form feedback in the verified pipeline.',
      'Documented uncertainty handling, field-test domain shift, model evidence, and limitations so the project does not read like a medical or coaching claim.',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'FastAPI',
      'TensorFlow',
      'MobileNetV2',
      'MediaPipe Pose',
      'OpenCV',
    ],
    verifiedTechStack: [
      'Next.js',
      'React',
      'TypeScript',
      'FastAPI',
      'TensorFlow',
      'MobileNetV2',
      'MediaPipe Pose',
      'OpenCV',
    ],
    keyResults: [
      'MobileNetV2 recorded 72.0% video accuracy and 78.18% video macro F1 in the project model comparison table.',
      'The pipeline returns annotated browser-playable video, key frames, session metrics, frame-level JSON, and CSV exports.',
      'A 10-video field test recorded 20% video-level accuracy, documenting domain shift rather than hiding it.',
    ],
    repositoryUrl: 'https://github.com/Jinhyeok513/gym-ai-trainer',
    demoUrl: 'https://gym-ai-trainer-two.vercel.app',
    demoType: 'live-app',
    demoLabel: 'Live Demo',
    repositoryStatus: 'available',
    deploymentStatus:
      'Vercel production app and /api/analyze endpoint verified with short MP4 smoke tests; public demo validates upload size before submission.',
    accessibleLabel: 'Open AI Gym Trainer live demo',
    githubUrl: 'https://github.com/Jinhyeok513/gym-ai-trainer',
    liveDemoUrl: 'https://gym-ai-trainer-two.vercel.app',
  },
  {
    id: 'tennis-ball-tracking',
    slug: 'tennis-ball-tracking',
    title: 'Real-Time Tennis Ball Tracking',
    summary:
      'Classical computer-vision and Kalman-filter tennis ball tracking result demo.',
    description:
      'A verified video result generated by rerunning the repository Kalman tracker on the included Shanghai 2014 test clip.',
    image: '/images/projects/tennis-tracking.png',
    imageStatus: 'Verified Kalman tracking screenshot from project output',
    overview:
      'Computer vision pipeline for tracking a tennis ball in broadcast match footage with a Kalman-smoothed classical CV approach and portfolio-ready diagnostics.',
    problemDefinition:
      'Detect and track a very small, fast-moving tennis ball in 1280x720 broadcast footage where motion blur, court lines, player occlusion, and net-region noise create frequent false positives.',
    myContribution: [
      'Implemented the Kalman-based tracker using HSV color cues, whiteness cues, Farneback optical flow, Difference of Gaussians blobness, court masking, and net suppression.',
      'Restored sparse ground-truth alignment, IoU/CLE evaluation, trajectory rendering, and README visuals from project artifacts.',
      'Separated the classical CV/Kalman contribution from collaborator YOLO and TrackNet baseline work in the GitHub documentation.',
    ],
    techStack: [
      'Python',
      'OpenCV',
      'NumPy',
      'FilterPy',
      'FFmpeg',
      'Pillow',
      'IoU / CLE evaluation',
    ],
    verifiedTechStack: [
      'Python',
      'OpenCV',
      'NumPy',
      'FilterPy',
      'FFmpeg',
      'IoU / CLE evaluation',
    ],
    keyResults: [
      'Packaged 207-frame tracking output with representative frame captures, trajectory visualization, and frame-level evaluation diagnostics.',
      'Measured sparse-label performance: mean IoU 0.1827, Success@IoU>=0.5 2.4%, and mean CLE 131.18 px.',
      'Published the completed portfolio repository with restored code, predictions, labels, metrics, and visual assets.',
    ],
    repositoryUrl: 'https://github.com/Jinhyeok513/Tennis-Ball-Tracking',
    demoUrl: '',
    internalDemoPath: '#tennis-video-demo',
    demoType: 'video',
    demoLabel: 'Watch Result',
    repositoryStatus: 'available',
    deploymentStatus:
      'Internal portfolio video generated from the repository Kalman tracker and served as a static Vercel asset.',
    videoAsset: '/videos/projects/tennis-tracking-result.mp4',
    posterAsset: '/images/projects/tennis-tracking-poster.jpg',
    accessibleLabel: 'Watch Real-Time Tennis Ball Tracking result video',
    githubUrl: 'https://github.com/Jinhyeok513/Tennis-Ball-Tracking',
    liveDemoUrl: '',
  },
  {
    id: 'stock-market-prediction',
    slug: 'stock-market-prediction',
    title: 'Stock Market Prediction',
    summary: 'Reserved project slot awaiting source evidence.',
    description:
      'A reserved case-study slot without verified repository, demo, dataset, or model evidence.',
    image: '/images/projects/stock-market.svg',
    imageStatus: 'Project details not verified in the current workspace',
    overview:
      'A stock market prediction case study is reserved in the portfolio, but source files, dataset details, validation method, public repository, and demo URL were not found in this workspace.',
    problemDefinition:
      'The target variable, data source, prediction horizon, baseline, and risk controls need source evidence before this project can be described as a finished ML case study.',
    myContribution: [
      'No verified implementation notes were found locally for this project during the portfolio update.',
      'The card intentionally avoids claims about performance, trading value, dates, or deployment until project evidence is added.',
    ],
    techStack: ['Details not verified'],
    verifiedTechStack: ['Details not verified'],
    keyResults: [
      'No public result is displayed because no verified metric, repository, notebook, or demo asset was available in the current workspace.',
    ],
    repositoryUrl: '',
    demoUrl: '',
    demoType: 'unavailable',
    demoLabel: 'Demo unavailable',
    repositoryStatus: 'unavailable',
    deploymentStatus: 'No verified public deployment found.',
    accessibleLabel: 'Stock Market Prediction project details unavailable',
    githubUrl: '',
    liveDemoUrl: '',
  },
]

export const timelineItems: TimelineItem[] = [
  {
    title: 'Education',
    organization: 'University of Technology Sydney',
    period: 'Dates not published',
    summary:
      'Bachelor of Artificial Intelligence. Dates, grades, and transcript details are intentionally omitted until Jinhyeok Kim chooses to publish verified records.',
    highlights: [
      'Portfolio evidence currently emphasizes applied NLP, computer vision, model evaluation, and deployment-oriented project work.',
      'BioGeoDA originated from a UTS industry capstone and is described with team attribution rather than solo ownership claims.',
    ],
  },
  {
    title: 'Project Experience',
    organization: 'AI / ML portfolio work',
    period: 'Dates not published',
    summary:
      'Selected public-facing work spans NLP trait extraction, exercise pose analysis, tennis ball tracking, and an unpublished stock prediction case-study slot.',
    highlights: [
      'Projects are written as engineering case studies with problem framing, contribution boundaries, verified stack, results, and limitations.',
      'Unverified personal details, employment history, private datasets, and unpublished repository links are not exposed.',
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
  { label: 'Primary Focus', value: 'Applied AI / ML' },
  { label: 'Case Studies', value: '4 projects' },
  { label: 'Location', value: 'Not published' },
  { label: 'Availability', value: 'Not published' },
]

export const focusAreas = [
  {
    icon: BrainCircuit,
    title: 'AI Engineering Focus',
    description:
      'Building end-to-end ML workflows that move from data preparation and modeling into demos, APIs, evaluation, and documentation.',
  },
  {
    icon: Database,
    title: 'Data to Evidence',
    description:
      'Project writing separates verified metrics, team context, limitations, and unpublished details so the portfolio stays credible.',
  },
  {
    icon: Sprout,
    title: 'NLP Case Study',
    description:
      'BioGeoDA demonstrates plant-trait extraction with mapping, extractive QA, baseline classification, and rule-based propagation extraction.',
  },
  {
    icon: Dumbbell,
    title: 'Computer Vision Systems',
    description:
      'Gym and tennis projects show video analysis, pose or object tracking, diagnostic rendering, and honest model limitations.',
  },
]

export const workflowSteps = [
  { label: 'Prepare', description: 'Clean, structure, and validate data sources' },
  { label: 'Model', description: 'Build practical ML and CV pipelines' },
  { label: 'Evaluate', description: 'Report metrics, constraints, and limitations' },
  { label: 'Deploy', description: 'Package demos, APIs, and portfolio-ready outputs' },
]

export const toolBadges = [
  { label: 'Python' },
  { label: 'React / TypeScript' },
  { label: 'NLP' },
  { label: 'Computer Vision' },
  { label: 'Vercel' },
]

export const footerLinks = contactLinks

export const codeCardLines = [
  { prompt: '$ degree', value: 'Bachelor of Artificial Intelligence' },
  { prompt: '$ focus', value: 'data -> model -> evaluation -> deployment' },
  { prompt: '$ featured', value: 'BioGeoDA, Gym AI Trainer, Tennis Tracking' },
  { prompt: '$ principle', value: 'verified evidence over inflated claims' },
]
