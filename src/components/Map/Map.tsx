import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { MapContainer, Polygon, TileLayer, Tooltip } from "react-leaflet";

type Props = {
  zona: string;
};

const Mapa = (props: Props) => {
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
      [43.368632320151043, -8.408757095294932],
      [43.368435968870898, -8.409712271516131],
      [43.368244177013032, -8.41059594219732],
      [43.368120821996271, -8.411626728228221],
      [43.368118671735708, -8.412334210656901],
      [43.368119105475373, -8.412348586924658],
      [43.368295108927988, -8.413472941519686],
      [43.368508923447337, -8.413873632504398],
      [43.368811598670653, -8.414249720501653],
      [43.369634381005177, -8.41535570947077],
      [43.369865691179477, -8.415740208253654],
      [43.370422246437201, -8.41705252081791],
      [43.370699387950943, -8.418254583665181],
      [43.370589424945663, -8.418939889895235],
      [43.370258296362849, -8.419819176835704],
      [43.369390987504786, -8.420666549597971],
      [43.368885186289887, -8.420941531140208],
      [43.367319036064117, -8.420511546040792],
      [43.360277031129641, -8.414958146688207],
      [43.359355422047727, -8.411823798800812],
      [43.359131464791943, -8.410255914240089],
      [43.358947986004743, -8.409899252042432],
      [43.358689873833001, -8.409565541852002],
      [43.35857422445163, -8.409245233385121],
      [43.358239403189231, -8.407828591590251],
      [43.357978160546928, -8.405864518095418],
      [43.359223728178598, -8.405117484425196],
      [43.359340915260447, -8.405210374599118],
      [43.360616801361878, -8.406492687836302],
      [43.361344964477951, -8.407745482258793],
      [43.363130475072992, -8.408070050860989],
      [43.364768870209637, -8.408176854953119],
      [43.367196009852002, -8.408820242275327],
      [43.367871418759378, -8.408133007759172],
      [43.368632320151043, -8.408757095294932],
    ],
  ];
  const zona3: LatLngExpression[][] = [
    [
      [43.3688879116458, -8.420951960758137],
      [43.369395820952512, -8.420675433886796],
      [43.370272972598123, -8.419823865304018],
      [43.3706110855899, -8.418903730226017],
      [43.370705152004113, -8.418247739430452],
      [43.370429265323672, -8.417038425502795],
      [43.369861950112508, -8.415741172087657],
      [43.370286127255802, -8.416113175618316],
      [43.371195568054077, -8.418265051210241],
      [43.371818501558323, -8.418954675946868],
      [43.373152245082998, -8.41908369309963],
      [43.375369301793967, -8.420588511188457],
      [43.376228901644623, -8.421138011377558],
      [43.376814040235338, -8.422536860332498],
      [43.376964541086799, -8.424044610375359],
      [43.375657775915002, -8.42373370821152],
      [43.371973136011803, -8.425977610785299],
      [43.370489391009698, -8.425585603712451],
      [43.369428147233599, -8.42481510704555],
      [43.365507279970799, -8.424936764478939],
      [43.357949805846602, -8.4195568050856],
      [43.3563182898964, -8.41679923777132],
      [43.355335427847798, -8.412879167009899],
      [43.353163246211899, -8.408891508761551],
      [43.352573500232602, -8.408999648644629],
      [43.351561089604701, -8.40636373899471],
      [43.351521772332397, -8.401821863132151],
      [43.352848715722097, -8.397766617516879],
      [43.3542444322755, -8.39659059628846],
      [43.355030737324299, -8.39519829529389],
      [43.359001422263603, -8.401389303724789],
      [43.359129187510902, -8.40225442278938],
      [43.36155096330971, -8.404662126078186],
      [43.359175050617033, -8.40512265441714],
      [43.357964452200292, -8.405860160940382],
      [43.358206916375337, -8.407787875371245],
      [43.35856400743846, -8.409251670220536],
      [43.358665980382227, -8.409587699064907],
      [43.35910266641924, -8.410253925183579],
      [43.359322439014477, -8.411842408482556],
      [43.360270211362248, -8.414966254852317],
      [43.367303930025606, -8.420533229497302],
      [43.3688879116458, -8.420951960758137],
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
        <Polygon positions={zona1} color={"#4B3D84"}>
          <Tooltip sticky>Zona 1</Tooltip>
        </Polygon>
      )}
      <Polygon
        positions={zona2}
        color={zona.includes("2") ? "#BDD72E" : "#43939A"}
      >
        <Tooltip sticky>Zona 2</Tooltip>
      </Polygon>
      <Polygon
        positions={zona3}
        color={zona.includes("3") ? "#60B576" : "#60B576"}
      >
        <Tooltip sticky>Zona 3</Tooltip>
      </Polygon>
    </MapContainer>
  );
};

export default Mapa;
