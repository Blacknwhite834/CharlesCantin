import React from 'react';
import './contact.css';
import ContactForm from '../../components/form';

const Contact = () => {
  return (
    <> 
    <header>
        <img src="../../images/logo.png" alt="logo" id='logo'/>
    <div class="navbar">
      <ul>
          <li><a href="/gallerie">GALLERIE</a></li>
          <li><a href="#">CONTACT</a></li>
          <li><a href="/tarifs">TARIFS</a></li>
      </ul>
      <div class="containericons">
          <img src="./images/iconfacebook.png" /> 
          <img src="./images/iconinstagram.png"/>
    </div>
    </div>

    </header>

    <h1 id="title1">CONTACT</h1>

    <ContactForm />   

</>
  )
}

export default Contact;