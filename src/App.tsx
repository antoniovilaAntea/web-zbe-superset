import { Tab, Tabs } from "@mui/material";
import React from "react";
import PrincipalesContaminantes from "./pages/principalesContaminates/PrincipalesContaminantes.tsx";
import CalculoDeEmisiones from "./pages/calculoDeEmisiones/calculoDeEmisiones.tsx";
import SuperficieContaminada from "./pages/superficieContaminada/superficieContaminada.tsx";
import NaturalezaContaminacion from "./pages/naturalezaContaminacion/naturalezaContaminacion.tsx";
import EficienciaEnergetica from "./pages/eficienciaEnergetica/eficienciaEnergetica.tsx";
import MonitorizacionRuido from "./pages/monitorizacionRuido/monitorizacionRuido.tsx";
import ImpactoContaminacion from "./pages/impactoContaminacion/impactoContaminacion.tsx";

import "./App.css";

function App() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h4>Zona de bajas emisiones - A Coruña</h4>
      </header>
      <div className="App-body">
        <Tabs className="tabs" value={value} onChange={handleChange}>
          <Tab value="one" label="Principales contaminantes" wrapped></Tab>
          <Tab value="two" label="Cálculo de emisiones de CO2" wrapped></Tab>
          <Tab value="three" label="Superficie contaminada" wrapped></Tab>
          <Tab
            value="four"
            label="Naturaleza y origen de la contaminación"
            wrapped
          ></Tab>
          <Tab value="five" label="Impacto de la contaminación" wrapped></Tab>
          <Tab value="six" label="Eficiencia energética" wrapped></Tab>
          <Tab value="seven" label="Monitorización del ruido" wrapped></Tab>
        </Tabs>
        {value === "one" && <PrincipalesContaminantes />}
        {value === "two" && <CalculoDeEmisiones />}
        {value === "three" && <SuperficieContaminada />}
        {value === "four" && <NaturalezaContaminacion />}
        {value === "five" && <ImpactoContaminacion />}
        {value === "six" && <EficienciaEnergetica />}
        {value === "seven" && <MonitorizacionRuido />}
      </div>
    </div>
  );
}

export default App;
