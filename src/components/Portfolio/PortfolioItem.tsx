import { ProjectItem } from "@/types/types"
import { useTranslations } from "next-intl"
import PortfolioItemImages from "./PortfolioItemImages"

const PortfolioItem = ({ item }: { item: ProjectItem }) => {
    return (
        <PortfolioItemImages item={item}>
            <p className="name">{item.name}</p>
            <p className="scope">{item.scope}</p>
        </PortfolioItemImages>
    )
}

export default PortfolioItem
