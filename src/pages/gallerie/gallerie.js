import './gallerie.css';
import React from 'react';

function Gallerie() {
  
  let btn = document.querySelectorAll('.btn');
  let content = document.querySelectorAll('.content');

  for(let i = 0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){
      for(let j = 0; j<btn.length; j++){
        btn[j].classList.remove('active');
      }
      this.classList.add('active');

      let dataFilter = this.getAttribute('data-filter');

      for( let k = 0; k<content.length; k++){
        content[k].classList.remove('active');
        content[k].classList.add('hide');

        if(content[k].getAttribute('data-item') == dataFilter ||
        dataFilter == "all"){
          content[k].classList.remove('hide');
          content[k].classList.add('active');
        }
      }
    })
  }

  return (
    <>
   <header>
    <img src="../../images/logo.png" alt="logo" id='logo'/>
    <div class="navbar">
          <ul>
              <li><a href="/gallerie">GALLERIE</a></li>
              <li><a href="#">CONTACT</a></li>
              <li><a href="#">TARIFS</a></li>
          </ul>
          <div class="containericons">
              <img src="./images/iconfacebook.png" /> 
              <img src="./images/iconinstagram.png"/>
      </div>
    </div>
    
   </header>
   
   
   <div class="container">
   <div id="btnContainer">
            <button class="btn active" data-filter="all" > show all</button>
            <button class="btn" data-filter="mariage" > mariage</button>
            <button class="btn" data-filter="grossesse" > grossesse</button>
            <button class="btn" data-filter="bébé" > bébé</button>
            <button class="btn" data-filter="famille"> famille</button>
            <button class="btn" data-filter="baptême"> baptême</button>
            <button class="btn" data-filter="couple"> couple</button>
            <button class="btn" data-filter="portrait"> portrait</button>
    </div>

   
      <div class="product">
        <div class="content" data-item="couple">
          <img src="../../images/photo1.jpg"></img>
        </div>
      
        <div class="content" data-item="mariage">
          <img src="../../images/photo2.jpg"></img>
        </div>

        <div class="content" data-item="portrait">
          <img src="../../images/photo3.jpg"></img>
        </div>
      </div>

    </div>


   </>

  )
};


export default Gallerie;