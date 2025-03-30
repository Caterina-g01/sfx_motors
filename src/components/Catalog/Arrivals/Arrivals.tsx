import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Data from "../../../Data";

import s from "./styles.module.scss";

interface ArrivalsProps {
  openModal: () => void;
}

export default function Arrivals({ openModal }: ArrivalsProps) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    rows: 3,
    slidesPerRow: 3,
    centerPadding: "400px",
  };
  return (
    <>
      <Slider className={s.sliderContainer} {...settings}>
        {Data.catalog.arrivals.map((item, index) => (
          <div onClick={openModal} key={index} className={s.slide}>
            <div className={s.slideWrapper}>
              <img
                className={s.slideImg}
                src={item.photos[0]}
                alt={`Slide ${index + 1}`}
              />
              <div className={s.overlay}>Подробнее</div>
            </div>
            <p className={s.modelName}>{item.params.model}</p>
          </div>
        ))}
      </Slider>
    </>
  );
}
