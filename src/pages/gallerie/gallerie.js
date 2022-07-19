import './gallerie.css';
import React from 'react';
import { useState, useEffect } from "react";

function Gallerie() {

  const images = [
    { id: 1, src: './images/photo1.jpg', category: ['all', 'couple'] },
    { id: 2 ,src: './images/photo2.jpg', category: ['all']},
    { id: 3, src: './images/photo3.jpg', category: ['all', 'portrait']},
    { id: 4, src: './images/photo4.jpg', category: ['all', 'bébé']},
    { id: 5, src: './images/photo5.jpg', category: ['all', 'grossesse']},
    { id: 6, src: './images/photo6.jpg', category: ['all', 'couple']},
    { id: 7, src: './images/photo7.jpg', category: ['all', 'baptême']},
    { id: 8, src: './images/photo8.jpg', category: ['all', 'famille']},
    { id: 9, src: './images/photo9.jpg', category: ['all', 'portrait']},
    { id: 10, src: './images/photo10.jpg', category: ['all', 'mariage']},
    { id: 11, src: './images/photo11.jpg', category: ['all', 'mariage']},
  ]

  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);

  useEffect(( ) => {
    setProjects(images);
    }, []);

  useEffect(( ) => {
    setProjects([]);

    const filtered = images.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);



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
   <h1 id="title1">GALLERIE</h1>
   
   <div class="container">
        <div class="btnContainer">
            <button class="btn active" active={filter === 'all'} onClick={() => setFilter('all')}>show all</button>
            <button class="btn" active={filter === 'mariage'} onClick={() => setFilter('mariage')} >mariage</button>
            <button class="btn" active={filter === 'grossesse'} onClick={() => setFilter('grossesse')} >grossesse</button>
            <button class="btn" active={filter === 'bébé'} onClick={() => setFilter('bébé')} >bébé</button>
            <button class="btn" active={filter === 'famille'} onClick={() => setFilter('famille')}>famille</button>
            <button class="btn" active={filter === 'baptême'} onClick={() => setFilter('baptême')}>baptême</button>
            <button class="btn" active={filter === 'couple'} onClick={() => setFilter('couple')}>couple</button>
            <button class="btn" active={filter === 'portrait'} onClick={() => setFilter('portrait')}>portrait</button>
         </div>

   
    
          <div class="content" >
              <div class="img">
                    {projects.map(item => item.filtered === true ? <img src={item.src}>{images.src}</img> : "")}
              </div>
          </div>

    </div>


   </>

  )
};


export default Gallerie;