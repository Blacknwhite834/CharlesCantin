import React from 'react'
import './tarifs.css';

const Tarifs = () => {
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
   <h1 id="title1">TARIFS</h1>
    
    <div class="container">
        <div class="container-center">
        <div class="content">
            <img src="../../images/photo3.jpg"></img>
            <h2>Juste moi</h2>
            <p>Séance pour une personne, en extérieur ou en studio</p>
            <h3>130 euros</h3>
        </div>
        <div class="content">
            <img src="../../images/photo1.jpg"></img>
            <h2>Pour deux</h2>
            <p>Pour deux personnes, en extérieur ou en studio</p>
            <h3>195 euros</h3>
        </div>
        <div class="content">
            <img src="../../images/photo8.jpg"></img>
            <h2>Famille</h2>
            <p>Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio</p>
            <h3>220 euros</h3>
        </div>
        <div class="content">
            <img src="../../images/photo5.jpg"></img>
            <h2>Il était une fois</h2>
            <p>Photo de grossesse (À votre domicile, en extérieur ou en studio)</p>
            <h3>160 euros</h3>
        </div>
        <div class="content">
            <img src="../../images/photo4.jpg"></img>
            <h2>Mon bébé </h2>
            <p>Photo d’enfant jusqu’à 3 ans (photo à domicile)</p>
            <h3>100 euros</h3>
        </div>
        <div class="content">
            <img src="../../images/photo10.jpg"></img>
            <h2>J’immortalise l’événement</h2>
            <p>Prestation de mariage ou baptême sur devis</p>
            <h3>Sur mesure</h3>
        </div>
        </div>
       

    </div>
    </>
  );
};

export default Tarifs;