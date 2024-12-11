import { useTranslations } from "next-intl"
import "./Main.css"
import { fascinate } from "../../components/Fonts"
import { Header } from "../Header/Header"

const Main = () => {
    const t = useTranslations("main")

    return (
        <>
            <div id="top"></div>
            <div id="main">
                <div className="container">
                    <Header />
                    <div className="flex main-section">
                        <h1 className={`title ${fascinate.className}`}>
                            Front-end Developer
                        </h1>
                        <h2 className="flex subtitle">{t("h2")}</h2>
                    </div>
                </div>
                <h3 className="text-animated">
                    <span data-text={t("seoText")}>{t("seoText")}</span>
                </h3>
            </div>
        </>
    )
}

export default Main
