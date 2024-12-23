import { useCallback } from "react"

const useEmailSender = () => {
    const sendEmail = useCallback((subject = "", body = "") => {
        const mailtoLink = `mailto:kocik.dev@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`
        window.location.href = mailtoLink
    }, [])

    return sendEmail
}

export default useEmailSender
