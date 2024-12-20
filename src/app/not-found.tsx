import Link from "next/link"
import Head from "next/head"
import "@/styles/App.css"
import "@/styles/error404.css"
import { fascinate } from "@/components/Fonts"

export default function Custom404() {
    return (
        <>
            <Head>
                <title>
                    You lost! - Grzegorz Kocik - Front-end Developer Portfolio
                </title>
            </Head>
            <div className="error404">
                <h1 className={`${fascinate.className}`}>Opps!</h1>
                <p>Strona nie została znaleziona.</p>
                <Link href="/" className="btn btn-default">
                    <Arrow />
                    Back to the home page
                </Link>
            </div>
        </>
    )
}

const Arrow = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
            width={16}
            height={16}
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="M244 400L100 256l144-144M120 256h292"
            />
        </svg>
    )
}
