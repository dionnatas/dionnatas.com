import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      company: 'Teleperformance CRM S/A',
      period: '09/2014 - Atual',
      role: 'Analista de suporte Junior',
      description: 'Monitoração Servidores físicos e virtuais, monitoração de serviços, acompanhamento de chamados, Rotinas de Data Center, Backups, redirecionamento de redes, roteadores, Switch\'s, monitoração de links (dados e voz), domínio das ferramentas CA Service Desk, Nágios.'
    },
    {
      company: 'Unilever do Brasil S/A',
      period: '04/2010 - 01/2013',
      role: 'Promotor Líder de Merchandising',
      description: 'Gestão de pessoas, negociação com gerentes e compradores, exposição de material de merchandising, montagem de Pontos promocionais, auxilio na divulgação de campanhas, elaboração de relatórios diários e mensais, acompanhamento de share e pesquisa de preços.'
    }
  ];

  return (
    <>
      <p className="lead">Experiências</p>
      <hr />
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h4>
            <p className="text-success">{exp.company} - ({exp.period})</p>
            <h5>
              <b>{exp.role}</b> - {exp.description}
            </h5>
          </h4>
          <br />
        </div>
      ))}
    </>
  );
}

export default Experience; 