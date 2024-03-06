import React from "react";
import MapRuido from "../../components/Map/MapRuido";

import "./monitorizacionRuido.css";

const MonitorizacionRuido = () => {
  return (
    <div className="monitorizacion">
      <div className="monitorizacion__row">
        <MapRuido id="map1"></MapRuido>
        <MapRuido id="map2"></MapRuido>
        <div>
          <iframe
            width="400"
            height="600"
            seamless
            frameBorder="0"
            scrolling="no"
            src="http://localhost:8088/superset/explore/p/rkVpXzr4yPJ/?standalone=1&height=600"
          ></iframe>
        </div>
      </div>
      <div className="monitorizacion__row">
        <MapRuido id="map3"></MapRuido>
        <MapRuido id="map4"></MapRuido>
        <div>
          <img src="https://i.ibb.co/ygCg6PC/ruido.png"></img>
        </div>
      </div>
    </div>
  );
};

export default MonitorizacionRuido;
