import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism"
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
        <SyntaxHighlighter language={language} style={okaidia}>
            {code}
        </SyntaxHighlighter>
    </>
)

export default CodeSnippet
