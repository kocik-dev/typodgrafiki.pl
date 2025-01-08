/**
 * PortfolioItemImages - Komponent zarządzający obrazami projektu
 *
 * Obsługuje interaktywne wyświetlanie obrazów projektu z animacjami,
 * stanem ładowania i przyciskami akcji. Zawiera komponenty Plus i Lock
 * dla ikon oraz pełne wsparcie dostępności.
 *
 * @props
 * - children: React.ReactNode - Zawartość (nazwa i opis projektu)
 * - item: ProjectItem - Dane projektu:
 *   - image: StaticImageData - Obraz projektu
 *   - name: string - Nazwa projektu
 *   - width: number - Szerokość obrazu
 *   - height: number - Wysokość obrazu
 *
 * @state
 * - isHover: boolean - Stan najechania/fokusa na przycisk plus
 * - isLoading: boolean - Stan ładowania obrazu
 *
 * @hooks
 * - useEmailSender - Hook do wysyłania maili
 * - useTranslations - Hook do tłumaczeń
 *
 * @components
 * - Plus - Przycisk pokazujący obraz
 * - Lock - Ikona blokady
 * - SlideTop - Komponent animacji
 *
 * @accessibility
 * - Przyciski z odpowiednimi aria-labels
 * - Ukryte teksty dla czytników (visually-hidden)
 * - Stan ładowania z role="status"
 * - Obsługa klawiatury (focus/blur)
 *
 * @i18n
 * Używa przestrzeni nazw "projects" dla tłumaczeń:
 * - requestDetails: Label przycisku szczegółów
 * - button: Tekst przycisku
 * - projectImageAlt: Alt tekst obrazu
 * - loading: Text stanu ładowania
 * - showProjectImage: Label przycisku plus
 *
 * @interactions
 * - Pokazywanie obrazu po najechaniu/fokusie
 * - Wysyłanie maila z zapytaniem o projekt
 * - Obsługa stanu ładowania obrazu
 *
 * @example
 * ```jsx
 * <PortfolioItemImages
 *   item={{
 *     name: "Project Name",
 *     image: projectImage,
 *     width: 480,
 *     height: 320
 *   }}
 * >
 *   <h3>Project Name</h3>
 *   <p>Project Description</p>
 * </PortfolioItemImages>
 * ```
 */

/**
 * Lock - Komponent ikony blokady
 * SVG ikona używana w przycisku szczegółów projektu
 */

/**
 * Plus - Komponent przycisku pokazującego obraz
 *
 * @props
 * - setIsHover: React.Dispatch<React.SetStateAction<boolean>>
 * - name: string - Nazwa projektu dla dostępności
 *
 * @accessibility
 * - aria-label z tłumaczonym tekstem
 * - Ukryty tekst dla czytników
 * - Obsługa hover i focus
 */

"use client"

import Image from "next/image"
import React, { useState } from "react"
import { useTranslations } from "next-intl"
import SlideTop from "@/animations/SlideTop"
import { ProjectItem } from "@/types/website"
import useEmailSender from "@/hooks/useSendEmail"

export default function PortfolioItemImages({
    children,
    item,
}: {
    children: React.ReactNode
    item: ProjectItem
}) {
    const [isHover, setIsHover] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const t = useTranslations("projects")

    const sendEmail = useEmailSender()

    const { image, name, width, height } = item

    const handleImageLoad = () => {
        setIsLoading(false)
    }

    const emailSubject = "Contact for project details"
    const emailText = `Hi, I would like to know more about your role in the ${name} project`

    return (
        <SlideTop>
            <div className="flex-sm">
                <Plus
                    setIsHover={setIsHover}
                    name={name}
                />
                {children}
                <div className="flex justify-start gap-1">
                    <button
                        className="btn btn-transparent btn-bubble-bottom"
                        onClick={() => sendEmail(emailSubject, emailText)}
                        aria-label={t("requestDetails", { name: name })}
                    >
                        <span>
                            <Lock aria-hidden="true" />
                            {t("button")}
                        </span>
                    </button>
                </div>
            </div>
            {isHover ? (
                <div
                    className="project-image"
                    role="img"
                    aria-label={t("projectImageAlt", { name: name })}
                >
                    <Image
                        src={image}
                        alt={t("projectImageAlt", { name: name })}
                        width={width}
                        height={height}
                        onLoad={handleImageLoad}
                    />
                    {isLoading ? (
                        <div
                            className="loader"
                            role="status"
                            aria-label={t("loading")}
                        ></div>
                    ) : null}
                </div>
            ) : null}
        </SlideTop>
    )
}

const Lock = () => {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.6875 15.3542C11.6875 14.9746 11.3797 14.6667 11 14.6667C10.6203 14.6667 10.3125 14.9746 10.3125 15.3542V16.7292C10.3125 17.1089 10.6203 17.4167 11 17.4167C11.3797 17.4167 11.6875 17.1089 11.6875 16.7292V15.3542Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.0003 1.83325C8.34245 1.83325 6.18783 3.98788 6.18783 6.64575V8.3645H5.04199C3.90291 8.3645 2.97949 9.28795 2.97949 10.427V18.1036C2.97949 19.2428 3.90291 20.1661 5.04199 20.1661H16.9587C18.0977 20.1661 19.0212 19.2428 19.0212 18.1036V10.427C19.0212 9.28795 18.0977 8.3645 16.9587 8.3645H15.8128V6.64575C15.8128 3.98789 13.6582 1.83325 11.0003 1.83325ZM14.4378 6.64575V8.3645H7.56283V6.64575C7.56283 4.74727 9.10184 3.20825 11.0003 3.20825C12.8988 3.20825 14.4378 4.74727 14.4378 6.64575ZM5.04199 9.7395C4.6623 9.7395 4.35449 10.0473 4.35449 10.427V18.1036C4.35449 18.4833 4.6623 18.7911 5.04199 18.7911H16.9587C17.3383 18.7911 17.6462 18.4833 17.6462 18.1036V10.427C17.6462 10.0473 17.3383 9.7395 16.9587 9.7395H5.04199Z"
                fill="currentColor"
            />
        </svg>
    )
}

const Plus = ({
    setIsHover,
    name,
}: {
    setIsHover: React.Dispatch<React.SetStateAction<boolean>>
    name: string
}) => {
    const t = useTranslations("projects")

    return (
        <button
            className="btn btn-transparent btn-round btn-bubble-bottom"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onFocus={() => setIsHover(true)}
            onBlur={() => setIsHover(false)}
            aria-label={t("showProjectImage", { name: name })}
        >
            <span className="visually-hidden">
                {t("showProjectImage", { name: name })}
            </span>
            <span>
                <svg
                    width="10"
                    height="10"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ margin: 0 }}
                >
                    <path
                        d="M6.2502 1C6.2502 0.58579 6.586 0.25 7.0002 0.25C7.4145 0.25 7.7502 0.58579 7.7502 1V6.2502H13.0007C13.4149 6.2502 13.7507 6.586 13.7507 7.0002C13.7507 7.4145 13.4149 7.7502 13.0007 7.7502H7.7502V13.0007C7.7502 13.4149 7.4145 13.7507 7.0002 13.7507C6.586 13.7507 6.2502 13.4149 6.2502 13.0007V7.7502H1C0.58579 7.7502 0.25 7.4145 0.25 7.0002C0.25 6.586 0.58579 6.2502 1 6.2502H6.2502V1Z"
                        fill="currentColor"
                    />
                </svg>
            </span>
        </button>
    )
}
