import React from "react";

const EficienciaEnergetica = () => {
  return (
    <div className="eficiencia">
      <iframe
        height="500px"
        width="1000px"
        frameBorder={0}
        src="http://localhost:8088/superset/dashboard/12/?standalone=3"
      ></iframe>
    </div>
  );
};

export default EficienciaEnergetica;
