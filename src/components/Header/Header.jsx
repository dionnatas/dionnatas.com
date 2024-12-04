import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="container-fluid">
      <div className="row header w-100">
        <div className="col-md-2" />
        <div className="col-xs-3 col-md-3">
          <h1>
            <span className="brand-name">Dionnatas.com</span>
          </h1>
          <p>
            <small className="brand-subtitle">
              Systems Analyst and Development
            </small>
          </p>
        </div>
        <div className="col-xs-3 col-md-2" />
        <div className="col-xs-4 col-md-3">
          <div className="nav-container">
            <nav>
              <ul className="nav nav-pills nav-justified">
                <li>
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive || activeLink === '/' ? 'active' : ''}
                    onClick={() => handleLinkClick('/')}
                  >
                    Início
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/cv" 
                    className={({ isActive }) => isActive || activeLink === '/cv' ? 'active' : ''}
                    onClick={() => handleLinkClick('/cv')}
                  >
                    Currículo
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/contato" 
                    className={({ isActive }) => isActive || activeLink === '/contato' ? 'active' : ''}
                    onClick={() => handleLinkClick('/contato')}
                  >
                    Contato
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <hr id="principal_hr" />
    </div>
  );
}

export default Header; 