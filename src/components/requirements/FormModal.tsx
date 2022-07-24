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
  IonLoading,
  IonToolbar,
  useIonToast,
} from "@ionic/react";
import { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import FileInputField from "./FileInputField";
import IFLabes from "../../interfaces/IFLabes";
import useForm from "../../hooks/useForm";
import { useCRUD } from "../../context/CRUDContext";
import { useHistory } from "react-router";

const FormModal: FC<{ type: string; title: string }> = ({ type, title }) => {
  const modal = useRef<HTMLIonModalElement>(null);

  const { newRequirement } = useCRUD();

  const { state, bind } = useForm({
    lastNames: "",
    email: "",
    address: "",
    primaryPhone: "",
    secondaryPhone: "",
    idFile: "",
    depositFile: "",
    waterFile: "",
    lightFile: "",
    taxesFile: "",
    type: parseInt(type),
    date: new Date().toDateString(),
    status: 0
  });

  const [loading, setLoading] = useState(false);

  const [toast, dismissToast] = useIonToast();

  const { lastNames, email, address, primaryPhone, secondaryPhone } = state;

  const [files, setFiles] = useState<{ id: string; file: File }[]>([]);

  const [labels, setlabels] = useState<IFLabes>({
    idFile: null,
    depositFile: null,
    waterFile: null,
    lightFile: null,
    taxesFile: null,
  });

  let history = useHistory();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      await newRequirement(state, files);
      modal.current.dismiss();
      toast({
        buttons: [{ text: "x", handler: () => dismissToast() }],
        message: "Solicitud exitosa!!",
        color: "success",
        duration: 3000,
      });
      setLoading(false);
      history.push("/home");
    } catch (error) {
      toast({
        buttons: [{ text: "x", handler: () => dismissToast() }],
        message: `Hubo un error en su solicitud (${error})`,
        color: "danger",
        duration: 3000,
      });
      setLoading(false);
    }
  };

  const changeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files.item(0);
      setFiles((prevFiles) => [
        ...prevFiles,
        { id: e.target.name, file: file },
      ]);
    }
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
            <IonButton onClick={() => modal.current.dismiss()}>
              Cancelar
            </IonButton>
          </IonButtons>
          <IonTitle slot="end">{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        //#region Form 
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
                required
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
              <IonInput
                required
                type="email"
                name="email"
                {...bind}
                value={email}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating" className="label">
                Dirección:
              </IonLabel>
              <IonInput
                required
                type="text"
                name="address"
                {...bind}
                value={address}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating" className="label">
                Teléfono celular:
              </IonLabel>
              <IonInput
                required
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
                required
                type="tel"
                name="secondaryPhone"
                {...bind}
                value={secondaryPhone}
              />
            </IonItem>
            <FileInputField label={labels.idFile} name="id" show="Cédula">
              <input
                required
                style={{ opacity: 0, width: 1 }}
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
                required
                style={{ opacity: 0, width: 1 }}
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
                required
                style={{ opacity: 0, width: 1 }}
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
                required
                style={{ opacity: 0, width: 1 }}
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
                required
                style={{ opacity: 0, width: 1 }}
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
        //#endregion
        <IonLoading isOpen={loading} message={"Cargando..."} />
      </IonContent>
    </IonModal>
  );
};

export default FormModal;
