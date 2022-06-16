import { FC } from "react";
import { IonPage, IonContent } from "@ionic/react";
import Header from "../components/Header";

const About: FC = () => {
  return (
    <IonPage>
      <Header title="Quienes somos" />
      <IonContent fullscreen>About</IonContent>
    </IonPage>
  );
};

export default About;
