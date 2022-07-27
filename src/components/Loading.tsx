import { IonContent, IonPage, IonSpinner } from "@ionic/react";

const Loading = () => {
  return (
    <IonPage className="animate__animated animate__fadeIn animate__faster">
      <IonContent fullscreen>
        <IonSpinner />
      </IonContent>
    </IonPage>
  );
};

export default Loading;
