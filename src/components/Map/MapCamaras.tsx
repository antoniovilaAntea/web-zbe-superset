import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { DivIcon, LatLngExpression } from "leaflet";

type Props = {
  datos: {
    id: NumberConstructor;
    id_zona: NumberConstructor;
    calle: StringConstructor;
    coords: { x: NumberConstructor; y: NumberConstructor };
  }[];
};

const MapCamaras = (props: Props) => {
  const array = props.datos.map((camaras) => [
    camaras.calle,
    camaras.coords.x,
    camaras.coords.y,
    camaras.id_zona,
  ]);
  const icono = new DivIcon({
    html: "<i class='fa fa-video-camera' aria-hidden='true' style='font-size: 24px; color: black;'></i>",
    className: "custom-div-icon", // Asegúrate de dar un className aquí
    iconSize: [7, 10],
    iconAnchor: [7, 10],
  });

  function calculateCentroid(coords: any) {
    let x = 0;
    let y = 0;
    let z = 0;

    coords.forEach((coord: any) => {
      let latitude = (parseFloat(coord[0]) * Math.PI) / 180;
      let longitude = (parseFloat(coord[1]) * Math.PI) / 180;

      x += Math.cos(latitude) * Math.cos(longitude);
      y += Math.cos(latitude) * Math.sin(longitude);
      z += Math.sin(latitude);
    });

    let total = coords.length;

    x = x / total;
    y = y / total;
    z = z / total;

    let centralLongitude = Math.atan2(y, x);
    let centralSquareRoot = Math.sqrt(x * x + y * y);
    let centralLatitude = Math.atan2(z, centralSquareRoot);

    const centro: LatLngExpression = [
      (centralLatitude * 180) / Math.PI,
      (centralLongitude * 180) / Math.PI,
    ];
    return centro;
  }

  const coords = array.map((item) => [item[1], item[2]]);
  const centroid = calculateCentroid(coords);
  console.log("CENTRO: " + centroid);

  return (
    <MapContainer
      center={centroid}
      zoom={14.25}
      style={{ height: "650px", width: "1050px" }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"></TileLayer>
      {array.map((location, index) => (
        <Marker
          position={[
            parseFloat(location[1].toString()),
            parseFloat(location[2].toString()),
          ]}
          icon={icono}
        >
          <Popup>{location[0].toString()}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapCamaras;
