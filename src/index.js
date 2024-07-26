import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Picture from '../src/images (1).jpeg';
import Picture1 from '../src/github.png';
import Picture2 from '../src/linkedin.png';
import Picture3 from '../src/instagram.png';
import Picture4 from '../src/email.png';
import Picture5 from '../src/facebook-logo-in-circular-shape.png';
import Picture6 from '../src/twitter.png';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className='container'>
  <div className='image'>
    <img src={Picture} alt="" />
  </div>

  <div className='names'>
 <h2>SRIRAM E</h2>
 <p className='info'>Web Developer</p>
 <p className='info2'>sriram.web.com</p>
 <div className="btn">
 <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'><img src={Picture4} alt=""  className='img2'/>EMAIL</a></div>
  </div>
  <div className="about">
    <div className="space">
    <h2>About</h2>
    <p>As a passionate web developer, I specialize in crafting responsive and interactive 
      web applications. My expertise spans HTML, CSS, JavaScript, and modern frameworks 
       like React.js and Node.js. I am dedicated to continuous learning and staying 
       updated with the latest industry trends.</p>
  
  <div className='about2'>
  <h2>Interests</h2>
    <p> Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
       </div>
       </div>
       </div>
  <footer className='logo'>
    <a href="https://github.com/Jaisrir" target='_blank'><img src={Picture1} alt="" /></a>
    <a href="https://www.linkedin.com/feed/" target='_blank'><img src={Picture2} alt="" /></a>
    <a href="https://www.instagram.com/sriram_eros/" target='_blank'><img src={Picture3} alt="" /></a>
    <a href="https://x.com/?lang=en" target='_blank'><img src={Picture5} alt="" /></a>
    <a href="https://www.facebook.com/" target='_blank'><img src={Picture6} alt="" /></a>
     
       </footer>
  </div>

  </>
);

 
// reportWebVitals();
