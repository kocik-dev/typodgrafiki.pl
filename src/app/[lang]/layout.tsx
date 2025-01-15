import { ReactNode } from "react"

export default async function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        // <html
        //     lang={locale}
        //     className={poppins.className}
        // >
        //     <head>
        //         <script
        //             type="application/ld+json"
        //             dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        //         />
        //     </head>
        //     <body>
        //         <Web3ModalProvider>
        //             <WalletProvider>
        //                 <NextIntlClientProvider
        //                     locale={locale}
        //                     messages={messages}
        //                 >
        //                     {children}
        //                     <WalletModal />
        //                 </NextIntlClientProvider>
        //             </WalletProvider>
        //         </Web3ModalProvider>
        //         <Cursor />
        //     </body>
        // </html>

        <div>{children}</div>
    )
}
