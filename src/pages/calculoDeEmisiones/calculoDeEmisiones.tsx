import React, { useState } from "react";
import { TextField } from "@mui/material";

import "./calculoDeEmisiones.css";

const CalculoDeEmisiones = () => {
  const [kmsTurismos, setkmsTurismos] = useState();
  const [kmsLigeros, setkmsLigeros] = useState();
  const [kmsPesados, setkmsPesados] = useState();
  const [kmsAutobuses, setkmsAutobuses] = useState();
  const [kmsCiclomotores, setkmsCiclomotores] = useState();
  const [kmsTaxis, setkmsTaxis] = useState();

  const handleChange = () => {};

  return (
    <div className="calculo">
      <div className="calculo__valores">
        <h4>
          VALORES INDICATIVOS DE LAS EMISIONES DE LOS VEHÍCULOS EN CO2 g/km
        </h4>

        <table>
          <thead>
            <tr>
              <th id="th">TIPOLOGIA DE VEHICULO</th>
              <th id="th">GASOLINA</th>
              <th id="th">DIESEL</th>
              <th id="th">LPG GPL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="tdTitulo">TURISMO</td>
              <td id="td">138</td>
              <td id="td">120</td>
              <td id="td">95</td>
            </tr>
            <tr>
              <td id="tdTitulo">VEHICULO LIGERO N1</td>
              <td id="td">195</td>
              <td id="td">162</td>
              <td id="td">135</td>
            </tr>
            <tr>
              <td id="tdTitulo">VEHICULO PESADO N2 Y N3</td>
              <td id="td">450</td>
              <td id="td">410</td>
              <td id="td">360</td>
            </tr>
            <tr>
              <td id="tdTitulo">AUTOBÚS</td>
              <td id="td">450</td>
              <td id="td">410</td>
              <td id="td">360</td>
            </tr>
            <tr>
              <td id="tdTitulo">CICLOMOTOR</td>
              <td id="td">95</td>
              <td id="td">90</td>
              <td id="td">---</td>
            </tr>
            <tr>
              <td id="tdTitulo">TAXI</td>
              <td id="td">195</td>
              <td id="td">162</td>
              <td id="td">135</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="calculo__calculadora">
        <div id="totalTeq">
          <TextField
            id="standard-basic"
            label=""
            variant="standard"
            onChange={handleChange}
          />
          Teq/año
        </div>
        <table id="teqTable">
          <thead>
            <tr>
              <th>KMS TURISMOS</th>
              <td>
                <label>{kmsTurismos}</label>
              </td>
            </tr>
            <tr>
              <th>KMS VEHÍCULOS LIGEROS N1</th>
              <td>
                <label>{kmsLigeros}</label>
              </td>
            </tr>
            <tr>
              <th>KMS VEHÍCULOS PESADOS N2 Y N3</th>
              <td>
                <label>{kmsPesados}</label>
              </td>
            </tr>
            <tr>
              <th>KMS AUTOBUSES</th>
              <td>
                <label>{kmsAutobuses}</label>
              </td>
            </tr>
            <tr>
              <th>KMS CICLOMOTORES</th>
              <td>
                <label>{kmsCiclomotores} </label>
              </td>
            </tr>
            <tr>
              <th>KMS TAXIS</th>
              <td>
                <label>{kmsTaxis} </label>
              </td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default CalculoDeEmisiones;
