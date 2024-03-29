import { FC } from "react";
import {
  IonCol,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
} from "@ionic/react";
import {
  waterOutline,
  documentTextOutline,
  copyOutline,
  cashOutline,
} from "ionicons/icons";

const items = [
  { icon: waterOutline, text: "Disponibilidad de agua y luz." },
  { icon: documentTextOutline, text: "Certificación de impuestos." },
  { icon: documentTextOutline, text: "Hoja de cotizante o no cotizante." },
  { icon: copyOutline, text: "Copia de Cédula." },
  { icon: cashOutline, text: "Constancia de ingreso salarial." },
];

const RequirementsList: FC = () => {
  const getItems = () =>
    items.map(({ icon, text }, idx) => (
      <IonItem key={idx}>
        <IonIcon icon={icon} style={{ paddingRight: "5px" }} />
        <IonLabel>{text}</IonLabel>
      </IonItem>
    ));

  return (
    <IonRow className="homeSection">
      <IonCol
        sizeSm="12"
        sizeMd="6"
        sizeLg="4"
        style={{ paddingRight: "20px" }}
      >
        <IonList>{getItems()}</IonList>
      </IonCol>
    </IonRow>
  );
};

export default RequirementsList;
