import React, { useState } from "react";

import "./calculadoraParticulas.css";

export const CalculadoraParticulas = () => {
  const [valB, setValB] = useState(0);
  const [valC, setValC] = useState(0);
  const [valEco, setValEco] = useState(0);
  const [valCero, setValCero] = useState(0);
  const [valNoDistintivo, setValNoDistintivo] = useState(0);
  const [valNo2, setValNo2] = useState(0);
  const [valpm25, setValpm25] = useState(0);
  const [valpm10, setValpm10] = useState(0);
  const [valco, setValco] = useState(0);
  const [valhc, setValhc] = useState(0);

  const [numB, setNumB] = useState(0);
  const [numC, setNumC] = useState(0);
  const [numEco, setNumEco] = useState(0);
  const [numCero, setNumCero] = useState(0);
  const [numNoDistintivo, setNumNoDistintivo] = useState(0);

  return (
    <div style={{ color: "#53a5dc", width: "60%" }}>
      Subir datos de contaminantes
      <div className="formulario">
        <div className="tipo">
          <label>Zona:</label>
          <select>
            <option value="1">Zona 1</option>
            <option value="2">Zona 2</option>
            <option value="3">Zona 3</option>
          </select>
        </div>
        <div className="tablas">
          <table className="introducir">
            <thead>
              <tr>
                <th>Tipo de Etiqueta</th>
                <th>Nº de vehículos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Etiqueta B</td>
                <td>
                  <input
                    type="number"
                    // value={numB}
                    onChange={(e) => {
                      const newNumB = e.target.valueAsNumber;
                      setNumB(newNumB);
                      setValB(newNumB);
                    }}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Etiqueta C</td>
                <td>
                  <input
                    type="number"
                    onChange={(e) => {
                      const newNumC = e.target.valueAsNumber;
                      setNumC(newNumC);
                      setValC(newNumC * 0.75);
                    }}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Etiqueta Eco</td>
                <td>
                  <input
                    type="number"
                    onChange={(e) => {
                      const newNumEco = e.target.valueAsNumber;
                      setNumEco(newNumEco);
                      setValEco(newNumEco * 0.5);
                    }}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Etiqueta Cero</td>
                <td>
                  <input
                    type="number"
                    onChange={(e) => {
                      const newNumCero = e.target.valueAsNumber;
                      setNumCero(newNumCero);
                      setValCero(newNumCero * 0.25);
                    }}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Sin distintivo</td>
                <td>
                  <input
                    type="number"
                    onChange={(e) => {
                      const newNoDistintivo = e.target.valueAsNumber;
                      setNumNoDistintivo(newNoDistintivo);
                      setValNoDistintivo(newNoDistintivo * 1.25);
                    }}
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="resultados">
            <thead>
              <tr>
                <th>Contaminante</th>
                <th>Contaminación Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>NO2 (µg/m3/hora)</td>
                <td className="val">{valNo2}</td>
              </tr>
              <tr>
                <td>PM25 (µg/m3/hora)</td>
                <td className="val">{valpm25}</td>
              </tr>
              <tr>
                <td>PM10 (µg/m3/hora)</td>
                <td className="val">{valpm10}</td>
              </tr>
              <tr>
                <td>CO (mg/m3/hora)</td>
                <td className="val">{valco}</td>
              </tr>
              <tr>
                <td>HC (µg/m3/hora)</td>
                <td className="val">{valhc}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="botones">
          <button
            onClick={() => {
              setValNo2(
                (valB + valC + valCero + valEco + valNoDistintivo) *
                  0.0296894247647815
              );
              setValpm25(
                (valB + valC + valCero + valEco + valNoDistintivo) *
                  0.0121975681735219
              );
              setValpm10(
                (valB + valC + valCero + valEco + valNoDistintivo) *
                  0.0218523754575835
              );
              setValco(
                (valB + valC + valCero + valEco + valNoDistintivo) *
                  0.000257082275077134
              );
              setValhc(
                (valB + valC + valCero + valEco + valNoDistintivo) *
                  0.00148690555398458
              );
            }}
          >
            Calcular emisiones
          </button>
          <button>Subir datos a base de datos</button>
        </div>
        <div className="datos"></div>
      </div>
    </div>
  );
};
