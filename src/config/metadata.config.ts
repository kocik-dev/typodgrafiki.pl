import { Metadata } from "next"
import { Person, WithContext } from "schema-dts"
import { socialLinks } from "@/data/socialLinks"
import { SITE_URL } from "@/data/variables"

const title = "Grzegorz Kocik - Front-end Developer"
const description =
    "Frontend developer with experience in designing and implementing e-commerce interfaces. I combine UI/UX knowledge with programming skills, utilizing technologies like React and Next.js. I focus on creating responsive and accessible websites."

export const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Grzegorz Kocik",
    jobTitle: "Front-end Developer",
    description:
        "Experienced front-end developer with expertise in e-commerce.",
    url: SITE_URL,
    sameAs: [socialLinks.linkedin, socialLinks.github],
    worksFor: {
        "@type": "Organization",
        name: "Freelancer",
    },
    knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "E-commerce Development",
    ],
    image: `${SITE_URL}/profile-photo.jpg`,
}

export const metadata: Metadata = {
    applicationName: "Kocik.dev",
    title: title,
    description: description,
    keywords: [
        // Podstawowe określenie roli
        "frontend developer",
        "web developer",

        // Technologie (bez sugerowania poziomu eksperckiego)
        "react",
        "next.js",
        "javascript",
        "html",
        "css",

        // Doświadczenie branżowe
        "e-commerce development",
        "web development",

        // Umiejętności UI/UX
        "ui developer",
        "responsive design",
        "web accessibility",

        // Status zawodowy
        "freelancer",
        "portfolio",

        // Długi ogon (long-tail keywords)
        "tworzenie stron internetowych",
        "projektowanie interfejsów www",
        "strony internetowe react",

        // Lokalizacja
        "frontend developer polska",
    ],
    authors: [{ name: "Grzegorz Kocik" }],
    creator: "Grzegorz Kocik",
    generator: "Next.js",
    metadataBase: new URL(SITE_URL),
    alternates: {
        canonical: "/",
        // languages: {
        //     'en-US': '/en-US',
        //     'de-DE': '/de-DE',
        // },
    },

    openGraph: {
        title: title,
        description: description,
        url: SITE_URL,
        siteName: "Kocik.dev",
        images: [
            {
                url: `${SITE_URL}/og.png`,
                width: 1200,
                height: 630,
                alt: "Grzegorz Kocik - Front-end Developer",
            },
            {
                url: `${SITE_URL}/og-small.png`,
                width: 600,
                height: 315,
                alt: "Grzegorz Kocik - Front-end Developer",
            },
        ],
        type: "website",
    },

    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
        },
    },
    icons: {
        icon: [
            { url: "/icon.svg" },
            { url: "/icon-dark.svg", media: "(prefers-color-scheme: dark)" },
        ],
        shortcut: ["/shortcut-icon.png"],
        apple: [
            { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [`${SITE_URL}/og.png`],
    },
    category: "Web Development",
}

export const metadataBlog = {
    title: "Blog - Grzegorz Kocik",
    description: "Frontend development blog",
}
