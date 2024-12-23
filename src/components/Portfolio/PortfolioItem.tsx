import { ProjectItem } from "@/types/types"
import { useTranslations } from "next-intl"
import PortfolioItemImages from "./PortfolioItemImages"

const PortfolioItem = ({ item }: { item: ProjectItem }) => {
    const t = useTranslations("projects")
    const labelledby = labelledbyFn(item.name)

    return (
        <article
            className="project-item"
            aria-labelledby={labelledby}
        >
            <PortfolioItemImages item={item}>
                <h3
                    id={labelledby}
                    className="name"
                >
                    {item.name}
                </h3>
                <p
                    className="scope"
                    aria-label={t("projectScope", { scope: item.scope })}
                >
                    {item.scope}
                </p>
            </PortfolioItemImages>
        </article>
    )
}

const labelledbyFn = (name: string) => {
    const result = `project-${name.toLowerCase().replace(/\s+/g, "-")}`
    return result
}

export default PortfolioItem
