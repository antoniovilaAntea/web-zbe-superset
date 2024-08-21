import React, { useEffect, useState } from "react";
import MapCamaras from "../../components/Map/MapCamaras";

const Camaraszbe = () => {
  const [cameraList, setCameraList] = useState([]);

  const handleCallCameras = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/camaras", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCameraList(data);
      } else {
        console.error("Error en la solicitud:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    handleCallCameras();
  }, []);

  return (
    <div>
      <h4>Mapa de las cámaras de control de la Zona de Bajas Emisiones</h4>
      {cameraList.length > 0 ? (
        <MapCamaras datos={cameraList}></MapCamaras>
      ) : (
        <p>Cargando cámaras...</p>
      )}
    </div>
  );
};

export default Camaraszbe;
