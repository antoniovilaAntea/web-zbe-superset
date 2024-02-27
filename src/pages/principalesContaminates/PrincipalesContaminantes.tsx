import React from "react";

import "./principalesContaminantes.css";

function PrincipalesContaminantes() {
  return (
    <div className="contaminantes">
      <div className="contaminantes__fila">
        <div className="contaminantes__fila__elemento">
          <p>PM 2.5</p>
          <iframe
            width="600"
            height="400"
            seamless
            title="PM 2.5"
            frameBorder="0"
            scrolling="no"
            src="http://localhost:8088/superset/explore/p/wY5pJdG4JxL/?standalone=1&height=400"
          ></iframe>
        </div>
        <div className="contaminantes__fila__elemento">
          <p>PM 10</p>
          <iframe
            width="600"
            height="400"
            seamless
            title="PM 10"
            frameBorder="0"
            scrolling="no"
            src="http://localhost:8088/superset/explore/p/rgWNy09pGeZ/?standalone=1&height=400"
          ></iframe>
        </div>
        <div className="contaminantes__fila__elemento">
          <p>NO 2</p>
          <iframe
            width="600"
            height="400"
            seamless
            title="no2"
            frameBorder="0"
            scrolling="no"
            src="http://localhost:8088/superset/explore/p/MkbpQRJN6JW/?standalone=1&height=400"
          ></iframe>
        </div>
      </div>
      <div className="contaminantes__fila">
        <div className="contaminantes__fila__elemento">
          <p>CO</p>
          <iframe
            width="600"
            height="400"
            seamless
            title="CO"
            frameBorder="0"
            scrolling="no"
            src="http://localhost:8088/superset/explore/p/zBop6yRlgx9/?standalone=1&height=400"
          ></iframe>
        </div>
        <div className="contaminantes__fila__elemento">
          <p>HC</p>
          <iframe
            width="600"
            height="400"
            seamless
            title="HC"
            frameBorder="0"
            scrolling="no"
            src="http://localhost:8088/superset/explore/p/DJy45BVlVdM/?standalone=1&height=400"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default PrincipalesContaminantes;
