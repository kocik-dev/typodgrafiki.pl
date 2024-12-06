import { Poppins, Fascinate } from "next/font/google"

export const poppins = Poppins({
    subsets: ["latin", "latin-ext"],
    display: "swap",
    weight: ["300", "400", "500"],
})

export const fascinate = Fascinate({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
})
