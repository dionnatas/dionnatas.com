import React from 'react';
import { socialLinks } from '../../constants/constants';

const ContactInfo = () => {
  return (
    <div className="col-xs-6 col-md-3">
      <div className="contact-info mt-4">
        <address>
          R. Igarapé Água Azul, 173 Apt. 32C<br />
          St. Etelvina, São Paulo - SP
        </address>

        <p>
          Cel: <a href="tel:+5511986247663">11 9 8624 7663</a>
        </p>

        <p>
          Email:{' '}
          <a href="mailto:dionnatas@dionnatas.com">dionnatas@dionnatas.com</a>
          <br />
          Site: <a href="https://dionnatas.com">dionnatas.com</a>
        </p>

        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={link.name}
            >
              <img src={link.icon} alt={link.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 