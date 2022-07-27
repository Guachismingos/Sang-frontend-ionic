import { FormEvent, useRef, useState } from "react";
import {
  IonButton,
  IonButtons,
  IonChip,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import useForm from "../../hooks/useForm";
import { useCRUD } from "./../../context/CRUDContext";
import FormValues from "../../interfaces/FormValues";

const VerifyModal = () => {
  const modal1 = useRef<HTMLIonModalElement>(null);

  const { loadRequirementById } = useCRUD();

  const [data, setData] = useState<FormValues[]>([]);

  const { state, bind } = useForm({
    ticket: "",
  });

  const { ticket } = state;

  const [loading, setLoading] = useState(false);

  const searchTicket = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const refData: FormValues[] = [];
      const querySnapshot = await loadRequirementById(ticket);
      querySnapshot.forEach((doc) => {
        refData.push(doc.data());
      });
      setData(refData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const formatStatus = (value: number) => {
    let label = "Error";
    switch (value) {
      case -1:
        label = "Cancelado";
        break;
      case 0:
        label = "Pendiente";
        break;
      case 1:
        label = "En Progreso";
        break;
      default:
        break;
    }
    return (
      <IonChip>
        <IonLabel>{label}</IonLabel>
      </IonChip>
    );
  };

  return (
    <IonModal ref={modal1} trigger="open-modal-2">
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonButton onClick={() => modal1.current.dismiss()}>
              Volver
            </IonButton>
          </IonButtons>
          <IonTitle slot="end">Estado del Requerimiento</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={searchTicket}>
          <IonList>
            <IonListHeader
              style={{
                padding: "0",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              <IonLabel style={{ fontSize: "25px", paddingTop: "30px" }}>
                Ingrese el código de Ticket
              </IonLabel>
            </IonListHeader>
            <IonItem style={{ fontSize: "25px" }}>
              <IonLabel position="floating" className="label">
                Ticket:
              </IonLabel>
              <IonInput
                required
                type="text"
                name="ticket"
                {...bind}
                value={ticket}
                style={{ textAlign: "center" }}
                min={4}
              />
            </IonItem>
            <IonButton
              type="submit"
              className="ButtonStyled"
              shape="round"
              fill="outline"
              expand="block"
              size="large"
              style={{
                paddingRight: "30px",
                paddingLeft: "30px",
                marginTop: "40px",
              }}
            >
              Enviar
            </IonButton>
          </IonList>
        </form>
        <IonItemDivider />
        {loading ? (
          <div style={{ textAlign: "center", paddingTop: "50px" }}>
            <IonSpinner color="primary" />
            <hr />
            Cargando...
          </div>
        ) : (
          data[0] && (
            <IonList style={{ padding: "30px" }}>
              <IonListHeader
                style={{ padding: "0", fontSize: "20px", fontWeight: "bold" }}
              >
                <IonLabel>Información</IonLabel>
              </IonListHeader>
              {data[0]?.lastNames && (
                <IonItem>
                  <IonLabel>
                    <strong>Apellidos:</strong> {data[0]?.lastNames}
                  </IonLabel>
                </IonItem>
              )}
              <IonItem>
                <IonLabel>
                  <strong>Dirección:</strong> {data[0]?.address}
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <strong>Estado:</strong> {formatStatus(data[0]?.status)}
                </IonLabel>
              </IonItem>
            </IonList>
          )
        )}
      </IonContent>
    </IonModal>
  );
};

export default VerifyModal;
