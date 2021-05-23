import React from 'react';
import "../../sass/style.scss";
import ContactForm from '../layout/ContactForm';
import Footer from '../layout/Footer';

export default function Contact() {
  return (
  <div className="contact-page">
    <ContactForm />
    <Footer />
  </div>
  
  );
}
