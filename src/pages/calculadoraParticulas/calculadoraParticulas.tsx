import React from "react";

import "./calculadoraParticulas.css";

export const CalculadoraParticulas = () => {
  return (
    <div style={{ color: "#53a5dc" }}>
      Subir datos de contaminantes
      <div className="formulario">
        <div className="tipo">
          <label>Tipo de etiqueta:</label>
          <select>
            <option value="B">Etiqueta B</option>
            <option value="C">Etiqueta C</option>
            <option value="Eco">Etiqueta Eco</option>
            <option value="Cero">Etiqueta Cero</option>
            <option value="Sin">Sin distintivo</option>
          </select>
        </div>
        <div className="cantidad">
          <label>Cantidad de coches:</label> <input type="number" />
        </div>
        <div className="botones">
          <button>Calcular emisiones</button>
          <button>Subir datos a base de datos</button>
        </div>
        <div className="datos"></div>
      </div>
    </div>
  );
};
