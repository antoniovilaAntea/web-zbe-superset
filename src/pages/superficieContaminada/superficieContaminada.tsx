import React, { useState } from "react";
import Map from "../../components/Map/Map.tsx";
import { useToggle } from "@uidotdev/usehooks";

import "./superficieContaminada.css";

const SuperficieContaminada = () => {
  const [zona, setZona] = useState("");
  return (
    <div className="superficie">
      {/* {//aun asi habrñia que cambair para identificar la zona y dentro del map cambiar el color de esa zona} */}
      <Map zona={zona}></Map>
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
            </td>
            <td>
              <label id="superficieContaminadaC" />
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
            </td>
            <td>
              <label id="superficieContaminadaC" />
            </td>
          </tr>
          <tr>
            <td>
              <label id="sectionC" />
            </td>
            <td>
              <label id="periodInteresC" />
            </td>
            <td>
              <label id="superficieContaminadaC" />
            </td>
          </tr>
          <tr>
            <td>
              <label id="sectionC" />
            </td>
            <td>
              <label id="periodInteresC" />
            </td>
            <td>
              <label id="superficieContaminadaC" />
            </td>
          </tr>
          <tr>
            <td>
              <label id="sectionC" />
            </td>
            <td>
              <label id="periodInteresC" />
            </td>
            <td>
              <label id="superficieContaminadaC" />
            </td>
          </tr>
          <tr>
            <td>
              <label id="sectionC" />
            </td>
            <td>
              <label id="periodInteresC" />
            </td>
            <td>
              <label id="superficieContaminadaC" />
            </td>
          </tr>
          <tr>
            <td>
              <label id="sectionC" />
            </td>
            <td>
              <label id="periodInteresC" />
            </td>
            <td>
              <label id="superficieContaminadaC" />
            </td>
          </tr>
          <tr>
            <td>
              <label id="sectionC" />
            </td>
            <td>
              <label id="periodInteresC" />
            </td>
            <td>
              <label id="superficieContaminadaC" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SuperficieContaminada;
