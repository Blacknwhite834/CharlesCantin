import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';

function Home() {

  


  return (
    <>
    <div class="homepage">
      <div class="containericons">
        <img src="./images/iconfacebook.png"/> 
        <img src="./images/iconinstagram.png"/>
      </div>
      <div class="containertitle">
          <h1 id="title">CHARLES CANTIN</h1>
          <h2>photographe</h2>
      </div>
      <div class="navigationbar">
          <ul>
              <li><a href="/gallerie">GALERIE</a></li>
              <li><a href="/contact">CONTACT</a></li>
              <li><a href="/tarifs">TARIFS</a></li>
          </ul>
      </div>
    </div>
    </>
  )
}

export default Home;