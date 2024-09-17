import React from "react";

import "./principalesContaminantes.css";

function PrincipalesContaminantes() {
  return (
    <div className="contaminantes">
      <div className="contaminantes__fila">
        <div className="contaminantes__fila__elemento">
          <p>PM 2.5 (µg/m³/hora)</p>
          <iframe
            width="600"
            height="400"
            seamless
            title="PM 2.5"
            frameBorder="0"
            scrolling="no"
            src="http://localhost:8088/superset/explore/p/Vj5A9GeDNzG/?standalone=1&height=400"
          ></iframe>
          <p className="info">
            Esta información puede sufrir variaciones tras su validación
            definitiva.
          </p>
        </div>
        <div className="contaminantes__fila__elemento">
          <p>PM 10 (µg/m³/hora)</p>
          <iframe
            width="600"
            height="400"
            seamless
            title="PM 10"
            frameBorder="0"
            scrolling="no"
            src="http://localhost:8088/superset/explore/p/d5n9A6EoYgB/?standalone=1&height=400"
          ></iframe>
          <p className="info">
            Esta información puede sufrir variaciones tras su validación
            definitiva.
          </p>
        </div>
        <div className="contaminantes__fila__elemento">
          <p>NO 2 (µg/m³/hora)</p>
          <iframe
            width="600"
            height="400"
            seamless
            title="no2"
            frameBorder="0"
            scrolling="no"
            src="http://localhost:8088/superset/explore/p/GQ6m35RoVba/?standalone=1&height=400"
          ></iframe>
          <p className="info">
            Esta información puede sufrir variaciones tras su validación
            definitiva.
          </p>
        </div>
      </div>
      <div className="contaminantes__fila">
        <div className="contaminantes__fila__elemento">
          <p>HC (µg/m³/hora)</p>
          <iframe
            width="600"
            height="400"
            seamless
            title="HC"
            frameBorder="0"
            scrolling="no"
            src="http://localhost:8088/superset/explore/p/vEWmVpZol26/?standalone=1&height=400"
          ></iframe>
          <p className="info">
            Esta información puede sufrir variaciones tras su validación
            definitiva.
          </p>
        </div>
        <div className="contaminantes__fila__elemento">
          <p>CO (mg/m³/hora)</p>
          <iframe
            width="600"
            height="400"
            seamless
            title="CO"
            frameBorder="0"
            scrolling="no"
            src="http://localhost:8088/superset/explore/p/yMjm53Wo2Pg/?standalone=1&height=400"
          ></iframe>
          <p className="info">
            Esta información puede sufrir variaciones tras su validación
            definitiva.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrincipalesContaminantes;
