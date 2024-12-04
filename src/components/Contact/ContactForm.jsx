import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    msg: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/enviar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          msg: ''
        });
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <div className="col-md-9">
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="tel"
            className="form-control"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            name="msg"
            placeholder="Mensagem"
            rows="6"
            value={formData.msg}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary float-end">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 