import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  Dumbbell,
  Eye,
  GitBranch,
  Mail,
  ServerCog,
  Sprout,
  TrendingUp,
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
  title: 'Artificial Intelligence Graduate',
  subtitle:
    'Building practical AI and data applications.',
  heroLines: [
    'I develop data-driven applications across natural language processing,',
    'computer vision, data integration, and interactive analytics.',
  ],
  location: 'Sydney, NSW',
  availability: 'Completed 2026',
  resumeUrl: '/resume/Jinhyeok_Kim_Master_Resume.pdf',
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
      'Time-series validation',
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
      'Data validation',
      'Walk-forward CV',
      'Microsoft Excel - Intermediate',
      'PivotTables and lookup functions',
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
    skills: ['Vercel', 'FastAPI', 'Streamlit', 'Git / GitHub', 'pytest', 'PowerPoint'],
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
    id: 'stock-direction-prediction',
    slug: 'stock-direction-prediction',
    title: 'AAPL Stock Direction Prediction',
    summary:
      'Time-series ML project for next-day AAPL direction prediction with walk-forward validation and honest limitation analysis.',
    description:
      'A rebuilt Stock assignment project with public-ready Python code, saved result tables, diagnostic plots, and an embedded portfolio dashboard focused on data-science evaluation rather than trading claims.',
    image: '/images/projects/stock-direction-roc-pr.png',
    imageStatus: 'Verified ROC/PR diagnostic plot from the saved Logistic Regression run',
    featured: true,
    overview:
      'AAPL next-day direction classification project using public OHLCV market data, engineered technical features, chronological validation, and model comparison across Logistic Regression, calibrated Linear SVM, and MLP.',
    problemDefinition:
      'Short-horizon stock direction prediction is noisy and easy to overstate. The project tests whether lagged price, volatility, momentum, RSI, and volume features contain enough signal for next-day AAPL movement while preserving time order and documenting weak out-of-sample behavior.',
    myContribution: [
      'Rebuilt the original university notebook into a public-ready Python project with reusable feature, split, model, threshold, and evaluation functions.',
      'Used daily AAPL OHLCV data from Stooq with Yahoo Finance fallback, covering 2021-07-15 through 2025-07-15.',
      'Implemented return, log-return, moving average, momentum, volatility, RSI14, and volume z-score features with a next-day binary direction target.',
      'Compared Logistic Regression, SVM with Platt calibration, and MLP using chronological train/validation/test splits and 5-fold walk-forward CV.',
    ],
    techStack: [
      'Python',
      'pandas',
      'NumPy',
      'scikit-learn',
      'pandas-datareader',
      'yfinance',
      'Matplotlib',
      'Time-series CV',
    ],
    verifiedTechStack: [
      'Python',
      'pandas',
      'NumPy',
      'scikit-learn',
      'Logistic Regression',
      'Calibrated Linear SVM',
      'MLPClassifier',
      'Walk-forward validation',
    ],
    keyResults: [
      'Best walk-forward CV configuration was Logistic Regression with C=0.1, averaging PR AUC 0.552 and ROC AUC 0.557 across five time-ordered folds.',
      'Final test results were modest: Logistic Regression PR AUC 0.564, ROC AUC 0.527, Brier score 0.248, accuracy 0.534, and F1 0.696.',
      'The selected thresholds classified all test cases as upward movement, so the project is presented as a model-evaluation and limitation-analysis case study rather than a deployable trading signal.',
    ],
    repositoryUrl:
      'https://github.com/Jinhyeok513/jinhyeok-portfolio/tree/main/projects/stock-market-direction-prediction',
    demoUrl: '',
    internalDemoPath: '#stock-analysis-app',
    demoType: 'live-app',
    demoLabel: 'Open App',
    repositoryStatus: 'available',
    deploymentStatus:
      'Embedded portfolio dashboard is deployed at jinhyeok-portfolio-amber.vercel.app/#stock-analysis-app; public-ready code, README, plots, saved result tables, and offline tests are linked through GitHub.',
    accessibleLabel: 'Open AAPL Stock Direction Prediction analysis dashboard',
    githubUrl:
      'https://github.com/Jinhyeok513/jinhyeok-portfolio/tree/main/projects/stock-market-direction-prediction',
    liveDemoUrl: 'https://jinhyeok-portfolio-amber.vercel.app/#stock-analysis-app',
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
      'Vercel production app and /api/analyze endpoint verified with short MP4 smoke tests; public demo now validates 32 MB uploads and a 30-second clip limit before submission.',
    accessibleLabel: 'Open AI Gym Trainer live demo',
    githubUrl: 'https://github.com/Jinhyeok513/gym-ai-trainer',
    liveDemoUrl: 'https://gym-ai-trainer-two.vercel.app',
  },
  {
    id: 'tennis-ball-tracking',
    slug: 'tennis-ball-tracking',
    title: 'Tennis Ball Tracking and Trajectory Visualisation',
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
      'Packaged 207-frame tracking output with representative frame captures, trajectory visualisation, and frame-level evaluation diagnostics.',
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
    accessibleLabel: 'Watch Tennis Ball Tracking and Trajectory Visualisation result video',
    githubUrl: 'https://github.com/Jinhyeok513/Tennis-Ball-Tracking',
    liveDemoUrl: '',
  },
  {
    id: 'ems',
    slug: 'ems',
    title: 'EMS',
    summary:
      'Project-management case study for planning NEC\'s Event Management System for the 2027 Sydney Festival.',
    description:
      'A corrected public package with WBS, AON logic, Gantt scheduling, validation notes, and source artifacts for an academic EMS planning scenario.',
    image: '/images/projects/ems-gantt-preview.png',
    imageStatus: 'Corrected Gantt baseline showing EMS readiness by 30 Nov 2026',
    overview:
      'Project Management case study for how PMP would plan an integrated Event Management System for Nouveau Event Creations to operate the 2027 Sydney Festival.',
    problemDefinition:
      'NEC needed a credible delivery plan for an EMS integrating registration, ticketing, performance scheduling, budget analytics, security management, vendor coordination, and operational reporting before the 2027 Sydney Festival.',
    myContribution: [
      'Worked from the Project Management Professionals Pty Ltd perspective to structure the EMS scope, stakeholders, communication plan, risks, budget assumptions, resources, WBS, AON dependencies, and Gantt baseline.',
      'Reviewed the supplied report, Gantt, AON, and WBS artifacts, then corrected public-facing schedule issues where the source Gantt exceeded the required 30 November 2026 readiness date.',
      'Rebuilt recruiter-readable WBS/Gantt outputs and validation notes while preserving the original assignment artifacts for traceability.',
    ],
    techStack: [
      'Microsoft Excel',
      'WBS',
      'AON diagram',
      'Gantt scheduling',
      'Risk register',
      'Budget planning',
      'PowerPoint',
    ],
    verifiedTechStack: [
      'Microsoft Excel',
      'WBS',
      'AON diagram',
      'Gantt scheduling',
      'Risk register',
      'Budget planning',
      'PowerPoint',
    ],
    keyResults: [
      'Corrected planning baseline runs from 15 July 2025 to 30 November 2026, matching the report deadline for EMS readiness before the 2027 Sydney Festival.',
      'Public package includes a corrected WBS/Gantt workbook, recovered original WBS CSV, validation report, AON logic, original source artifacts, and a detailed GitHub README.',
      'The case study is clearly framed as an academic Project Management simulation, not a claim that NEC commissioned or deployed a real EMS.',
    ],
    repositoryUrl:
      'https://github.com/Jinhyeok513/jinhyeok-portfolio/tree/main/projects/ems-project-management-case-study',
    demoUrl: '/case-studies/ems.md',
    demoType: 'live-app',
    demoLabel: 'Case Study',
    repositoryStatus: 'available',
    deploymentStatus:
      'Portfolio card shows the corrected Gantt visual and links to the public EMS project package in GitHub once the portfolio branch is published.',
    accessibleLabel: 'Open EMS project-management case study document',
    githubUrl:
      'https://github.com/Jinhyeok513/jinhyeok-portfolio/tree/main/projects/ems-project-management-case-study',
    liveDemoUrl: 'https://jinhyeok-portfolio-amber.vercel.app/case-studies/ems.md',
  },
]

export const timelineItems: TimelineItem[] = [
  {
    title: 'Education',
    organization: 'University of Technology Sydney',
    period: 'Completed 2026',
    summary:
      'Bachelor of Artificial Intelligence, graduated with Distinction with verified WAM 77.94 and GPA 5.88/7.00.',
    highlights: [
      'Portfolio evidence currently emphasizes applied NLP, computer vision, model evaluation, and deployment-oriented project work.',
      'BioGeoDA originated from a UTS industry capstone and is described with team attribution rather than solo ownership claims.',
    ],
  },
  {
    title: 'Project Experience',
    organization: 'AI / data portfolio work',
    period: '2025-2026',
    summary:
      'Selected public-facing work spans NLP trait extraction, time-series stock evaluation, exercise pose analysis, tennis ball tracking, and an academic project-management case study.',
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
]

export const stats = [
  { label: 'Primary Focus', value: 'Applied AI / ML' },
  { label: 'Case Studies', value: '5 projects' },
  { label: 'Location', value: 'Sydney, NSW' },
  { label: 'Graduate Status', value: 'Completed 2026' },
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
    title: 'Data and Evidence',
    description:
      'Project writing separates verified metrics, datasets, team context, limitations, and unpublished details so the portfolio stays credible.',
  },
  {
    icon: TrendingUp,
    title: 'Time-Series ML',
    description:
      'The Stock project demonstrates market-data ingestion, lag-safe features, walk-forward validation, calibration checks, and honest weak-signal reporting.',
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
  {
    icon: Database,
    title: 'Project Coordination',
    description:
      'A sanitised academic case study shows Excel scheduling, WBS, risk, resource, budget, and team-lead planning experience.',
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
  { label: 'Time-Series ML' },
  { label: 'Computer Vision' },
  { label: 'Vercel' },
]

export const footerLinks = contactLinks

export const codeCardLines = [
  { prompt: '$ degree', value: 'Bachelor of Artificial Intelligence' },
  { prompt: '$ focus', value: 'data -> model -> evaluation -> deployment' },
  { prompt: '$ featured', value: 'BioGeoDA, Stock ML, Gym, Tennis, EMS Plan' },
  { prompt: '$ principle', value: 'verified evidence over inflated claims' },
]
