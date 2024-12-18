import { ProjectItem } from "./Portfolio"
import PortfolioItemImages from "./PortfolioItemImages"

const PortfolioItem = ({ name, scope, image }: ProjectItem) => {
    return (
        <PortfolioItemImages
            image={image}
            name={name}
        >
            <p className="name">{name}</p>
            <p className="scope">{scope}</p>
        </PortfolioItemImages>
    )
}

export default PortfolioItem
