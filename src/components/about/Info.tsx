import { IonCol, IonGrid, IonRow } from "@ionic/react";

const Info = () => {
  return (
    <IonRow className="homeSection">
      <IonCol sizeSm="8" sizeMd="6" sizeLg="4" sizeXl="6">
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <h3 style={{ textAlign: "justify" }}>
                Nosotros:{" "}
                <small>
                  Grupo Sang, es una empresa joven conformada por un equipo de
                  profesionales enfocados en las necesidades de nuestros
                  clientes y en la calidad de nuestros servicios. En un corto
                  tiempo hemos desarrollado un conjunto de obras importantes en
                  el sector privado y público cumpliendo con los costos y
                  tiempos de ejecución.
                </small>
              </h3>
              <h3
                style={{
                  textAlign: "justify",
                  paddingTop: "20px",
                }}
              >
                Misión:{" "}
                <small>
                  Nuestra misión es satisfacer a nuestros clientes y poner
                  nuestros servicios profesionaes a la orden para que logren sus
                  objetivos de la manera más óptima e integral posible.
                </small>
              </h3>
              <h3
                style={{
                  textAlign: "justify",
                  paddingTop: "20px",
                }}
              >
                Vision:{" "}
                <small>
                  Ser líderes en la prestación de servicios de ingeniería civil,
                  arquitectura y construcción, a nivel regional y nacional.
                </small>
              </h3>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCol>
    </IonRow>
  );
};

export default Info;
