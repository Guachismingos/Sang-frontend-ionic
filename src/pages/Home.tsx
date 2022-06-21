import { FC } from "react";
import { IonContent, IonGrid, IonPage } from "@ionic/react";
import Header from "../components/Header";
import HomeButtonsGrid from "../components/home/HomeButtonsGrid";
import HomeImagesSlide from "../components/home/HomeImagesSlide";

const Home: FC = () => {
  return (
    <IonPage>
      <Header title="Inicio" />
      <IonContent fullscreen>
        <IonGrid class="mainCont">
          <HomeImagesSlide />
          <HomeButtonsGrid />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
