import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="homepage">
      <div class="containericons">
        <img src="./images/iconfacebook.png" /> 
        <img src="./images/iconinstagram.png"/>
      </div>
      <div class="containertitle">
          <h1 id="title">CHARLES CANTIN</h1>
          <h2>photographe</h2>
      </div>
      <div class="navigationbar">
          <ul>
              <li><a href="default.asp">GALERIE</a></li>
              <li><a href="news.asp">CONTACT</a></li>
              <li><a href="contact.asp">TARIFS</a></li>
          </ul>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
