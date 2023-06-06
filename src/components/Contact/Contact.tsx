import React, { useRef, FormEvent } from "react"
import emailjs from "@emailjs/browser"
import EmailsjData from "./EmailsjData"
import "./Contact.css"
import "./Loader.css"

const Contact: React.FC = () => {
    const form = useRef(null)

    const sendEmail = (e: FormEvent) => {
        e.preventDefault()

        const formEl = document.querySelector(".form")
        const loaderEl = document.createElement("div")

        loaderEl.classList.add("lds-roller")
        if (formEl !== null) {
            formEl.classList.add("sending")
            formEl.append(loaderEl)    
        }
        
        loaderEl.innerHTML =
            "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>"
        loaderEl.classList.add("show")

        if (form.current !== null) {
            emailjs
                .sendForm(
                    EmailsjData.service,
                    EmailsjData.template,
                    form.current,
                    EmailsjData.publicKey
                )
                .then((result: any) => {
                        formSended(result, loaderEl)
                    },
                    (error) => {
                        formSended(error, loaderEl)
                    }
                )
        }
    }

    const formSended = (res: any, loader: HTMLElement) => {
        
        const formEl = document.querySelector(".form") as HTMLFormElement
        const formSuccess = document.createElement("div")
        const formSuccessName = document.createElement("h4")
        const formSuccessP = document.createElement("p")
        const formSuccessButton = document.createElement("a")

        loader.classList.remove("show")

        formSuccessButton.classList.add("btn", "btn-default")
        formSuccessButton.setAttribute("id", "buttonCloseForm")
        
        console.log(res)
        
        if (res.status === 200) {
            formSuccessName.textContent = "Dziękuję za kontakt"
            formSuccessP.textContent = "Odpowiem tak szybko jak to możliwe."
            formSuccessButton.textContent = "Zamknij"
        } else {
            formSuccessName.textContent = "Nie udało się wysłać formularza"
            formSuccessP.textContent = "Spróbuj jeszcze raz."
            formSuccessButton.textContent = "Spróbuj ponownie"
        }

        formSuccess.classList.add("form-success")
        formSuccess.append(formSuccessName, formSuccessP, formSuccessButton)
        formEl.appendChild(formSuccess)

        setTimeout(() => {
            formEl.classList.remove("sending")
            loader.remove()
            if (res.status === 200) {
                formEl.reset()
            }
        }, 1000)

        formSuccessButton.addEventListener("click", function () {
            closeformSuccess(formSuccess)
        })
    }

    const closeformSuccess = (e: HTMLElement) => {
        e.style.opacity = '0'
        setTimeout(() => {
            e.remove();
        }, 1000);
    }

    return (
        <section
            id="contact"
            className="window-height flex horizontal-center margin-section"
        >
            <div className="caption small-width caption-border">
                <h2 className="title-small">Kontakt</h2>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="form grid relative"
                >
                    <p className="col-100 form-row">
                        Dziękuję za poświęcenie mi czasu. Jak mogę Ci dzisiaj
                        pomóc?
                    </p>
                    <div className="form-row">
                        <label>Imię i nazwisko</label>
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Jan Kowalski"
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label>Email</label>
                        <input
                            type="email"
                            name="from_email"
                            placeholder="jan@example.com"
                            required
                        />
                    </div>
                    <div className="messege form-row">
                        <label>Wiadomość</label>
                        <textarea
                            className="form-message"
                            name="message"
                            required
                        ></textarea>
                    </div>
                    <div className="submit text-right form-row">
                        <button
                            type="submit"
                            className="btn btn-default"
                        >
                            Wyślij
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
