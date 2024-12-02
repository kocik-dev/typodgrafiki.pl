"use client"

import React from "react"
import "../../../styles/blog.css"
import CodeSnippet from "../../../components/Blog/CodeSnippet"

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    // const slug = (await params).slug
    return (
        <div className="container">
            <h1>Tytuł wpisu</h1>
            <p>Treść wpisu...</p>
            <CodeSnippet
                language="javascript"
                code={`const greet = () => { console.log('Hello, world!'); };`}
            />
            <CodeSnippet
                language="htmlbars"
                code={`<body>
    <div>
        <h1>hello, world!</h1>
    </div>
</body>`}
            />
        </div>
    )
}
