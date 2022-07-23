import { IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";

import {
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoWhatsapp,
} from "ionicons/icons";

const GetItems = ({ icon, link }: { icon: string; link: string }) => {
  return (
    <IonCol
      size="4"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
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
        <IonGrid>
          <IonRow>
            <GetItems
              link="https://www.facebook.com/GrupoSang.SA/"
              icon={logoFacebook}
            />
            <GetItems
              link="https://www.instagram.com/gruposang.sa/?igshid=YmMyMTA2M2Y%3D"
              icon={logoInstagram}
            />
            <GetItems link="https://wa.me/50684281470" icon={logoWhatsapp} />
          </IonRow>
        </IonGrid>
      </IonCol>
    </IonRow>
  );
};

export default SocialMediaLinks;
