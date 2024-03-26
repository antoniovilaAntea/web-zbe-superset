import { Tab, Tabs } from "@mui/material";
import React from "react";
//@ts-ignore
import pdfFile from "./resources/Emisiones contaminantes ZBE.pdf";
import PrincipalesContaminantes from "./pages/principalesContaminates/PrincipalesContaminantes.tsx";
import CalculoDeEmisiones from "./pages/calculoDeEmisiones/calculoDeEmisiones.tsx";
import SuperficieContaminada from "./pages/superficieContaminada/superficieContaminada.tsx";
import NaturalezaContaminacion from "./pages/naturalezaContaminacion/naturalezaContaminacion.tsx";
import EficienciaEnergetica from "./pages/eficienciaEnergetica/eficienciaEnergetica.tsx";
import MonitorizacionRuido from "./pages/monitorizacionRuido/monitorizacionRuido.tsx";
import ImpactoContaminacion from "./pages/impactoContaminacion/impactoContaminacion.tsx";

import "./App.css";

function App() {
  const [value, setValue] = React.useState("contaminantes");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="ayuda">
          <a href={pdfFile} target="_blank" rel={"noreferrer"}>
            Ayuda
          </a>
        </div>
        <h4>Zona de bajas emisiones - A Coruña</h4>
      </header>
      <div className="App-body">
        <Tabs className="tabs" value={value} onChange={handleChange}>
          <Tab
            value="contaminantes"
            label="Principales contaminantes"
            wrapped
          ></Tab>
          <Tab
            value="calculo"
            label="Cálculo de emisiones de CO2"
            wrapped
          ></Tab>
          <Tab value="superficie" label="Superficie contaminada" wrapped></Tab>
          <Tab
            value="naturaleza"
            label="Naturaleza y origen de la contaminación"
            wrapped
          ></Tab>
          <Tab
            value="imapcto"
            label="Impacto de la contaminación"
            wrapped
          ></Tab>
          <Tab value="eficiencia" label="Eficiencia energética" wrapped></Tab>
          <Tab
            value="monitorizacion"
            label="Monitorización del ruido"
            wrapped
          ></Tab>
        </Tabs>
        {value === "contaminantes" && <PrincipalesContaminantes />}
        {value === "calculo" && <CalculoDeEmisiones />}
        {value === "superficie" && <SuperficieContaminada />}
        {value === "naturaleza" && <NaturalezaContaminacion />}
        {value === "imapcto" && <ImpactoContaminacion />}
        {value === "eficiencia" && <EficienciaEnergetica />}
        {value === "monitorizacion" && <MonitorizacionRuido />}
      </div>
    </div>
  );
}

export default App;
