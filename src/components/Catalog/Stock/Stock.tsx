import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Data from "../../../Data";

import s from "./styles.module.scss";

interface Product {
  photos: string[];
  price: {
    byn: number;
    rub: number;
    dollars: number;
  };
  params: {
    model: string;
    engine: string;
    transmission: string;
    drive: string;
    mileage: string;
  };
  description: string;
}

interface StockProps {
  openModal: (product: Product | null) => void;
}

export default function Stock({ openModal }: StockProps) {
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
    <Slider className={s.sliderContainer} {...settings}>
      {Data.catalog.stock.map((item, index) => (
        <div
          onClick={() => {
            openModal(item);
          }}
          key={index}
          className={s.slide}
        >
          <div className={s.slideWrapper}>
            <img
              className={s.slideImg}
              src={item.photos[0]}
              alt={item.params.model}
            />
            <div className={s.overlay}>Подробнее</div>
          </div>
          <p className={s.modelName}>{item.params.model}</p>
        </div>
      ))}
    </Slider>
  );
}
