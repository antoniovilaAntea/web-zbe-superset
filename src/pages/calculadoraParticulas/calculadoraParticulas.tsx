import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

import "./calculadoraParticulas.css";

type Props = {
  particulas: number;
};

export const CalculadoraParticulas = ({ particulas }: Props) => {
  const [valNo2, setValNo2] = useState(0);
  const [valpm25, setValpm25] = useState(0);
  const [valpm10, setValpm10] = useState(0);
  const [valco, setValco] = useState(0);
  const [valhc, setValhc] = useState(0);

  const factor1 = 2.68;
  const factor2 = 2.31;

  const [valLitros, setValLitros] = useState(0);
  const [valTEP, setValTEP] = useState(0);
  const [valEnergia, setValEnergia] = useState(0);
  const [co2, setCo2] = useState(0);
  const [excelData, setExcelData] = useState<any[]>([]);
  const [fechaData, setFechaData] = useState<any>([]);
  const [archivo, setArchivo] = useState<boolean>(false);

  const [contB, setcontB] = useState(0);
  const [contC, setcontC] = useState(0);
  const [contNoFigura, setcontNoFigura] = useState(0);
  const [contEco, setcontEco] = useState(0);
  const [contCero, setcontCero] = useState(0);
  const [coData, setCoData] = useState({
    id_zona: 1,
    valor_actual: valco,
    valor_limite: 10,
    fecha: new Date(),
  });
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setArchivo(true);
      exportToExcel(Array.from(e.target.files));
    }
  };
  const handleUploadDataBase = async () => {
    console.log("CO2:", totalCo2Data);
    console.log("Energia:", energiaData);
    console.log("TEP:", consumoData);

    try {
      const response = await fetch("http://localhost:3001/api/co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(coData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data saved successfully:", result);
      } else {
        console.error("Failed to save data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    try {
      const response = await fetch("http://localhost:3001/api/no2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(no2Data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data saved successfully:", result);
      } else {
        console.error("Failed to save data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    try {
      const response = await fetch("http://localhost:3001/api/hc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hcData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data saved successfully:", result);
      } else {
        console.error("Failed to save data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    try {
      const response = await fetch("http://localhost:3001/api/pm25", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pm25Data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data saved successfully:", result);
      } else {
        console.error("Failed to save data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    try {
      const response = await fetch("http://localhost:3001/api/pm10", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pm10Data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data saved successfully:", result);
      } else {
        console.error("Failed to save data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    try {
      const response = await fetch("http://localhost:3001/api/energia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(energiaData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data saved successfully:", result);
      } else {
        console.error("Failed to save data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    try {
      const response = await fetch("http://localhost:3001/api/combustible", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(combustibleData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data saved successfully:", result);
      } else {
        console.error("Failed to save data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    try {
      const response = await fetch("http://localhost:3001/api/consumo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(consumoData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data saved successfully:", result);
      } else {
        console.error("Failed to save data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    try {
      const response = await fetch("http://localhost:3001/api/totalco2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(totalCo2Data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data saved successfully:", result);
      } else {
        console.error("Failed to save data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const exportToExcel = async (selectFile: File[]) => {
    if (selectFile.length === 0) {
      alert("Por favor seleccione archivos y/o ingrese celdas.");
      return;
    }

    const readFile = (file: File) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const workbook = XLSX.read(event.target?.result as string, {
              type: "binary",
            });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const data: any[][] = XLSX.utils.sheet_to_json(sheet, {
              header: 1,
            });
            resolve(data);
          } catch (error) {
            reject(error);
          }
        };
        reader.readAsBinaryString(file);
      });
    };

    try {
      const allData = await Promise.all(
        selectFile.map((file) => readFile(file))
      );
      const combinedData = allData.flat().map((row: any) => [row[5]]);
      setExcelData(combinedData);
      const fechaCombinedData = allData.flat().map((row: any) => [row[9]]);
      var fechaGrande = new Date(
        fechaCombinedData[fechaCombinedData.length - 1].toString()
      ).getTime();
      var fechaPeque = new Date(fechaCombinedData[2].toString()).getTime();
      const diferencia = Math.round((fechaGrande - fechaPeque) / 86400000);

      setFechaData(diferencia);
      console.log(fechaData);
      setArchivo(false);
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };

  useEffect(() => {
    const contadores: { [key: string]: number } = {};
    for (const valor of excelData) {
      const key = JSON.stringify(valor);
      if (contadores[key]) {
        contadores[key]++;
      } else {
        contadores[key] = 1;
      }
    }
    setcontB(Math.round(contadores['["B"]'] / 7 / 24 || 0));
    setcontC(Math.round(contadores['["C"]'] / 7 / 24 || 0));
    setcontNoFigura(
      Math.round(
        (contadores['["NO FIGURA EN BBDD DGT"]'] / 7 / 24 || 0) +
          (contadores['["SIN DISTINTIVO"]'] / 7 / 24 || 0)
      )
    );
    setcontEco(Math.round(contadores['["ECO"]'] / 7 / 24 || 0));
    setcontCero(Math.round(contadores['["CERO"]'] / 7 / 24 || 0));
  }, [excelData]);

  const [no2Data, setNo2Data] = useState({
    id_zona: 1,
    valor_actual: valNo2,
    valor_limite: 200,
    fecha: new Date(),
  });
  const [pm25Data, setPm25Data] = useState({
    id_zona: 1,
    valor_actual: valpm25,
    valor_limite: 25,
    fecha: new Date(),
  });
  const [pm10Data, setPm10Data] = useState({
    id_zona: 1,
    valor_actual: valpm10,
    valor_limite: 50,
    fecha: new Date(),
  });
  const [hcData, setHcData] = useState({
    id_zona: 1,
    valor_actual: valhc,
    valor_limite: 5,
    fecha: new Date(),
  });
  const [combustibleData, setCombustibleData] = useState({
    id_zona: 1,
    valor: valLitros,
    fecha: new Date(),
  });
  const [consumoData, setConsumoData] = useState({
    id_zona: 1,
    valor: valTEP,
    fecha: new Date(),
  });
  const [energiaData, setEnergiaData] = useState({
    id_zona: 1,
    valor: valEnergia,
    fecha: new Date(),
  });
  const [totalCo2Data, setTotalCo2Data] = useState({
    id_zona: 1,
    valor: co2,
    fecha: new Date(),
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCoData((prevData) => ({
      ...prevData,
      [name]: name === "fecha" ? new Date(value) : Number(value),
    }));
    setNo2Data((prevData) => ({
      ...prevData,
      [name]: name === "fecha" ? new Date(value) : Number(value),
    }));
    setPm25Data((prevData) => ({
      ...prevData,
      [name]: name === "fecha" ? new Date(value) : Number(value),
    }));
    setPm10Data((prevData) => ({
      ...prevData,
      [name]: name === "fecha" ? new Date(value) : Number(value),
    }));
    setHcData((prevData) => ({
      ...prevData,
      [name]: name === "fecha" ? new Date(value) : Number(value),
    }));
    setCombustibleData((prevData) => ({
      ...prevData,
      [name]: name === "fecha" ? new Date(value) : Number(value),
    }));
    setConsumoData((prevData) => ({
      ...prevData,
      [name]: name === "fecha" ? new Date(value) : Number(value),
    }));
    setEnergiaData((prevData) => ({
      ...prevData,
      [name]: name === "fecha" ? new Date(value) : Number(value),
    }));
    setTotalCo2Data((prevData) => ({
      ...prevData,
      [name]: name === "fecha" ? new Date(value) : Number(value),
    }));
  };

  const handleCalculate = () => {
    setValNo2(
      Math.round(
        (contB +
          contC * 0.75 +
          contCero * 0.25 +
          contEco * 0.5 +
          contNoFigura * 1.25) *
          0.0296894247647815 *
          100
      ) / 100
    );
    setValpm25(
      Math.round(
        (contB +
          contC * 0.75 +
          contCero * 0.25 +
          contEco * 0.5 +
          contNoFigura * 1.25) *
          0.0121975681735219 *
          100
      ) / 100
    );
    setValpm10(
      Math.round(
        (contB +
          contC * 0.75 +
          contCero * 0.25 +
          contEco * 0.5 +
          contNoFigura * 1.25) *
          0.0218523754575835 *
          100
      ) / 100
    );
    setValco(
      Math.round(
        (contB +
          contC * 0.75 +
          contCero * 0.25 +
          contEco * 0.5 +
          contNoFigura * 1.25) *
          0.000257082275077134 *
          100
      ) / 100
    );
    setValhc(
      Math.round(
        (contB +
          contC * 0.75 +
          contCero * 0.25 +
          contEco * 0.5 +
          contNoFigura * 1.25) *
          0.00148690555398458 *
          100
      ) / 100
    );
    const valorFactor1 =
      particulas > 0
        ? particulas / 2 / factor1
        : Math.round(
            contCero * 0.6 +
              contEco * 0.72 +
              contC * 0.9 +
              contB * 1.02 +
              contNoFigura * 1.14
          ) /
          2 /
          factor1;
    const valorFactor2 =
      particulas > 0
        ? particulas / 2 / factor1
        : Math.round(
            contCero * 0.6 +
              contEco * 0.72 +
              contC * 0.9 +
              contB * 1.02 +
              contNoFigura * 1.14
          ) /
          2 /
          factor2;
    setValLitros(Math.round(valorFactor1 + valorFactor2));
    setValTEP(Math.round(0.84 * valorFactor1 + 0.74 * valorFactor2));
    setValEnergia(
      Math.round((0.84 * valorFactor1 + 0.74 * valorFactor2) * 11.63)
    );
    setCo2(
      Math.round(
        Math.round(contCero * 0.6) +
          Math.round(contEco * 0.72) +
          Math.round(contC * 0.9) +
          Math.round(contB * 1.02) +
          Math.round(contNoFigura * 1.14)
      )
    );
  };

  useEffect(() => {
    setCoData((prevData) => ({
      ...prevData,
      valor_actual: valco,
      fecha: new Date(),
    }));
    setNo2Data((prevData) => ({
      ...prevData,
      valor_actual: valNo2,
      fecha: new Date(),
    }));
    setPm25Data((prevData) => ({
      ...prevData,
      valor_actual: valpm25,
      fecha: new Date(),
    }));
    setPm10Data((prevData) => ({
      ...prevData,
      valor_actual: valpm10,
      fecha: new Date(),
    }));
    setHcData((prevData) => ({
      ...prevData,
      valor_actual: valhc,
      fecha: new Date(),
    }));
    setCombustibleData((prevData) => ({
      ...prevData,
      valor: valLitros,
      fecha: new Date(),
    }));
    setConsumoData((prevData) => ({
      ...prevData,
      valor: valTEP,
      fecha: new Date(),
    }));
    setEnergiaData((prevData) => ({
      ...prevData,
      valor: valEnergia,
      fecha: new Date(),
    }));
    setTotalCo2Data((prevData) => ({
      ...prevData,
      valor: co2,
      fecha: new Date(),
    }));
    console.log("CO2: " + co2);
  }, [
    valco,
    valNo2,
    valpm25,
    valpm10,
    valhc,
    valLitros,
    valEnergia,
    valTEP,
    co2,
  ]);

  return (
    <div style={{ color: "#53a5dc", width: "60%" }}>
      Subir datos de contaminantes
      <form className="formulario" onSubmit={(e) => e.preventDefault()}>
        <div className="tipo">
          <label htmlFor="id_zona">Zona:</label>
          <select id="id_zona" name="id_zona" onChange={handleChange}>
            <option value="1">Zona 1</option>
            <option value="2">Zona 2</option>
            <option value="3">Zona 3</option>
          </select>
        </div>
        <div className="archivo">
          <input
            type="file"
            className="form-control"
            id="inputGroupFile"
            placeholder="Ningún archivo seleccionado"
            accept=".xlsb"
            onChange={handleFileInputChange}
          />
        </div>
        <div className="tablas">
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
                <td className="val">
                  {valNo2 === undefined ? "CARGANDO" : valNo2}
                </td>
              </tr>
              <tr>
                <td>PM25 (µg/m3/hora)</td>
                <td className="val">
                  {valpm25 === undefined ? "CARGANDO" : valpm25}
                </td>
              </tr>
              <tr>
                <td>PM10 (µg/m3/hora)</td>
                <td className="val">
                  {valpm10 === undefined ? "CARGANDO" : valpm10}
                </td>
              </tr>
              <tr>
                <td>CO (mg/m3/hora)</td>
                <td className="val">
                  {valco === undefined ? "CARGANDO" : valco}
                </td>
              </tr>
              <tr>
                <td>HC (µg/m3/hora)</td>
                <td className="val">
                  {valhc === undefined ? "CARGANDO" : valhc}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="consumo">
            <thead>
              <tr>
                <th>Consumo</th>
                <th>Consumo Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Litros combustible</td>
                <td className="val">{valLitros}</td>
              </tr>
              <tr>
                <td>TEP</td>
                <td className="val">{valTEP}</td>
              </tr>
              <tr>
                <td>Energía (MWh)</td>
                <td className="val">{valEnergia}</td>
              </tr>
              <tr>
                <td>Kg/Co2/h</td>
                <td className="val">{co2}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="botones">
          <button type="button" onClick={handleCalculate}>
            {archivo && "Leyendo archivo"}
            {!archivo && "Calcular emisiones"}
          </button>
          <button
            type="button"
            onClick={() => {
              // console.log(coData);
              // console.log(no2Data);
              // console.log(pm25Data);
              // console.log(pm10Data);
              // console.log(hcData);
              // console.log("Sin distintivo: " + contNoFigura);
              // console.log("Eco: " + contEco);
              // console.log("Cero: " + contCero);
              // console.log("C: " + contC);
              // console.log("B: " + contB);
              handleUploadDataBase();
            }}
          >
            Subir a base de datos
          </button>
        </div>
      </form>
    </div>
  );
};
