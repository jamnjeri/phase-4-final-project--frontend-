import React from 'react';
import Facebook from './images/icon-facebook.png';
import Linkedin from './images/icon-linkedin.png';
import Github from './images/icon-github.png';
// import About from '../about/About';
// import './style.css';

//Stateless Component Footer
const Footer = () => (
    <footer className="main-footer">
        <ul>
            <li>
                <a href="https://www.facebook.com/straygitz" target="_blank" rel="noopener noreferrer">
                    <img src={Facebook} alt="Facebook" title="Facebook" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/itts_tevin/" target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} alt="LinkedIn" title="LinkedIn" />
                </a>
            </li>
            <li>
                <a href="https://github.com/stellanyambura" target="_blank" rel="noopener noreferrer">
                    <img src={Github} alt="GitHub" title="GitHub" />
                </a>
            </li>
        </ul>
    </footer>
);

export default Footer;