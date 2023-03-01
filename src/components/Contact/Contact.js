import React, { createElement, useRef } from 'react';
import emailjs from '@emailjs/browser';
import EmailsjData from './EmailsjData';
import './Contact.css';
  
const Contact = () => {
    
    const form = useRef();
  
    const sendEmail = (e) => {
        e.preventDefault();
        
        const formEl = document.querySelector('.form');
        formEl.classList.add('sending');
        
        setTimeout(() => {
            formSended({text: 'OK'});
        }, "3000");
        
      
    //   emailjs.sendForm(EmailsjData.service, EmailsjData.template, form.current, EmailsjData.publicKey)
    //     .then((result) => {
    //         formSended(result);
    //     }, (error) => {
    //         formSended(error);
    //     });
    };
    
    const formSended = (res) => {
        if (res.text === 'OK') {
            const formSuccess = document.createElement('div');
            const formSuccessButton = document.createElement('button');
            const formEl = document.querySelector('.form');
            const formSuccessButtonText = document.createTextNode('Zamknij');
            
            formSuccessButton.classList.add('btn', 'btn-default');
            formSuccessButton.append(formSuccessButtonText);
            formSuccess.classList.add('form-success');
            formSuccess.append('Dziękuję za kontakt. Odezwę się tak szybko jak to możliwe.');
            formSuccess.appendChild(formSuccessButton);
            formEl.appendChild(formSuccess);
            
            // formEl.classList.remove('sending');
            formEl.reset();
             
            {/* <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> */}

        }else{
            
        }
    }
    
    return (
        <section id="contact" className="window-height flex horizontal-center">
            <div className="caption small-width">
                <h2 className="title-small">Kontakt</h2>
                <p>Dziękuję za poświęcenie mi czasu. Jak mogę Ci dzisiaj pomóc?</p>
                <form ref={form} onSubmit={sendEmail} className="form grid relative">
                    <div>
                        <label>Imię i nazwisko</label>
                        <input type="text" name="form-name" placeholder="Jan Kowalski" required />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="form-email" placeholder="jan@example.com" required />
                    </div>
                    <div className="messege">
                        <label>Wiadomość</label>
                        <textarea className="form-message" name="message" required></textarea>
                    </div>
                    <div className="submit text-right">
                        <button type="submit" className="btn btn-default">Wyślij</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;