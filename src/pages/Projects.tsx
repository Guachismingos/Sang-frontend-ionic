import { FC } from "react";
import { IonPage, IonContent } from "@ionic/react";
import Header from "../components/Header";

const Projects: FC = () => {
  return (
    <IonPage>
      <Header title="Proyectos" />
      <IonContent fullscreen>Projects</IonContent>
    </IonPage>
  );
};

export default Projects;
