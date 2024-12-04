import React from 'react';
import './Footer.css';
import plusIcon from '../../images/plus_black.png';
import twitterIcon from '../../images/twitter_black.png';
import facebookIcon from '../../images/face_black.png';
import linkedinIcon from '../../images/linkedin_black.png';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="navbar-inverse navbar-fixed-bottom">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-3">
            <span className="copyright">
              &copy; {currentYear} dionnatas.com
            </span>
          </div>
          <div className="col-md-6">
            <span className="rights">
              Todas as marcas registradas pertencem aos seus respectivos proprietários
            </span>
          </div>
          <div className="col-xs-2 col-md-2">
            <div className="social-icons">
              <a href="http://www.plus.google.com" target="_blank" rel="noopener noreferrer">
                <img src={plusIcon} alt="Google Plus" />
              </a>
              <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com/in/dionnatas" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 