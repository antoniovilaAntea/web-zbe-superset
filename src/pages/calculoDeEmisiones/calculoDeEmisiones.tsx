import React, { useState } from "react";

import "./calculoDeEmisiones.css";

const CalculoDeEmisiones = () => {
  const valores = [
    {
      "turismo-gasolina": 138,
      "turismo-diesel": 120,
      "turismo-gpl": 95,
      "ligero-gasolina": 195,
      "ligero-diesel": 162,
      "ligero-gpl": 135,
      "pesado-gasolina": 450,
      "pesado-diesel": 410,
      "pesado-gpl": 360,
      "autobus-gasolina": 450,
      "autobus-diesel": 410,
      "autobus-gpl": 360,
      "ciclomotor-gasolina": 450,
      "ciclomotor-diesel": 410,
      "taxi-gasolina": 195,
      "taxi-diesel": 162,
      "taxi-gpl": 135,
    },
  ];

  const numVehTur = [
    {
      gasolina: 1234,
      diesel: 2345,
      gpl: 120,
    },
  ];
  const numVehLig = [
    {
      gasolina: 2500,
      diesel: 1251,
      gpl: 100,
    },
  ];
  const numVehPes = [
    {
      gasolina: 5000,
      diesel: 2365,
      gpl: 36,
    },
  ];
  const numVehBus = [
    {
      gasolina: 541,
      diesel: 547,
      gpl: 12,
    },
  ];
  const numVehCiclo = [
    {
      gasolina: 1234,
      diesel: 2345,
      gpl: 120,
    },
  ];
  const numVehTaxi = [
    {
      gasolina: 1234,
      diesel: 2345,
      gpl: 120,
    },
  ];
  const [kmsTurismos, setkmsTurismos] = useState(
    numVehTur[0].gasolina * valores[0]["turismo-gasolina"] +
      numVehTur[0].diesel * valores[0]["turismo-diesel"] +
      numVehTur[0].gpl * valores[0]["turismo-gpl"]
  );
  const [kmsLigeros, setkmsLigeros] = useState(
    numVehLig[0].gasolina * valores[0]["ligero-gasolina"] +
      numVehLig[0].diesel * valores[0]["ligero-diesel"] +
      numVehLig[0].gpl * valores[0]["ligero-gpl"]
  );
  const [kmsPesados, setkmsPesados] = useState(
    numVehPes[0].gasolina * valores[0]["pesado-gasolina"] +
      numVehPes[0].diesel * valores[0]["pesado-diesel"] +
      numVehPes[0].gpl * valores[0]["pesado-gpl"]
  );
  const [kmsAutobuses, setkmsAutobuses] = useState(
    numVehBus[0].gasolina * valores[0]["autobus-gasolina"] +
      numVehBus[0].diesel * valores[0]["autobus-diesel"] +
      numVehBus[0].gpl * valores[0]["autobus-gpl"]
  );
  const [kmsCiclomotores, setkmsCiclomotores] = useState(
    numVehCiclo[0].gasolina * valores[0]["ciclomotor-gasolina"] +
      numVehCiclo[0].diesel * valores[0]["ciclomotor-diesel"]
  );
  const [kmsTaxis, setkmsTaxis] = useState(
    numVehTaxi[0].gasolina * valores[0]["taxi-gasolina"] +
      numVehTaxi[0].diesel * valores[0]["taxi-diesel"] +
      numVehTaxi[0].gpl * valores[0]["taxi-gpl"]
  );
  const [teqaño, setTeqaño] = useState<Number>(
    kmsTurismos +
      kmsLigeros +
      kmsPesados +
      kmsAutobuses +
      kmsCiclomotores +
      kmsTaxis
  );
  // setkmsTurismos(numVehTur[0].gasolina * valores[0]["turismo-gasolina"]);

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
        <div id="totalTeq">{teqaño.toString()} Teq/año</div>
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
