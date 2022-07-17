import { FC, useState } from "react";
import { IonPage, IonContent, IonGrid } from "@ionic/react";

import Header from "../components/Header";
import FormModal from "../components/requirements/FormModal";
import RequirementsList from "../components/requirements/RequirementsList";
import NewRequirementButton from "../components/requirements/NewRequirementButton";
import RequirementSelection from "../components/requirements/RequirementSelection";

const Requirements: FC = () => {
  const [requirementType, setRequirementType] = useState("0");
  const [requirements, setRequirements] = useState([]);

  return (
    <IonPage className="animate__animated animate__fadeIn animate__faster">
      <Header title="Requerimientos" />
      <IonContent fullscreen>
        <IonGrid className="mainCont">
          <RequirementSelection
            type={requirementType}
            setType={setRequirementType}
          />
          <RequirementsList />
          <NewRequirementButton />
          <FormModal
            title={requirementType === "0" ? "Bono ordinario" : "Bono crédito"}
            type={requirementType}
          />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Requirements;
