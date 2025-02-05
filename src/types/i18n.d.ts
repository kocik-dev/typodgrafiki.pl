import { defaultLocale, locales } from "@/i18n/settings"
import { TagId } from "@/types/website"

export type Locale = (typeof locales)[number] | defaultLocale

export type Translations = {
    metadata: Metadata
    menu: Menu
    main: Main
    about: About
    projects: Project
    web3: Web3
    blog: Blog
    notFound: NotFound
    footer: Footer
    modal: Modal
}

type Metadata = {
    title: string
    description: string
    jobTitle: string
    schemaDescription: string
}

type Menu = {
    about: string
    portfolio: string
    blog: string
    contact: string
    menuOpen: string
    menuClose: string
    toTop: string
}

type Main = {
    h2: string
    keywordsSection: string
    seoText: string
    skipToMain: string
}

type About = {
    title: string
    subtitle: string
    text1: string
    text2: string
    text3: string
    scrollToTop: string
    technologies: string
    tools: string
    scroll: string
}

type Project = {
    title: string
    button: string
    projectsList: string
    showProjectImage: string
    requestDetails: string
    projectScope: string
    projectImageAlt: string
    loading: string
    discipline: string
    disciplineText1: string
    disciplineText2: string
    tools: string
    industry: string
    role: {
        brand?: string
        design?: string
        www?: string
        mobile?: string
        fullstack?: string
    }
}

type Web3 = {
    btnConnectWeb3: string
    btnWeb3Connected: string
    modalRequestTitle: string
    modalRequestText: string
    modalRequestRecent: string
    btnTryAgain: string
    install: string
    installText1: string
    installText2: string
    installBtn: string
    disconnect: string
    loading: string
    mint: {
        buttonTop: string
        button1: string
        button2: string
        left: string
        switch: string
        textSuccess: string
        contractAddress: string
        buttonWaiting: string
        buttonConfirming: string
    }
}

type Blog = {
    title: string
    all: string
    listEmptyText: string
    seeAllPosts: string
    postBtn: string
    tags: {
        anim: string
        react: string
        a11y: string
        css: string
        next: string
        web3: string
    }
}

type NotFound = {
    title: string
    subtitle: string
    text: string
    button: string
}

type Footer = {
    title: string
    contactSectionLabel: string
    emailSubject: string
    emailText: string
    emailBtnLabel: string
    emailBtnText: string
    copyright: string
    socialTwitter: string
    socialTwitterAria: string
    socialInstagramAria: string
    socialLinkedinAria: string
}

type Modal = {
    titleConnected: string
    titleConnect: string
    titleNft: string
}

declare module "*.mdx" {
    export interface FrontMatter {
        title: string
        date: string
        description?: string
        tags: TagId[]
    }
}
