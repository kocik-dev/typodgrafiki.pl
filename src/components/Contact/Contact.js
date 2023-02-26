import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="window-height flex horizontal-center">
            <div className="caption small-width">
                <h2 className="title-small">Kontakt</h2>
                <p>Dziękuję za poświęcenie mi czasu. Jak mogę Ci dzisiaj pomóc?</p>
                <form className="form grid">
                    <div>
                        <label>Imię i nazwisko</label>
                        <input type="text" name="form-name" placeholder="Imię i nazwisko"/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="form-email" placeholder="Email" />
                    </div>
                    <div className="messege">
                        <label>Wiadomość</label>
                        <textarea class="form-message"></textarea>
                        <button type="submit" className="btn btn-default">Wyślij</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;