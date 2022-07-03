import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { FC, useRef, useState } from "react";
import FormValues from "../../interfaces/FormValues";
import FileInputField from "./FileInputField";
import IFLabes from "../../interfaces/IFLabes";

const FormModal: FC<{ type: string; title: string }> = ({ type, title }) => {
  const modal = useRef<HTMLIonModalElement>(null);

  const [labels, setlabels] = useState<IFLabes>({
    id: null,
    deposit: null,
    water: null,
    light: null,
    taxes: null,
  });


  const onSubmit = () => console.log("submit");

  return (
    <IonModal ref={modal} trigger="open-modal">
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonButton onClick={() => modal.current?.dismiss()}>
              Cancelar
            </IonButton>
          </IonButtons>
          <IonTitle slot="end">{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={onSubmit} style={{ padding: "30px" }}>
          <IonList>
            <IonListHeader
              style={{ padding: "0", fontSize: "20px", fontWeight: "bold" }}
            >
              <IonLabel>Información</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonLabel position="floating" className="label">
                Apellidos:
              </IonLabel>
              <IonInput type="text" />
            </IonItem>
            <IonItem>
              <IonLabel position="floating" className="label">
                Correo:
              </IonLabel>
              <IonInput type="email" />
            </IonItem>
            <IonItem>
              <IonLabel position="floating" className="label">
                Dirección:
              </IonLabel>
              <IonInput type="text" />
            </IonItem>
            <IonItem>
              <IonLabel position="floating" className="label">
                Teléfono celular:
              </IonLabel>
              <IonInput type="tel" />
            </IonItem>
            <IonItem>
              <IonLabel position="floating" className="label">
                Teléfono secundario:
              </IonLabel>
              <IonInput type="tel" />
            </IonItem>
            <FileInputField label={labels.id} name="id" show="Cédula">
              <input style={{ display: "none" }} type="file" id="id" />
            </FileInputField>
            <FileInputField
              label={labels.deposit}
              name="deposit"
              show="Déposito"
            >
              <input style={{ display: "none" }} type="file" id="deposit" />
            </FileInputField>
            <FileInputField
              label={labels.water}
              name="water"
              show="Disponibilidad de agua"
            >
              <input style={{ display: "none" }} type="file" id="water" />
            </FileInputField>
            <FileInputField
              label={labels.light}
              name="light"
              show="Disponibilidad de luz"
            >
              <input style={{ display: "none" }} type="file" id="light" />
            </FileInputField>
            <FileInputField
              label={labels.taxes}
              name="taxes"
              show="Certificado de impuestos"
            >
              <input style={{ display: "none" }} type="file" id="taxes" />
            </FileInputField>
          </IonList>
          <IonButton
            type="submit"
            className="ButtonStyled"
            shape="round"
            fill="outline"
          >
            Enviar
          </IonButton>
        </form>
      </IonContent>
    </IonModal>
  );
};

export default FormModal;
