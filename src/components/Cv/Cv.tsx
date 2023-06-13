import React, { useState, useEffect } from "react"
import "./Cv.css"

interface CvProps {
    openCv: () => void
}

const OpenCv: React.FC<CvProps> = ({ openCv }) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://typodgrafiki.pl/api/cv/data.json"
                )
                const data = await response.json()

                await new Promise((resolve) => setTimeout(resolve, 2000))

                setIsLoading(false)

                await new Promise((resolve) => setTimeout(resolve, 1500))
                setData(data)
            } catch (error) {
                console.error("Błąd podczas pobierania danych:", error)
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            <div className="shadow"></div>
            <div className={isLoading ? "modal" : "modal show"}>
                <div className="content">
                    {data && (
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
                                        >
                                            {data.contact.linedin}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="{data.contact.www}"
                                            target="_blank"
                                        >
                                            {data.contact.www}
                                        </a>
                                    </li>
                                </ul>
                                <div>{data.aboutMe}</div>
                            </section>
                            <section>
                                <h3>Tech skils</h3>
                                {/* <table>{list(data.techSkils)}</table> */}
                            </section>
                            <section>
                                <h3>{data.experience.name}</h3>
                                {/* {listExperience(data.experience.works)} */}
                            </section>
                            <section className="flex">
                                <div className="col-sm-50">
                                    <h3>Języki</h3>
                                    {/* <table>{list(data.languages)}</table> */}
                                </div>
                                <div className="col-sm-50">
                                    <h3>Edukacja</h3>
                                    <table>
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
                                    </table>
                                </div>
                            </section>
                            <section className="flex">
                                <div className="col-sm-50">
                                    <h3>Zainteresowania</h3>
                                    <table>
                                        <tr>
                                            <td>{data.interests}</td>
                                        </tr>
                                    </table>
                                </div>
                            </section>
                        </>
                    )}
                </div>
                {data && (
                    <button
                        id="close-modal"
                        className="close btn"
                        onClick={openCv}
                    ></button>
                )}
            </div>
        </>
    )
}

// import React, { useState } from "react"

// import "./Cv.css"

// const OpenCv = () => {
// const rootEl = document.querySelector("#root") as HTMLElement
// const cvElement = document.createElement("div")
// const cvElementContent = document.createElement("div")
// const closeEl = document.createElement("button")
// const fadeContent = document.createElement("div")
// cvElement.classList.add("modal")
// cvElementContent.classList.add("content")
// fadeContent.classList.add("shadow")
// closeEl.setAttribute("id", "close-modal")
// closeEl.classList.add("close", "btn")
// rootEl.appendChild(fadeContent)
// rootEl.appendChild(cvElement)
// document.body.style.overflow = "hidden"
// const printBtn = document.createElement("a")
// printBtn.setAttribute("id", "printBtn")
// printBtn.setAttribute("target", "_blank")
// printBtn.setAttribute("href", "https://typodgrafiki.pl/cv_pl.pdf")
// printBtn.setAttribute("rel", "nofollow noreferer noopener")
// printBtn.style.opacity = "1"
// printBtn.classList.add("btn", "btn-default")
// printBtn.textContent = "Drukuj"
// setTimeout(() => {
//     cvElement.classList.add("loading")
//     setTimeout(() => {
//         cvElement.classList.add("show")
//         cvElement.classList.remove("loading")
//         setTimeout(() => {
//             cvElementContent.innerHTML = dataTemplate
//             cvElement.append(cvElementContent, closeEl)
//             cvElementContent.append(printBtn)
//         }, 1200)
//     }, 750)
// }, 750)
// const closeCv = (): void => {
//     cvElement.classList.add("detach")
//     document.body.style.overflow = ""
//     setTimeout(() => {
//         fadeContent.style.opacity = "0"
//         setTimeout(() => {
//             cvElement.remove()
//             fadeContent.remove()
//         }, 200)
//     }, 200)
// }
// closeEl.addEventListener("click", closeCv)
// document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//         closeCv()
//     }
// })
// }

export { OpenCv }
