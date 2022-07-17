import { IonIcon, IonItem } from "@ionic/react";
import { documentAttachOutline } from "ionicons/icons";
import { FC } from "react";

type InputValues = {
  label: string | null | undefined;
  name: string;
  show: string;
};

const FileInputField: FC<InputValues> = ({ children, label, name, show }) => {
  return (
    <IonItem detail>
      <label
        htmlFor={name}
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1 }}>
          {show}: <small>{label ? label : "Seleccione un archivo..."}</small>
        </div>
        <IonIcon size="small" slot="end" icon={documentAttachOutline} />
      </label>
      {children}
    </IonItem>
  );
};

export default FileInputField;
