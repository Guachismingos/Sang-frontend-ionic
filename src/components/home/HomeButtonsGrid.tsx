import {
  IonRow,
  IonGrid,
  IonCol,
  IonImg,
  IonCard,
} from "@ionic/react";
import { FC } from "react";
import routes from "../../router/routes";
import { useHistory } from "react-router";

const HomeButtonsGrid: FC = () => {
  let history = useHistory();

  return (
    <IonRow>
      <IonGrid>
        <IonRow>
          {routes.slice(1).map(({ name, path, icon_img }) => (
            <IonCol key={name} size="6">
              <IonCard
                onClick={() => history.push(path)}
                className="homeGridButton"
              >
                <IonImg src={icon_img} className="homeGridImage" />
                {name}
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </IonRow>
  );
};

export default HomeButtonsGrid;