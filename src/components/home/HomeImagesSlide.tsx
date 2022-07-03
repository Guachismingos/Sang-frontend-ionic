import { IonCol, IonRow, IonImg } from "@ionic/react";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper";

import "@ionic/react/css/ionic-swiper.css";
import "swiper/css/pagination";
import "swiper/css";

import { images } from "../../assets/images/home";

const HomeImagesSlide: FC = () => {
  const options = {
    modules: [Pagination, Autoplay],
    autoplay: { delay: 6000 },
    pagination: true,
    spaceBetween: 10,
  };

  return (
    <IonRow className="homeSlidesSection">
      <IonCol sizeSm="8" sizeMd="6" sizeLg="4" sizeXl="3">
        <Swiper {...options}>
          {images.map((img) => (
            <SwiperSlide key={img} className="homeSlide">
              <IonImg className="homeSlideImg" src={img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </IonCol>
    </IonRow>
  );
};

export default HomeImagesSlide;
