"use client"

import React from "react"
import useEmailSender from "@/hooks/useSendEmail"

export default function BtnSendEmail() {
    const sendEmail = useEmailSender()

    const emailSubject = "Collaboration with kocik.dev"
    const emailText = "Hi. Let's talk about..."

    return (
        <button
            className="btn btn-default"
            onClick={() => sendEmail(emailSubject, emailText)}
            aria-label="Send me an email to discuss collaboration"
        >
            <span
                className="icon"
                aria-hidden="true"
            >
                <IconEmail />
            </span>
            <span className="button-text">Send me an email</span>
        </button>
    )
}

const IconEmail = () => {
    return (
        <svg
            width="16"
            height="12"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 1.63636C2.28992 1.63636 1.71429 2.18583 1.71429 2.86364V15.1364C1.71429 15.8142 2.28992 16.3636 3 16.3636H21C21.7101 16.3636 22.2857 15.8142 22.2857 15.1364V2.86364C22.2857 2.18583 21.7101 1.63636 21 1.63636H3ZM0 2.86364C0 1.28209 1.34315 0 3 0H21C22.6569 0 24 1.28209 24 2.86364V15.1364C24 16.7179 22.6569 18 21 18H3C1.34315 18 0 16.7179 0 15.1364V2.86364Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.18962 3.3432C3.49479 2.9557 4.06023 2.88589 4.45258 3.18728L12 8.98502L19.5474 3.18728C19.9398 2.88589 20.5052 2.9557 20.8104 3.3432C21.1155 3.73071 21.0449 4.28917 20.6525 4.59057L12.5525 10.8128C12.2275 11.0624 11.7725 11.0624 11.4475 10.8128L3.34749 4.59057C2.95514 4.28917 2.88446 3.73071 3.18962 3.3432Z"
                fill="currentColor"
            />
        </svg>
    )
}
