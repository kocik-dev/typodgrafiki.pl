import bootstrap from "./bootstrap.svg"
import figma from "./figma.svg"
import github from "./github.svg"
import javascript from "./javascript.svg"
import jira from "./jira.svg"
import nextjs from "./nextjs.svg"
import photoshop from "./photoshop.svg"
import postgres from "./postgresql.svg"
import prisma from "./prisma.svg"
import react from "./react.svg"
import sass from "./sass.svg"
import tailwind from "./tailwind.svg"
import typescript from "./typescript.svg"
import versionControl from "./version-control.svg"
import vsc from "./visual-studio-code.svg"
import css3 from "./css3.svg"
import html5 from "./html5.svg"
import claude from "./claude.svg"
import { TypeIcons } from "@/types/website"

const technologies: TypeIcons = [
    { src: html5, alt: "HTML5" },
    { src: css3, alt: "CSS3" },
    { src: javascript, alt: "JavaScript" },
    { src: react, alt: "React" },
    { src: nextjs, alt: "Next.js" },
    { src: typescript, alt: "TypeScript" },
    { src: tailwind, alt: "Tailwind CSS" },
    { src: bootstrap, alt: "Bootstrap" },
    { src: sass, alt: "Sass" },
    { src: prisma, alt: "Prisma" },
    { src: postgres, alt: "PostgreSQL" },
]

const tools: TypeIcons = [
    { src: vsc, alt: "Visual Studio Code" },
    { src: versionControl, alt: "Version control" },
    { src: github, alt: "GitHub" },
    { src: figma, alt: "Figma" },
    { src: photoshop, alt: "Adobe Photoshop" },
    { src: jira, alt: "Jira" },
    { src: claude, alt: "Claude" },
]

export { technologies, tools }
