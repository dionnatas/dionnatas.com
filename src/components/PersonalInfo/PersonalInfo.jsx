import React from 'react';
import './PersonalInfo.css';

function PersonalInfo() {
  return (
    <div className="well well-lg">
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
              E-mail: <a href="mailto:dionnatas@dionnatas.com">dionnatas@dionnatas.com</a><br />
              <abbr title="Telefone Celular">Tel. Cel.:</abbr> (11) 9 8624-7663<br />
              <abbr title="Telefone Residencial">Tel. Res.:</abbr> (11) 2559-0855
            </h5>
          </address>
        </div>
        <div className="col-xs-4 col-md-3">
          <div className="thumbnail">
            <img src="/images/Dionn_Seg.jpg" alt="Foto perfil" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo; 