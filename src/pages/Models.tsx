import { FC, Suspense } from "react";
import { IonPage, IonContent, IonGrid } from "@ionic/react";
import Header from "../components/Header";
import Loading from "../components/Loading";

const Models: FC = () => {
  return (
    <IonPage className="animate__animated animate__fadeIn animate__faster">
      <Header title="Modelos" />
      <IonContent fullscreen>
        <IonGrid class="mainCont"></IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Models;
