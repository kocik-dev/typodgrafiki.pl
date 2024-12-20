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
