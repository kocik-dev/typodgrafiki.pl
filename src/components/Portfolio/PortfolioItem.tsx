import { ProjectItem } from "./Portfolio"
import PortfolioItemImages from "./PortfolioItemImages"

const PortfolioItem = ({ name, scope, images }: ProjectItem) => {
    return (
        <PortfolioItemImages images={images} name={name}>
            <p className="name">{name}</p>
            <p className="scope">{scope}</p>
        </PortfolioItemImages>
    )
}

export default PortfolioItem
