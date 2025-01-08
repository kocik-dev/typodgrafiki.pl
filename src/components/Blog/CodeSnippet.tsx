/**
 * CodeSnippet - Komponent do wyświetlania podświetlonego kodu
 *
 * Renderuje fragment kodu z podświetlaniem składni wykorzystując prism-react-renderer.
 * Używa motywu Dracula i wyświetla nazwę języka nad fragmentem kodu.
 *
 * @props
 * - language: string - Język programowania dla podświetlania składni
 * - code: string - Kod źródłowy do wyświetlenia
 *
 * @styling
 * - Używa motywu Dracula z prism-react-renderer
 * - Własne style z code-snippet.css
 * - Wyświetla nazwę języka nad blokiem kodu
 *
 * @implementation
 * - Wykorzystuje Highlight z prism-react-renderer do renderowania
 * - Renderuje każdą linię i token kodu osobno dla precyzyjnego stylowania
 * - Zachowuje formatowanie i wcięcia kodu
 *
 * @example
 * ```jsx
 * <CodeSnippet
 *   language="javascript"
 *   code="const hello = 'world';"
 * />
 * ```
 *
 * @dependencies
 * - prism-react-renderer
 * - code-snippet.css dla stylowania
 */

import { Highlight, themes } from "prism-react-renderer"
import "../../styles/code-snippet.css"

const CodeSnippet = ({
    language,
    code,
}: {
    language: string
    code: string
}) => (
    <>
        <p className="code-language">{language}</p>
        <Highlight
            theme={themes.dracula}
            code={code}
            language={language}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    className={className}
                    style={style}
                >
                    {tokens.map((line, i) => (
                        <div
                            key={i}
                            {...getLineProps({ line })}
                        >
                            {line.map((token, key) => (
                                <span
                                    key={key}
                                    {...getTokenProps({ token })}
                                />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    </>
)

export default CodeSnippet
