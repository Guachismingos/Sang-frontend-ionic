import { FC } from "react";
import { IonContent, IonGrid, IonPage } from "@ionic/react";
import Header from "../components/Header";
import HomeButtonsGrid from "../components/home/HomeButtonsGrid";
import HomeImagesSlide from "../components/home/HomeImagesSlide";

const Home: FC = () => {
  return (
    <IonPage className="animate__animated animate__fadeIn animate__faster">
      <Header title="Inicio" />
      <IonContent>
        <IonGrid className="mainCont">
          <HomeImagesSlide />
          <HomeButtonsGrid />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
