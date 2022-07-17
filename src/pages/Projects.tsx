import { FC } from "react";
import { IonPage, IonContent, IonGrid } from "@ionic/react";
import Header from "../components/Header";

const Projects: FC = () => {
  return (
    <IonPage className="animate__animated animate__fadeIn animate__faster">
      <Header title="Proyectos" />
      <IonContent fullscreen>
        <IonGrid class="mainCont"></IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Projects;
