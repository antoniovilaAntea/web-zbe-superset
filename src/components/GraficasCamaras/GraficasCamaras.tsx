import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import "./GraficasCamaras.css";
ChartJS.register(ArcElement, Tooltip, Legend);

type Contaminante = "pm25" | "pm10" | "no2" | "co" | "hc";
//   | "combustible"
//   | "energia"
//   | "co2"
//   | "tep";

interface DataItem {
  calle: string;
  contaminante: Contaminante;
  valor: string;
  fecha: string;
}

type Props = {
  data:
    | (
        | {
            calle: string;
            contaminante: string;
            valor: string;
            fecha: string;
          }
        | undefined
      )[]
    | undefined;
};

const colorMap: Record<Contaminante, string> = {
  pm25: "#003f5c",
  pm10: "#58508d",
  no2: "#bc5090",
  co: "#ff6361",
  hc: "#ffa600",
  //   combustible: "#f95d6a",
  //   energia: "#ff7c43",
  //   tep: "#ffa600",
  //   co2: "#ffee55",
};

const PieChart: React.FC<{ datos: any }> = ({ datos }) => (
  <Doughnut data={datos} />
);

const GraficasCamaras: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No hay datos de contaminación disponibles.</p>;
  }

  const validData: DataItem[] = data.filter(
    (item): item is DataItem =>
      item !== undefined && (item.contaminante as Contaminante) in colorMap
  );

  const groupedData = validData.reduce<Record<string, DataItem[]>>(
    (acc, item) => {
      if (!acc[item.calle]) {
        acc[item.calle] = [];
      }
      acc[item.calle].push(item);
      return acc;
    },
    {}
  );

  const contaminantes = Array.from(
    new Set(validData.map((item) => item.contaminante))
  );

  return (
    <div className="contenedor">
      {Object.keys(groupedData).map((calle, index) => {
        const datosCalle = groupedData[calle];

        const datos = {
          labels: contaminantes,
          datasets: [
            {
              label: `Valores de Contaminación en ${calle}`,
              data: contaminantes.map((contaminante) => {
                const item = datosCalle.find(
                  (d) => d.contaminante === contaminante
                );
                return item ? parseFloat(item.valor) : 0;
              }),
              backgroundColor: contaminantes.map(
                (contaminante) => colorMap[contaminante]
              ),
            },
          ],
        };

        return (
          <div key={index} className="elemento">
            <h4>{calle}</h4>
            <PieChart datos={datos} />
          </div>
        );
      })}
    </div>
  );
};

export default GraficasCamaras;
