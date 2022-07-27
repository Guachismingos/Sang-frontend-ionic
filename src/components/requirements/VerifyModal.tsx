import { useRef, useState } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import useForm from "../../hooks/useForm";

const VerifyModal = () => {
  const modal1 = useRef<HTMLIonModalElement>(null);

  const [data, setData] = useState([]);

  const { state, bind } = useForm({
    ticket: "",
  });

  const { ticket } = state;

  const searchTicket = () => {};

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
            />
          </IonItem>
          <IonButton
            type="button"
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
            onClick={searchTicket}
          >
            Enviar
          </IonButton>
        </IonList>
        <IonItemDivider />
        {data[0] && (
          <IonList style={{ padding: "30px" }}>
            <IonListHeader
              style={{ padding: "0", fontSize: "20px", fontWeight: "bold" }}
            >
              <IonLabel>Información</IonLabel>
            </IonListHeader>
            {data[0]?.name && (
              <IonItem>
                <IonLabel>
                  <strong>Nombre:</strong> {data[0]?.name}
                </IonLabel>
              </IonItem>
            )}
            <IonItem>
              <IonLabel>a</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>a</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>a</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>a</IonLabel>
            </IonItem>
          </IonList>
        )}
      </IonContent>
    </IonModal>
  );
};

export default VerifyModal;
