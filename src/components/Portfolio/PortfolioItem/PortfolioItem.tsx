import Image from "next/image"
import { ProjectItem } from "../Portfolio"
import IconBlank from "./IconBlank"

const PortfolioItem: React.FC<ProjectItem> = ({
    link,
    classList,
    name,
    subName,
    icon,
    description,
    slogan,
    githubLink,
}) => {
    return (
        <div className={classList}>
            <div>
                <span className="name">
                    <small>{subName}</small>
                    <span className="name-line">
                        {name}
                        <Image
                            src={icon}
                            alt={name}
                            width={classList.includes("html") ? "86" : "50"}
                            height="50"
                        />
                    </span>
                    {slogan && (
                        <>
                            <span className="slogan">{slogan}</span>
                        </>
                    )}
                </span>
                {description && (
                    <>
                        <span className="description">{description}</span>
                    </>
                )}
            </div>
            <div className="flex flex-wrap gap-5">
                <a
                    className={`btn btn-white ${!link ? "btn-disable" : ""}`}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {link ? (
                        <>
                            Otwórz
                            <IconBlank />
                        </>
                    ) : (
                        "In progress..."
                    )}
                </a>
                <a
                    className="btn btn-transparent"
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                    <IconBlank />
                </a>
            </div>
        </div>
    )
}

export default PortfolioItem
