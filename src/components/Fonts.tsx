import { Poppins, Fascinate_Inline } from "next/font/google"

export const poppins = Poppins({
    subsets: ["latin", "latin-ext"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600"],
})

export const fascinate = Fascinate_Inline({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
})
