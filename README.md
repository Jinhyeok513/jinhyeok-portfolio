# Jinhyeok Kim Portfolio

Single-page AI and data portfolio website for Jinhyeok Kim. The site presents verified Bachelor of Artificial Intelligence project work with a dark AI/ML engineering visual direction, reusable React components, and data-driven content.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Main Sections

- Navbar
- Hero
- About
- Technical Skills
- Featured Projects
- Education and Experience
- Contact
- Footer

## Project Structure

- `src/data/portfolio.ts`: profile, navigation, skills, project, timeline, and contact data
- `src/components`: reusable section components
- `public/images/projects`: project visuals and verified output images
- `public/videos/projects`: browser-playable project demo videos
- `public/resume`: generated public master resume PDF
- `public/case-studies`: public Markdown copies of sanitised portfolio case studies
- `docs/career`: editable Resume/CV package, evidence notes, and case-study source files
- `projects/stock-market-direction-prediction`: public-ready Stock ML project rebuilt from assignment evidence

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Deployment

- Platform: Vercel
- Public website URL: https://jinhyeok-portfolio-amber.vercel.app

## Content Notes

- Contact links use the verified GitHub and email values provided by Jinhyeok Kim.
- BioGeoDA and Gym AI Trainer descriptions are based on inspected local project README files, source structure, and metrics files.
- Gym AI Trainer is linked to the public Vercel app and uses its documented short-video public demo flow.
- The Tennis project links to the existing public repository and embeds a derived HTML5 tracking-result video generated from the repository pipeline.
- AAPL Stock Direction Prediction is included as a time-series ML evaluation project with code, results, diagnostic plots, dataset notes, and limitations.
- The Event Management System Project Plan is presented as a sanitised academic case study; the original report and workbook are not public.
- The public resume download points to `public/resume/Jinhyeok_Kim_Master_Resume.pdf`.
