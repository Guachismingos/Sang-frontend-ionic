import { FC } from "react";
import { IonPage, IonContent } from "@ionic/react";
import Header from "../components/Header";

const Requirements: FC = () => {
  return (
    <IonPage>
      <Header title="Requerimientos" />
      <IonContent fullscreen>Requirements</IonContent>
    </IonPage>
  );
};

export default Requirements;
