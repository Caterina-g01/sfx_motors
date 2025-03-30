import s from "./styles.module.scss";
import { useEffect } from "react";

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

interface ItemWindowProps {
  product: Product | null;
  closeWindow: () => void;
  className?: string;
}

export default function ItemWindow({
  product,
  closeWindow,
  className,
}: ItemWindowProps) {
  useEffect(() => {
    if (product) {
      console.log("Текущий выбранный продукт:", product);
    } else {
      console.log("Продукт не выбран");
    }
  }, [product]);

  if (!product) {
    return null;
  }

  return (
    <div className={className} onClick={closeWindow}>
      <div className={s.main} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeButton} onClick={closeWindow}>
          ✖
        </button>

        <img
          className={s.mainPhoto}
          src={product.photos[0]}
          alt={product.params.model}
        />

        <div className={s.info}>
          <div className={s.priceAndModel}>
            <div className={s.prices}>
              <div className={s.priceByn}>
                {product.price.byn} <span className={s.byn}>BYN</span>
              </div>
              <div className={s.priceRub}>₽ {product.price.rub}</div>
              <div className={s.priceDollars}>$ {product.price.dollars}</div>
            </div>
            <div className={s.model}>{product.params.model}</div>
          </div>

          <div className={s.engine}>Двигатель: {product.params.engine}</div>
          <div className={s.transmission}>
            Трансмиссия: {product.params.transmission}
          </div>
          <div className={s.drive}>Привод: {product.params.drive}</div>
          <div className={s.mileage}>Пробег: {product.params.mileage}</div>
          <div className={s.description}>{product.description}</div>
        </div>
      </div>

      <div className={s.slides}>
        {/* {product.photos.map((photo, index) => (
          <img
            key={index}
            className={s.slideImg}
            src={photo}
            alt={`Фото ${index + 1}`}
          />
        ))} */}
      </div>
    </div>
  );
}
