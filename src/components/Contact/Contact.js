import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import EmailsjData from './EmailsjData';
import './Contact.css';
import './Loader.css';
  
const Contact = () => {
    
    const form = useRef();
  
    const sendEmail = (e) => {
        e.preventDefault();
        
        const formEl = document.querySelector('.form');
        const loaderEl = document.createElement('div');
        formEl.classList.add('sending');
        
        loaderEl.classList.add('lds-roller');
        formEl.append(loaderEl);
        loaderEl.innerHTML = '<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>';
        
        loaderEl.classList.add('show');
        
        
        setTimeout(() => {
            formSended({text: 'OK'}, loaderEl);
        }, "3000");
        
      
      emailjs.sendForm(EmailsjData.service, EmailsjData.template, form.current, EmailsjData.publicKey)
        .then((result, loaderEl) => {
            formSended(result);
        }, (error, loaderEl) => {
            formSended(error);
        });
    };
    
    const formSended = (res, loader) => {
        
        const formEl = document.querySelector('.form');
        const formSuccess = document.createElement('div');
        const formSuccessP = document.createElement('p');
        const formSuccessButton = document.createElement('a');
        
        // loader.classList.remove('show');
        
        formSuccessButton.classList.add('btn', 'btn-default');
        formSuccessButton.setAttribute('id', 'buttonCloseForm');
        
        if (res.text === 'OK') {
            formSuccessP.append('Dziękuję za kontakt. Odpowiem tak szybko jak to możliwe.');
            formSuccessButton.append('Zamknij');
        }else{
            formSuccessP.append('Nie udało się wysłać formularza. Spróbuj jeszcze raz.');
            formSuccessButton.append('Spróbuj ponownie');
        }
        
        formSuccess.classList.add('form-success');
        formSuccess.append(formSuccessP, formSuccessButton);
        formEl.appendChild(formSuccess);
        
        setTimeout(() => {
            formEl.classList.remove('sending');
            // loader.remove();
            if (res.text === 'OK') {   
                formEl.reset();
            }
        }, "1000");
        
        formSuccessButton.addEventListener('click', function () {
            closeformSuccess(formSuccess);
        });
        
    }
    
    const closeformSuccess = (el) => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.remove();
        }, "1000");
    }
    
    return (
        <section id="contact" className="window-height flex horizontal-center">
            <div className="caption small-width">
                <h2 className="title-small">Kontakt</h2>
                <form ref={form} onSubmit={sendEmail} className="form grid relative">
                    <p className="col-100 form-row">Dziękuję za poświęcenie mi czasu. Jak mogę Ci dzisiaj pomóc?</p>
                    <div className="form-row">
                        <label>Imię i nazwisko</label>
                        <input type="text" name="from_name" placeholder="Jan Kowalski" required />
                    </div>
                    <div className="form-row">
                        <label>Email</label>
                        <input type="email" name="from_email" placeholder="jan@example.com" required />
                    </div>
                    <div className="messege form-row">
                        <label>Wiadomość</label>
                        <textarea className="form-message" name="message" required ></textarea>
                    </div>
                    <div className="submit text-right form-row">
                        <button type="submit" className="btn btn-default">Wyślij</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;