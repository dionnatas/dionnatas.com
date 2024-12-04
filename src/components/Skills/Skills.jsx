import React from 'react';
import './Skills.css';

function Skills() {
  const languages = [
    { name: 'HTML/CSS', level: 'Intermediário' },
    { name: 'PHP', level: 'Intermediário' },
    { name: 'Java', level: 'Intermediário' },
    { name: 'C#', level: 'Intermediário' },
    { name: 'JavaScript', level: 'Básico' },
    { name: 'C++', level: 'Básico' },
    { name: 'Python', level: 'Básico' },
    { name: 'Ruby', level: 'Básico' },
    { name: '.Net', level: 'Básico' },
    { name: 'ASP.Net', level: 'Básico' }
  ];

  const otherSkills = [
    'Inglês Téc. (Leitura/Escrita)',
    'MySQL',
    'SQL Server',
    'Oracle SQL',
    'PostgreSQL',
    'MariaDB',
    'Adobe Fireworks',
    'Adobe Flash',
    'Adobe Dreamweaver',
    'Desenvolvimento Android',
    'Desenvolvimento Win mobile',
    'Sistema Operacional Linux',
    'Eclipse',
    'Joomla',
    'WordPress',
    'Bootstrap',
    'ASA AVAYA',
    'CMS AVAYA',
    'VMWare',
    'Lansweeper',
    'Pacote Office'
  ];

  return (
    <>
      <blockquote>
        <p className="lead text-success">Linguagens</p>
        <hr />
        <h5>
          {languages.map((lang, index) => (
            <div key={index}>
              {lang.name} - {lang.level}<br />
            </div>
          ))}
        </h5>
      </blockquote>

      <blockquote>
        <p className="lead text-success">Outros Conhecimentos</p>
        <hr />
        <h5>
          {otherSkills.map((skill, index) => (
            <div key={index}>
              {skill}<br />
            </div>
          ))}
        </h5>
      </blockquote>
    </>
  );
}

export default Skills; 