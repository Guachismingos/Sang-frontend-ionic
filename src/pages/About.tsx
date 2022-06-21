import { FC } from "react";
import { IonPage, IonContent, IonGrid } from "@ionic/react";
import Header from "../components/Header";

const About: FC = () => {
  return (
    <IonPage>
      <Header title="Quienes somos" />
      <IonContent fullscreen>
        <IonGrid class="mainCont"></IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default About;
