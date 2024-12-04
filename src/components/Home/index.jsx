import React from 'react';
import profileImg from '../../assets/images/Dionn_Proff.jpg';
import plusIcon from '../../assets/images/plus.png';
import twitterIcon from '../../assets/images/twitter.png';
import facebookIcon from '../../assets/images/face.png';
import linkedinIcon from '../../assets/images/linkedin.png';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2" id="corpo1"></div>
        <div className="well well-lg col-md-8 col-xs-12">
          <div className="row">
            {/* Seção do Perfil */}
            <div className="col-xs-4 col-md-3">
              <div className="thumbnail">
                <img src={profileImg} alt="Foto de perfil" width="105%" />
              </div>
            </div>

            {/* Seção de Apresentação */}
            <div className="col-md-6">
              <h1><strong style={{fontSize: "larger"}}>Olá,</strong></h1>
              <h4>Estou disponível para propostas de trabalho.</h4>
              <br />
              <h4>
                Sou formado em análise e desenvolvimento de sistemas pela Universidade Anhembi Morumbi,
                busco oportunidade de imersão na área de minha formação.
              </h4>
            </div>

            {/* Seção de Contatos */}
            <div className="col-xs-4 col-md-3">
              <br />
              <b>Disponivel para:</b>
              <ul>
                <li>Web Development</li>
                <li>Java Development</li>
                <li>Test Analyst</li>
              </ul>
              <br />
              <b>Contatos:</b>
              <br />
              <div>
                <i className="glyphicon glyphicon-globe" />
                <a href="http://www.dionnatas.com">dionnatas.com</a>
              </div>
              <div>
                <i className="glyphicon glyphicon-phone" />
                11 9 8624 7663
              </div>
              <div>
                <i className="glyphicon glyphicon-envelope" />
                <a href="mailto:dionnatas@dionnatas.com?Subject=Olá%20Dionnatas">
                  dionnatas@dionnatas.com
                </a>
              </div>
              <br />
              <div className="social-links">
                <a href="http://www.plus.google.com"><img src={plusIcon} alt="Google Plus" /></a>
                <a href="http://www.twitter.com"><img src={twitterIcon} alt="Twitter" /></a>
                <a href="https://www.facebook.com/"><img src={facebookIcon} alt="Facebook" /></a>
                <a href="https://www.linkedin.com/in/dionnatas/"><img src={linkedinIcon} alt="LinkedIn" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>

      {/* Seção de Informações */}
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row">
            <InfoBlock 
              title="Formação"
              content={
                <>
                  <h4>Análise e Desenvolvimento de Sistemas</h4>
                  <small className="text-success">
                    <strong>Universidade Anhembi Morumbi</strong><br />
                    <cite title="Source Title">&nbsp;&nbsp;&nbsp;&nbsp;Concluído em: Jun/2016</cite>
                  </small>
                </>
              }
            />
            <InfoBlock 
              title="Experiencia"
              content={
                <ul>
                  <li>Analista de Suporte Técnico</li>
                  <li>Analista de Monitoração TI</li>
                  <li>Gestão de incidentes TI e NOC</li>
                </ul>
              }
            />
            <InfoBlock 
              title="Conhecimentos Adicionais"
              content={
                <ul>
                  <li>Servidores Apache/Tomcat​</li>
                  <li>Windows Server</li>
                  <li>Switchs e Roteadores Cisco</li>
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente auxiliar para os blocos de informação
const InfoBlock = ({ title, content }) => (
  <div className="col-xs-4 col-md-4">
    <blockquote>
      <p className="text-center lead">{title}</p>
      {content}
    </blockquote>
  </div>
);

export default Home; 