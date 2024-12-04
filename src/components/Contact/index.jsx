import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="container-fluid">
            <h1 className="display-4 fw-bold">Dionnatas S. F. Filho</h1>
          </div>
          <div className="row">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
        <div className="col-md-2" />
      </div>
    </div>
  );
};

export default Contact; 