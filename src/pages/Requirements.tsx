import { FC } from "react";
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from "@ionic/react";
import Header from "../components/Header";

const Requirements: FC = () => {
  return (
    <IonPage>
      <Header title="Requerimientos" />
      <IonContent fullscreen>
        <IonGrid class="mainCont">
          <IonRow>
            <IonCol>caca</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Requirements;
