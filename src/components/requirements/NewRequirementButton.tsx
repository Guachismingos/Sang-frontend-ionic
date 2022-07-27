import { FC } from "react";
import { IonCard, IonCol, IonImg, IonRow, IonGrid } from "@ionic/react";
import requirements_icon from "../../assets/images/requirements_icon.png";
import about_icon from "../../assets/images/about_icon.png";

const NewRequirementButton: FC = () => {
  return (
    <IonRow className="homeSection" style={{ paddingTop: "0px" }}>
      <IonCol sizeSm="8" sizeMd="6" sizeLg="4" sizeXl="3">
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonCard id="open-modal-1" className="homeGridButton">
                <IonImg src={requirements_icon} className="homeGridImage" />
                Formulario aquí
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard id="open-modal-2" className="homeGridButton">
                <IonImg src={about_icon} className="homeGridImage" />
                Verifique su solicitud
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCol>
    </IonRow>
  );
};

export default NewRequirementButton;
