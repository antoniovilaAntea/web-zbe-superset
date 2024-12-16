import React, { useState } from "react";
import Mapa from "../../components/Map/Map.tsx";

import "./superficieContaminada.css";

const SuperficieContaminada = () => {
  const [zona, setZona] = useState("");
  const numpobZona1 = 48169;
  const numpobZona2 = 28550;
  const numpobZona3 = 60660;
  const numsupZona1 = 2.35;
  const numsupZona2 = 1;
  const numsupZona3 = 1.9;
  const pobZona1 = "< " + numpobZona1.toString();
  const supZona1 = "< " + numsupZona1.toString();
  const pobZona2 = "< " + numpobZona2.toString();
  const supZona2 = "< " + numsupZona2.toString();
  const pobZona3 = "< " + numpobZona3.toString();
  const supZona3 = "< " + numsupZona3.toString();
  const pobTotal = "< " + (numpobZona1 + numpobZona2 + numpobZona3).toString();
  const supTotal = "< " + (numsupZona1 + numsupZona2 + numsupZona3).toString();
  return (
    <div className="superficie">
      <Mapa zona={zona}></Mapa>
      <table id="tablaSuperficie">
        <thead>
          <tr>
            <th>SECCIÓN </th>
            <th>
              SUPERFICIE CONTAMINADA (km<sup>2</sup>)
            </th>
            <th>POBLACIÓN</th>
          </tr>
        </thead>
        <tbody>
          <tr
            id="seccion1"
            onMouseEnter={() => setZona("Zona 1")}
            onMouseLeave={() => setZona("")}
          >
            <td>
              <label id="sectionC" />
              Zona 1
            </td>
            <td>
              <label id="periodInteresC" />
              {supZona1}
            </td>
            <td>
              <label id="superficieContaminadaC" />
              {pobZona1}
            </td>
          </tr>
          <tr
            onMouseEnter={() => setZona("Zona 2")}
            onMouseLeave={() => setZona("")}
          >
            <td>
              <label id="sectionC" />
              Zona 2
            </td>
            <td>
              <label id="periodInteresC" />
              {supZona2}
            </td>
            <td>
              <label id="superficieContaminadaC" />
              {pobZona2}
            </td>
          </tr>
          <tr
            onMouseEnter={() => setZona("Zona 3")}
            onMouseLeave={() => setZona("")}
          >
            <td>
              <label id="sectionC" />
              Zona 3
            </td>
            <td>
              <label id="periodInteresC" />
              {supZona3}
            </td>
            <td>
              <label id="superficieContaminadaC" />
              {pobZona3}
            </td>
          </tr>
          <tr>
            <td>
              <label id="sectionC" />
              Total
            </td>
            <td>
              <label id="periodInteresC" />
              {supTotal}
            </td>
            <td>
              <label id="superficieContaminadaC" />
              {pobTotal}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SuperficieContaminada;
