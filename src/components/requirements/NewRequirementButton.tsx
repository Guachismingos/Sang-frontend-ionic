import { FC } from "react";
import { IonCard, IonCol, IonImg, IonRow } from "@ionic/react";
import requirements_icon from "../../assets/images/requirements_icon.png";
import about_icon from "../../assets/images/about_icon.png";

const NewRequirementButton: FC = () => {
  return (
    <IonRow className="homeSection" style={{ paddingTop: "20px" }}>
      <IonCol sizeXs="6" sizeMd="3" sizeLg="2">
        <IonCard id="open-modal" className="homeGridButton">
          <IonImg src={requirements_icon} className="homeGridImage" />
          Formulario aquí
        </IonCard>
      </IonCol>
      <IonCol sizeXs="6" sizeMd="3" sizeLg="2">
        <IonCard id="" className="homeGridButton">
          <IonImg src={about_icon} className="homeGridImage" />
          Verifique su solicitud
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default NewRequirementButton;
