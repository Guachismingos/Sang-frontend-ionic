import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { FC } from "react";

const Header: FC<{ title: string }> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons>
          <IonBackButton />
        </IonButtons>
        <IonTitle slot="end">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
