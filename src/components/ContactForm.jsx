import { useState } from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop de standaard reload
    const form = e.target;

    fetch('https://formspree.io/f/mqaqavgy', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })
    .then(response => {
      if (response.ok) {
        setIsSubmitted(true); // Succes
        form.reset(); // Formulier leegmaken
      } else {
        alert('Er ging iets mis. Probeer later opnieuw.');
      }
    })
    .catch(() => {
      alert('Er ging iets mis. Probeer later opnieuw.');
    });
  };

  return (
    <section className="contact-form">
      <h3>Contacteer mij</h3>
      {isSubmitted ? (
        <p className="thank-you-message">Bedankt voor je bericht! Ik neem snel contact op.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="name" placeholder="Voornaam Achternaam" required />
            <input type="email" name="email" placeholder="E-mail adres" required />
          </div>
          <textarea name="message" placeholder="Schrijf hier je bericht..." rows="6" required />
          <div className="form-submit">
            <button type="submit" className="button">Neem contact op</button>
          </div>
        </form>
      )}
    </section>
  );
}

export default ContactForm;
