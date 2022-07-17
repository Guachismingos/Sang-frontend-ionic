import { FC } from "react";
import { IonPage, IonContent, IonGrid } from "@ionic/react";
import Header from "../components/Header";
import TopBanner from "../components/about/TopBanner";
import Info from "../components/about/Info";
import SocialMediaLinks from "../components/about/SocialMediaLinks";

const About: FC = () => {
  return (
    <IonPage className="animate__animated animate__fadeIn animate__faster">
      <Header title="¿Quiénes somos?" />
      <IonContent fullscreen>
        <IonGrid class="mainCont">
          <TopBanner/>
          <Info/>
          <SocialMediaLinks/>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default About;
