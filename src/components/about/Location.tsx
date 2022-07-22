import { IonCol, IonRow } from "@ionic/react";

const Location = () => {
  return (
    <IonRow className="homeSection mainCont">
      <IonCol sizeSm="8" sizeMd="6" sizeLg="4" sizeXl="6">
        <div className="map" style={{ paddingBottom: "100px" }}>
          <h1
            style={{
              textAlign: "center",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            Ubicación
          </h1>

          <div className="google-map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9138.95137140846!2d-83.7875293500763!3d10.213550058981001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfc270e0bb3722bf2!2sGRUPO%20SANG%20S.A!5e0!3m2!1ses-419!2scr!4v1658244084919!5m2!1ses-419!2scr"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </div>
        </div>
      </IonCol>
    </IonRow>
  );
};

export default Location;
