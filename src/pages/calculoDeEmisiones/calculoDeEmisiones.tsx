import React, { useEffect, useState } from "react";
//@ts-ignore
import BarChart from "../../components/Chart/BarChart.js";
import "./calculoDeEmisiones.css";

type Props = {
  funcion: (int: number) => void;
  coches: {
    cero: number;
    eco: number;
    c: number;
    b: number;
    noDistintivo: number;
  };
};

const CalculoDeEmisiones = ({ funcion, coches }: Props) => {
  const [vehCero, setVehCero] = useState<number>(0);
  const [vehEco, setVehEco] = useState<number>(0);
  const [vehC, setVehC] = useState<number>(0);
  const [vehB, setVehB] = useState<number>(0);
  const [vehNoDistintivo, setVehNoDistintivo] = useState<number>(0);

  const total =
    Math.round(vehNoDistintivo * 1.14) +
    Math.round(vehB * 1.02) +
    Math.round(vehC * 0.9) +
    Math.round(vehEco * 0.72) +
    Math.round(vehCero * 0.6);

  const data = {
    labels: [
      "Etiqueta Cero",
      "Etiqueta Eco",
      "Etiqueta C",
      "Etiqueta B",
      "Sin distintivo",
    ],
    datasets: [
      {
        label: "Número vehículos",
        data: [
          coches.cero,
          coches.eco,
          coches.c,
          coches.b,
          coches.noDistintivo,
        ],
        backgroundColor: "#bdd7ee",
      },
      {
        label: "Kg/CO2/Hora",
        data: [
          Math.round(coches.cero * 0.6),
          Math.round(coches.eco * 0.72),
          Math.round(coches.c * 0.9),
          Math.round(coches.b * 1.02),
          Math.round(coches.noDistintivo * 1.14),
        ],
        backgroundColor: "#454E7C",
      },
    ],
  };
  useEffect(() => {
    funcion(total);
  }, [funcion, total]);

  return (
    <div className="calculo">
      <div className="calculo__valores">
        <h4>VALORES DE LAS EMISIONES DE LOS VEHÍCULOS EN CO2 Kg/CO2/Hora</h4>

        <table>
          <thead>
            <tr>
              <th id="th">Tipo de etiqueta</th>
              <th id="th" className="vehiculos">
                Nº de vehículos
              </th>
              <th id="th">Kg/CO2/Hora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="tdTitulo">Etiqueta Cero</td>
              <td id="td">
                <input
                  type="number"
                  value={coches.cero}
                  onChange={(e) => {
                    const newVehCero = e.target.valueAsNumber;
                    setVehCero(newVehCero);
                    coches.cero = newVehCero;
                  }}
                ></input>
              </td>
              <td id="td">{Math.round(coches.cero * 0.6)}</td>
            </tr>
            <tr>
              <td id="tdTitulo">Etiqueta Eco</td>
              <td id="td">
                <input
                  type="number"
                  value={coches.eco}
                  onChange={(e) => {
                    const newVehEco = e.target.valueAsNumber;
                    setVehEco(newVehEco);
                    coches.eco = newVehEco;
                  }}
                ></input>
              </td>
              <td id="td">{Math.round(coches.eco * 0.72)}</td>
            </tr>
            <tr>
              <td id="tdTitulo">Etiqueta C</td>
              <td id="td">
                <input
                  value={coches.c}
                  type="number"
                  onChange={(e) => {
                    const newVehC = e.target.valueAsNumber;
                    setVehC(newVehC);
                    coches.c = newVehC;
                  }}
                ></input>
              </td>
              <td id="td">{Math.round(coches.c * 0.9)}</td>
            </tr>
            <tr>
              <td id="tdTitulo">Etiqueta B</td>
              <td id="td">
                <input
                  value={coches.b}
                  type="number"
                  onChange={(e) => {
                    const newVehB = e.target.valueAsNumber;
                    setVehB(newVehB);
                    coches.b = newVehB;
                  }}
                ></input>
              </td>
              <td id="td">{Math.round(coches.b * 1.02)}</td>
            </tr>
            <tr>
              <td id="tdTitulo">Sin distintivo</td>
              <td id="td">
                <input
                  value={coches.noDistintivo}
                  type="number"
                  onChange={(e) => {
                    const newVehNoDistintivo = e.target.valueAsNumber;
                    setVehNoDistintivo(newVehNoDistintivo);
                    coches.noDistintivo = newVehNoDistintivo;
                  }}
                ></input>
              </td>
              <td id="td">{Math.round(coches.noDistintivo * 1.14)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="calculo__calculadora">
        <div id="totalTeq">
          {total}
          Kg/CO2/Hora
        </div>
        <BarChart datos={data}></BarChart>
        <p className="info">
          Esta información puede sufrir variaciones tras su validación
          definitiva.
        </p>
      </div>
    </div>
  );
};

export default CalculoDeEmisiones;
