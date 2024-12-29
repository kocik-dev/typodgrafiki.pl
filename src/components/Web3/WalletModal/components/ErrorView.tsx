// "use client"

// import React, { useState } from "react"
// import { ImageMetamaskBig } from "./ConnectView"
// import { WalletConnectMessageType } from "@/types/web3"

// export default function ErrorView() {
//     const [message, setMessage] = useState<WalletConnectMessageType | null>(
//         null
//     )
//     return (
//         <div className="flex flex-column vertical-center text-center">
//             <ImageMetamaskBig />
//             <p className="modal-title">{message.title}</p>
//             <p className="text">{message.text}</p>
//             {message.btn && (
//                 <button
//                     className="btn btn-transparent"
//                     onClick={handleMetamaskConnect}
//                 >
//                     Try again
//                 </button>
//             )}
//         </div>
//     )
// }

"use client"

import React from "react"
import { ImageMetamaskBig } from "./ConnectView"
import { useWeb3Modal } from "@/contexts/Web3ModalContext"

export default function ErrorView() {
    const { errorMessage, navigateTo } = useWeb3Modal()

    if (!errorMessage) {
        return null // Nie wyświetlaj niczego, jeśli brak wiadomości błędu
    }

    return (
        <div className="flex flex-column vertical-center text-center">
            <ImageMetamaskBig />
            <p className="modal-title">{errorMessage.title}</p>
            <p className="text">{errorMessage.text}</p>
            {errorMessage.btn && (
                <button
                    className="btn btn-transparent"
                    onClick={() => navigateTo("connect")} // Powrót do widoku connect
                >
                    Try again
                </button>
            )}
        </div>
    )
}
