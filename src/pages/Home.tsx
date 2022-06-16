import { FC } from "react";
import { IonContent, IonGrid, IonPage } from "@ionic/react";
import Header from "../components/Header";
import HomeButtonsGrid from "../components/home/HomeButtonsGrid";

const Home: FC = () => {
  return (
    <IonPage>
      <Header title="Inicio" />
      <IonContent fullscreen>
        <IonGrid>
          <HomeButtonsGrid />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
