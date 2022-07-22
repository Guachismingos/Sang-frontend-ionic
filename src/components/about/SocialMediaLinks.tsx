import { IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";

import {
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoWhatsapp,
} from "ionicons/icons";

const GetItems = ({ icon, link }: { icon: string; link: string }) => {
  return (
    <IonCol size="3">
      <a href={link}>
        <IonIcon className="mediaIcon" color="primary" icon={icon} />
      </a>
    </IonCol>
  );
};

const SocialMediaLinks = () => {
  return (
    <IonRow className="homeSection">
      <IonCol sizeSm="8" sizeMd="6" sizeLg="4" sizeXl="6">
        <h1 style={{ textAlign: "center", paddingTop: "20px" }}>
          Nuetras Redes
        </h1>
        <IonGrid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IonRow>
            <GetItems link="" icon={logoFacebook} />
            <GetItems link="" icon={logoInstagram} />
            <GetItems link="" icon={logoWhatsapp} />
            <GetItems link="" icon={logoTwitter} />
          </IonRow>
        </IonGrid>
      </IonCol>
    </IonRow>
  );
};

export default SocialMediaLinks;
