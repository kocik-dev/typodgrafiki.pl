/**
 * PortfolioItem - Komponent pojedynczego projektu w portfolio
 *
 * Renderuje kartę projektu zawierającą obraz, nazwę i zakres prac.
 * Zapewnia pełną dostępność i integrację z systemem tłumaczeń.
 *
 * @props
 * - item: ProjectItem - Dane projektu:
 *   - name: string - Nazwa projektu
 *   - scope: string - Zakres prac
 *   - image: StaticImageData - Obraz projektu
 *   - width: number - Szerokość obrazu
 *   - height: number - Wysokość obrazu
 *
 * @accessibility
 * - Semantyczna struktura z użyciem article
 * - Unikalny identyfikator dla nagłówka (h3)
 * - aria-labelledby łączący artykuł z nagłówkiem
 * - aria-label dla zakresu prac z tłumaczeniem
 *
 * @i18n
 * Wykorzystuje przestrzeń nazw "projects" dla tłumaczeń:
 * - projectScope: Opis zakresu prac ({scope})
 *
 * @components
 * - PortfolioItemImages - Komponent obsługujący obrazy projektu
 *
 * @utils
 * labelledbyFn(name: string): string
 * - Generuje unikalny identyfikator dla ARIA
 * - Zamienia spacje na myślniki i konwertuje na małe litery
 * - Format: project-{name}
 *
 * @example
 * ```jsx
 * <PortfolioItem
 *   item={{
 *     name: "Project Name",
 *     scope: "UI/UX, Development",
 *     image: projectImage,
 *     width: 480,
 *     height: 320
 *   }}
 * />
 * ```
 */

import { ProjectItem } from "@/types/website"
import { getTranslationsSection } from "@/i18n/translations"
import PortfolioItemImages from "./PortfolioItemImages"

const PortfolioItem = async ({ item }: { item: ProjectItem }) => {
    const t = await getTranslationsSection("projects")
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
                    aria-label={t.projectScope + " " + item.scope}
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
