import React, { useState, useEffect } from "react"
import "./Cv.css"

interface CvProps {
    openCv: () => void
}

interface Contact {
    email: string
    phone: string
    linedin: string
    github: string
    www: string
}

interface ExperienceWork {
    date: string
    position: string
    company: string
    tasks: string[]
}

interface Experience {
    name: string
    works: ExperienceWork[][]
}

interface Education {
    date: string
    field: string
    name: string
    spec: string
}

interface CvData {
    name: string
    experienceYears: string
    contact: Contact
    aboutMe: string
    techSkils: [string, string][]
    experience: Experience
    languages: [string, string][]
    education: Education
    interests: string
}

const OpenCv: React.FC<CvProps> = ({ openCv }) => {
    const [data, setData] = useState<CvData | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [loadSuccess, setLoadSuccess] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://typodgrafiki.pl/api/cv/data.json"
                )
                const data = await response.json()

                await new Promise((resolve) => setTimeout(resolve, 1500))

                setIsLoading(false)

                await new Promise((resolve) => setTimeout(resolve, 1500))
                setData(data)
            } catch (error) {
                // console.error("Błąd podczas pobierania danych:", error)
                
                setLoadSuccess(false)

                await new Promise((resolve) => setTimeout(resolve, 1500))

                setIsLoading(false)
                
            }
        }

        fetchData()

        const handleKeyEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape" || event.code === "Escape") {
                openCv()
            }
        }

        document.addEventListener("keydown", handleKeyEsc)

        return () => {
            document.removeEventListener("keydown", handleKeyEsc)
        }
    }, [])

    return (
        <>
            <div className="shadow"></div>
            <div
                className={`modal ${isLoading ? "loading" : "show"} ${
                    !loadSuccess && !isLoading ? "loadFail" : ""
                }`}
            >
                <div className="content">
                    {data ? (
                        <>
                            <h2>
                                {data.name}{" "}
                                <small>({data.experienceYears})</small>
                            </h2>
                            <section className="flex">
                                <ul>
                                    <li>
                                        <a href="mailto:{data.contact.email}">
                                            {data.contact.email}
                                        </a>{" "}
                                        <span className="text-muted">
                                            (preferowany)
                                        </span>
                                    </li>
                                    <li>{data.contact.phone}</li>
                                    <li>
                                        <a
                                            href="{data.contact.linedin}"
                                            target="_blank"
                                            rel="nofollow noreferer noopener"
                                        >
                                            {data.contact.linedin}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="{data.contact.www}"
                                            target="_blank"
                                            rel="nofollow noreferer noopener"
                                        >
                                            {data.contact.www}
                                        </a>
                                    </li>
                                </ul>
                                <div>{data.aboutMe}</div>
                            </section>
                            <section>
                                <h3>Tech skils</h3>
                                <table>
                                    <tbody>
                                        {data.techSkils.map((el, index) => (
                                            <ListElement
                                                data={el}
                                                key={index}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </section>
                            <section>
                                <h3>{data.experience.name}</h3>
                                {data.experience.works.map((el, index) => (
                                    <WorkElement
                                        data={el}
                                        key={index}
                                    />
                                ))}
                            </section>
                            <section className="flex">
                                <div className="col-sm-50">
                                    <h3>Języki</h3>
                                    <table>
                                        <tbody>
                                            {data.languages.map((el, index) => (
                                                <ListElement
                                                    data={el}
                                                    key={index}
                                                />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-sm-50">
                                    <h3>Edukacja</h3>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>{data.education.date}</td>
                                                <td>
                                                    <strong>
                                                        {data.education.field}
                                                    </strong>
                                                    <br />
                                                    {data.education.name}
                                                    <br />
                                                    {data.education.spec}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section className="flex">
                                <div className="col-sm-50">
                                    <h3>Zainteresowania</h3>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>{data.interests}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <a
                                id="printBtn"
                                target="_blank"
                                href="https://typodgrafiki.pl/cv_pl.pdf"
                                rel="nofollow noreferer noopener"
                                className="btn btn-default"
                                style={{ opacity: 1 }}
                            >
                                Drukuj
                            </a>
                        </>
                    ) : (
                        <p className="textFalse">Nie udało się wgrać pliku.</p>
                    )}
                </div>
                {data && (
                    <button
                        id="close-modal"
                        className="close btn"
                        onClick={openCv}
                        aria-label="Zamknij"
                    ></button>
                )}
            </div>
        </>
    )
}

const ListElement: React.FC<{ data: [string, string] }> = ({ data }) => {
    return (
        <>
            <tr>
                <td>{data[0]}:</td>
                <td>{data[1]}</td>
            </tr>
        </>
    )
}

const WorkElement: React.FC<{ data: ExperienceWork[] }> = ({ data }) => {
    return (
        <>
            <div className="works">
                <div className="date">{data[0].date}</div>
                <div className="title-work">
                    <strong>{data[0].position}</strong>
                </div>
                <div className="company">{data[0].company}</div>
                <ul>
                    {data[0].tasks.map((el, index) => (
                        <li key={index}>{el}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export { OpenCv }