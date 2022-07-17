import {
  IonCol,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonGrid,
} from "@ionic/react";
import { Dispatch, FC, SetStateAction } from "react";

const RequirementSelection: FC<{
  type: string;
  setType: Dispatch<SetStateAction<string>>;
}> = ({ type, setType }) => {
  return (
    <IonRow className="homeSection">
      <IonCol sizeSm="8" sizeMd="6" sizeLg="4" sizeXl="3">
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonSegment
                value={type}
                onIonChange={(e) => setType(`${e.target.value}`)}
              >
                <IonSegmentButton value="0">
                  <b>Bono ordinario</b>
                </IonSegmentButton>
                <IonSegmentButton value="1">
                  <b>Bono crédito</b>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCol>
    </IonRow>
  );
};

export default RequirementSelection;
