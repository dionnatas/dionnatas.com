// src/components/Curriculo.js
import React from 'react';
import cvImg from '../../images/Dionn_Seg.jpg';

const Curriculo = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="well well-lg col-md-8">
          <div className="row">
            <div className="col-xs-6 col-md-9">
              <address>
                <h1><strong>Dionnatas Santa Fe Filho</strong></h1>
                <h5>
                  Brasileiro<br />
                  Solteiro<br />
                  Nascido em 26/05/1985<br />
                  <br />
                  Rua Igarapé Agua Azul, 173 - <abbr title="Apartamento">Apt.</abbr> 32C<br />
                  CEP: 08485-310<br />
                  St. Etelvina<br />
                  São Paulo - São Paulo<br />
                  <br />
                  E-mail:
                  <a href="mailto:dionnatas@dionnatas.com">dionnatas@dionnatas.com</a>
                  <br />
                  <abbr title="Telefone Celular">Tel. Cel.:</abbr> (11) 9 8624-7663 <br />
                  <abbr title="Telefone Residencial">Tel. Res.:</abbr> (11) 2559-0855
                </h5>
              </address>
            </div>
            <div className="col-xs-4 col-md-3">
              <a href="#" className="thumbnail">
                <img src={cvImg} alt="Dionnatas" style={{ width: '100%' }} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-xs-4 col-md-8">
              <p className="lead">Objetivo Profissional</p>
              <hr />
              <h4 className="text-success">Programador/Desenvolvedor Jr.</h4>
              <br /><br />
              <p className="lead">Experiências</p>
              <hr />
              <h4>
                <p className="text-success">Teleperformance CRM S/A - (09/2014 - Atual)</p>
                <h5>
                  <b>Analista de suporte Junior</b> - Monitoração Servidores físicos e virtuais, 
                  monitoração de serviços, acompanhamento de chamados, Rotinas de Data Center, 
                  Backups, redirecionamento de redes, roteadores, Switch's, monitoração de links 
                  (dados e voz), domínio das ferramentas CA Service Desk, Nágios.
                </h5>
              </h4>
              <br />
              <h4>
                <p className="text-success">Unilever do Brasil S/A - (04/2010 - 01/2013)</p>
                <h5>
                  <b>Promotor Líder de Merchandising</b> - Gestão de pessoas, negociação com gerentes 
                  e compradores, exposição de material de merchandising, montagem de Pontos promocionais,  
                  auxilio na divulgação de campanhas, elaboração de relatórios diários e mensais, acompanhamento 
                  de share e pesquisa de preços.
                </h5>
              </h4>
              <br /><br />
              
              <p className="lead">Educação</p>
              <hr />
              <h4 className="text-success">Universidade Anhembi Morumbi - (01/2014 - 06/2016)</h4>
              <h5>
                <strong>Análise e Desenvolvimento de Sistemas</strong>
                <br />
                <ul>
                  <li>​Computação móvel;</li>
                  <li>Sistemas distribuídos;</li>
                  <li>Qualidade e teste de software;</li>
                  <li>Gerenciamento de projetos, redes;</li>
                  <li>Projeto e administração de banco de dados;</li>
                  <li>POTA (Pesquisa, ordenação e técnicas de armazenamento);</li>
                  <li>Desenvolvimento WEB;</li>
                  <li>Modelagem de Sistemas;</li>
                  <li>Engenharia de Software;</li>
                </ul>
              </h5>
            </div>

            <div className="col-xs-4 col-md-4">
              <blockquote>
                <p className="lead text-success">Linguagens</p>
                <hr />
                <h5>
                  HTML/CSS - Intermediário<br />
                  PHP - Intermediário<br />
                  Java​ - Intermediário<br />
                  C# - Intermediario<br />
                  Java Script - Básico<br />
                  C++ - Básico<br />
                  Phytom - Básico<br />
                  Ruby - Básico<br />
                  .Net - Básico<br />
                  ASP.Net - Básico<br />
                </h5>
              </blockquote>
              <blockquote>
                <p className="lead text-success">Outros Conhecimentos</p>
                <hr />
                <h5>
                  Inglês Téc. (Leitura/Escrita)<br />
                  MySQL<br />
                  SQL Server<br />
                  Oracle SQL<br />
                  PostgreSQL<br />
                  MariaDB<br />
                  Adobe Fireworks<br />
                  Adobe Flash<br />
                  Adobe Dreamweaver<br />
                  Desenvolvimento Android <br />
                  Desenvolvimento Win mobile <br />
                  Sistema Operacional Linux<br />
                  Eclipse<br />
                  Joomla<br />
                  WordPress<br />
                  Bootstrap<br />
                  ASA AVAYA<br />
                  CMS AVAYA<br />
                  VMWare<br />
                  Lansweeper<br />
                  Plusoft CRM<br />
                  Pacote Office<br />
                </h5>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Curriculo;