import { IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import banner_img from "../../assets/images/splash_image.png";

const TopBanner = () => {
  return (
    <IonRow className="homeSection">
      <IonCol sizeSm="8" sizeMd="6" sizeLg="4" sizeXl="3">
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonImg src={banner_img}></IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCol>
    </IonRow>
  );
};

export default TopBanner;
