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
          src="http://localhost:8088/superset/explore/p/9RLpa3v47Bd/?standalone=3&height=350"
        ></iframe>
        <p>Emisiones (Tn CO²/año)</p>
      </div>
      <div className="consumo">
        <iframe
          height="350px"
          width="700px"
          frameBorder={0}
          src="http://localhost:8088/superset/explore/p/jwW4V5ENag0/?standalone=3&height=350"
        ></iframe>
        <p>Consumo (TEP/año)</p>
      </div>
      <div className="combustible">
        <iframe
          height="350px"
          width="700px"
          frameBorder={0}
          src="http://localhost:8088/superset/explore/p/2D64e184VKB/?standalone=3&height=350"
        ></iframe>
        <p>Combustible (litros)</p>
      </div>
      <div className="energia">
        <iframe
          height="350px"
          width="700px"
          frameBorder={0}
          src="http://localhost:8088/superset/explore/p/DKep0Oglqgv/?standalone=3&height=350"
        ></iframe>
        <p>Energía consumida (kWh/año)</p>
      </div>
    </div>
  );
};

export default EficienciaEnergetica;
