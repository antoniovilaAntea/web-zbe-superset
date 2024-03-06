import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Polygon, TileLayer, Tooltip } from "react-leaflet";
import { LatLngExpression } from "leaflet";

type Props = {
  zona: string;
};

const Map = (props: Props) => {
  const [zona, setZona] = useState("");

  useEffect(() => {
    if (props.zona !== zona) {
      setZona(props.zona);
    }
  }, [props.zona, zona]);

  const zona1: LatLngExpression[][] = [
    [
      [43.35934900381992, -8.405195058646811],
      [43.360634639619946, -8.406494203362286],
      [43.36136927641744, -8.407757260724553],
      [43.36719358188514, -8.408803793967575],
      [43.367875671170616, -8.408118134256629],
      [43.36863875712481, -8.408748019199463],
      [43.37054535027674, -8.404813866948318],
      [43.37325657091847, -8.40277015158894],
      [43.37454404877783, -8.402940461202222],
      [43.375882535707724, -8.403400041767682],
      [43.37667796742745, -8.406661607192461],
      [43.3793917147681, -8.408399678241192],
      [43.38034305720918, -8.409880257282705],
      [43.38344955669353, -8.40966277086052],
      [43.383574315415366, -8.407989072813592],
      [43.38332479771496, -8.401680518636718],
      [43.38518056102631, -8.402560282994717],
      [43.38648682250556, -8.398099602806994],
      [43.38539522738581, -8.396683396708777],
      [43.38505920110352, -8.39407473005851],
      [43.384029943687196, -8.394253353328928],
      [43.3838027628942, -8.394636117479823],
      [43.38267148259711, -8.393526101442227],
      [43.38210583452452, -8.393963090505382],
      [43.381934284478234, -8.394833878948669],
      [43.382020059562066, -8.395608976354232],
      [43.38240535854618, -8.3966518795616],
      [43.38183781554235, -8.398475242856147],
      [43.381479109426515, -8.398472269029245],
      [43.37891803481214, -8.394397269663791],
      [43.37498897432519, -8.393143676568334],
      [43.37371000393876, -8.39055802701516],
      [43.37148924902739, -8.389610431625957],
      [43.37087646278877, -8.388839698170889],
      [43.36923941776028, -8.38868314293783],
      [43.368293938471126, -8.388020793874881],
      [43.3666700002953, -8.389105310411303],
      [43.36786197862758, -8.393075857672898],
      [43.36789703645924, -8.394795892316585],
      [43.36952136044019, -8.395953298805797],
      [43.36963821660325, -8.398203811423704],
      [43.36963821660325, -8.398252036694087],
      [43.36945584343369, -8.399622059498585],
      [43.367746531799675, -8.40317774932116],
      [43.36635681204349, -8.404401212485915],
      [43.36347999098068, -8.405012944068295],
      [43.36163152671546, -8.404668845053205],
      [43.35921314999376, -8.405127643809735],
    ],
  ];

  const zona2: LatLngExpression[][] = [
    [
      [43.35934900381992, -8.405195058646811],
      [43.360634639619946, -8.406494203362286],
      [43.36136927641744, -8.407757260724553],
      [43.36719358188514, -8.408803793967575],
      [43.367875671170616, -8.408118134256629],
      [43.36863875712481, -8.408748019199463],
      [43.36827844547511, -8.412757509349664],
      [43.3704992172076, -8.416042258298026],
      [43.37132461616547, -8.418407818830422],
      [43.373152245082956, -8.419083693099632],
      [43.376777862072075, -8.421449253181592],
      [43.37696454108676, -8.424044610375361],
      [43.37565777591499, -8.423733708211524],
      [43.37197313601178, -8.425977610785303],
      [43.370489391009734, -8.425585603712449],
      [43.36942814723358, -8.424815107045548],
      [43.365507279970785, -8.424936764478945],
      [43.35794980584659, -8.419556805085596],
      [43.35631828989638, -8.41679923777132],
      [43.355335427847756, -8.4128791670099],
      [43.3531632462119, -8.408891508761553],
      [43.35257350023257, -8.408999648644626],
      [43.351561089604715, -8.406363738994706],
      [43.351521772332426, -8.401821863132147],
      [43.35284871572206, -8.397766617516885],
      [43.35424443227551, -8.396590596288458],
      [43.35503073732426, -8.395198295293886],
      [43.35900142226361, -8.40138930372479],
      [43.35912918751089, -8.402254422789378],
      [43.361625469951214, -8.404741640263643],
      [43.35921314999376, -8.405127643809735],
    ],
  ];

  return (
    <MapContainer
      center={[43.37104801792767, -8.417363331297123]}
      zoom={14}
      style={{ height: "600px", width: "900px" }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"></TileLayer>
      {zona.includes("1") ? (
        <Polygon positions={zona1} color={"#BDD72E"}>
          <Tooltip sticky>Zona 1</Tooltip>
        </Polygon>
      ) : (
        <Polygon positions={zona1} color={"#3388FF"}>
          <Tooltip sticky>Zona 1</Tooltip>
        </Polygon>
      )}
      <Polygon
        positions={zona2}
        color={zona.includes("2") ? "#BDD72E" : "#61dafb"}
      >
        <Tooltip sticky>Zona 2</Tooltip>
      </Polygon>
    </MapContainer>
  );
};

export default Map;
