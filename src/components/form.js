import React from 'react';
import './form.css';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xknydjpz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div class="container-form">
      <form onSubmit={handleSubmit}>
        <div class="content-form">
        <label htmlFor="name">Nom et Prénom :</label>
        <input type="text" name="name" placeholder='nom et prénom'/>
        <ValidationError field="name" />
        </div>

    <div class="content-form">
      <label htmlFor="email" >
        Adresse email :
      </label>
      <input
        id="email" 
        type="email" 
        name="email"
        placeholder='email@domain.tld'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /></div>

    <div class="content-form">
      <label htmlFor="message">
        Message :
      </label>
      <textarea
        id="message"
        name="message"
        placeholder='message...'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    </div>

    <div class="content-form">
      <button type="submit" disabled={state.submitting}>
        envoyer
      </button>
     </div>
    </form>

    </div>
  );
}
export default ContactForm;