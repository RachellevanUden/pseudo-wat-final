import '../styles/ContactForm.css';

function ContactForm() {
  return (
    <section className="contact-form">
      <h3>Contacteer mij</h3>
      <form>
        <div className="form-row">
          <input type="text" placeholder="Voornaam Achternaam" required />
          <input type="email" placeholder="E-mail adres" required />
        </div>
        <textarea placeholder="Schrijf hier je bericht..." rows="6" required />
        <div className="form-submit">
          <button type="submit" className="button">Neem contact op</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
