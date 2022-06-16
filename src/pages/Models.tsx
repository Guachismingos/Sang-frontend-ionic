import { FC } from "react";
import { IonPage, IonContent } from "@ionic/react";
import Header from "../components/Header";

const Models: FC = () => {
  return (
    <IonPage>
      <Header title="Modelos" />
      <IonContent fullscreen>Home</IonContent>
    </IonPage>
  );
};

export default Models;
