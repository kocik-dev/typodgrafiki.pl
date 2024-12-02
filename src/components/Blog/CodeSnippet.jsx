import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism"

const CodeSnippet = ({ language, code }) => (
    <SyntaxHighlighter
        language={language}
        style={okaidia}
    >
        {code}
    </SyntaxHighlighter>
)

export default CodeSnippet
