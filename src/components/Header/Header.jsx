import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="container-fluid">
      <div className="row teste">
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
                    className={({ isActive }) => isActive ? 'active' : ''}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/cv" 
                    className={({ isActive }) => isActive ? 'active' : ''}
                  >
                    CV
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/contato" 
                    className={({ isActive }) => isActive ? 'active' : ''}
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