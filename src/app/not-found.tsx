import Link from "next/link"
import Head from "next/head"
import "@/styles/App.css"
import "@/styles/error404.css"

export default function Custom404() {
    return (
        <>
            <Head>
                <title>
                    You lost! - Grzegorz Kocik - Front-end Developer Portfolio
                </title>
            </Head>
            <div className="bg-gradient error404">
                <div>
                    <h1>Opps!</h1>
                    <p>Strona nie została znaleziona.</p>
                    <Link href="/" className="btn btn-default">
                        Back to the home page
                    </Link>
                </div>
            </div>
        </>
    )
}
