import { IonCol, IonIcon, IonItem, IonLabel, IonRow } from "@ionic/react";
import { callOutline } from "ionicons/icons";

const Contact = () => {
  return (
    <IonRow className="homeSection">
      <IonCol sizeSm="8" sizeMd="6" sizeLg="4" sizeXl="3">
        <h1 style={{ textAlign: "center", paddingTop: "20px" }}>Contáctenos</h1>
        <IonItem>
          <IonLabel>Teléfono 1: 8428-1470</IonLabel>
          <IonIcon
            className="mediaIcon"
            color="primary"
            size="small"
            icon={callOutline}
          />
        </IonItem>
        <IonItem>
          <IonLabel>Teléfono 2: 6188-5469</IonLabel>
          <IonIcon
            className="mediaIcon"
            color="primary"
            size="small"
            icon={callOutline}
          />
        </IonItem>
      </IonCol>
    </IonRow>
  );
};

export default Contact;
