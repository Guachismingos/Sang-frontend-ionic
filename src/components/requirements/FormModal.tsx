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
import { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import FileInputField from "./FileInputField";
import IFLabes from "../../interfaces/IFLabes";
import useForm from "../../hooks/useForm";

const FormModal: FC<{ type: string; title: string }> = ({ type, title }) => {
  const modal = useRef<HTMLIonModalElement>(null);

  const { state, bind } = useForm({
    lastNames: "",
    email: "",
    address: "",
    primaryPhone: "",
    secondaryPhone: "",
  });

  const { lastNames, email, address, primaryPhone, secondaryPhone } = state;

  const [files, setFiles] = useState({
    idFile: { file: null },
  });

  const [labels, setlabels] = useState<IFLabes>({
    idFile: null,
    depositFile: null,
    waterFile: null,
    lightFile: null,
    taxesFile: null,
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({...state, ...files});
  };

  const changeFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [e.target.name]: e.target.files?.item(0),
    }));
    setlabels((prevFiles) => ({
      ...prevFiles,
      [e.target.name]: e.target.files?.item(0)?.name,
    }));
  };

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
              <IonInput
                type="text"
                name="lastNames"
                {...bind}
                value={lastNames}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating" className="label">
                Correo:
              </IonLabel>
              <IonInput type="email" name="email" {...bind} value={email} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating" className="label">
                Dirección:
              </IonLabel>
              <IonInput type="text" name="address" {...bind} value={address} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating" className="label">
                Teléfono celular:
              </IonLabel>
              <IonInput
                type="tel"
                name="primaryPhone"
                {...bind}
                value={primaryPhone}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating" className="label">
                Teléfono secundario:
              </IonLabel>
              <IonInput
                type="tel"
                name="secondaryPhone"
                {...bind}
                value={secondaryPhone}
              />
            </IonItem>
            <FileInputField label={labels.idFile} name="id" show="Cédula">
              <input
                style={{ display: "none" }}
                type="file"
                id="id"
                name="idFile"
                onChange={changeFile}
              />
            </FileInputField>
            <FileInputField
              label={labels.depositFile}
              name="deposit"
              show="Déposito"
            >
              <input
                style={{ display: "none" }}
                type="file"
                id="deposit"
                name="depositFile"
                onChange={changeFile}
              />
            </FileInputField>
            <FileInputField
              label={labels.waterFile}
              name="water"
              show="Disponibilidad de agua"
            >
              <input
                style={{ display: "none" }}
                type="file"
                id="water"
                name="waterFile"
                onChange={changeFile}
              />
            </FileInputField>
            <FileInputField
              label={labels.lightFile}
              name="light"
              show="Disponibilidad de luz"
            >
              <input
                style={{ display: "none" }}
                type="file"
                id="light"
                name="lightFile"
                onChange={changeFile}
              />
            </FileInputField>
            <FileInputField
              label={labels.taxesFile}
              name="taxes"
              show="Certificado de impuestos"
            >
              <input
                style={{ display: "none" }}
                type="file"
                id="taxes"
                name="taxesFile"
                onChange={changeFile}
              />
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
