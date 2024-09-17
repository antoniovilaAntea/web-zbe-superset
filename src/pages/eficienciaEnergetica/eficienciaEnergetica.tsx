import React from "react";

import "./eficienciaEnergetica.css";

const EficienciaEnergetica = () => {
  return (
    <div className="eficiencia">
      <div className="emisiones">
        <iframe
          height="350px"
          width="700px"
          frameBorder={0}
          title="Emisiones"
          src="http://localhost:8088/superset/explore/p/y24LoPxoR18/?standalone=3&height=350"
        ></iframe>
        <p>Emisiones (Tn CO²/hora)</p>
      </div>
      <div className="consumo">
        <iframe
          height="350px"
          width="700px"
          frameBorder={0}
          title="Consumo"
          src="http://localhost:8088/superset/explore/p/3O7DjgYmVkv/?standalone=3&height=350"
        ></iframe>
        <p>Consumo (TEP/hora)</p>
      </div>
      <div className="combustible">
        <iframe
          height="350px"
          width="700px"
          title="Combustible"
          frameBorder={0}
          src="http://localhost:8088/superset/explore/p/bLOo2V5o0p3/?standalone=3&height=350"
        ></iframe>
        <p>Combustible (litros)</p>
      </div>
      <div className="energia">
        <iframe
          height="350px"
          width="700px"
          frameBorder={0}
          title="Energia"
          src="http://localhost:8088/superset/explore/p/jRdD4Zg96BQ/?standalone=3&height=350"
        ></iframe>
        <p>Energía consumida (MWh/hora)</p>
      </div>
    </div>
  );
};

export default EficienciaEnergetica;
