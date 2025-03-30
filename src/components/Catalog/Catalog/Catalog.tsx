import { useState, useEffect, useRef } from "react";
import s from "./styles.module.scss";
import Stock from "../Stock/Stock";
import Arrivals from "../Arrivals/Arrivals";
import ItemWindow from "../ItemWindow/ItemWindow";

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

export default function Catalog() {
  const [isInStock, setIsInStock] = useState(true);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const stockRef = useRef<HTMLButtonElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (stockRef.current) {
      const { offsetLeft, offsetWidth } = stockRef.current;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, []);

  const handleClick = (
    isStock: boolean,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setIsInStock(isStock);
    const { offsetLeft, offsetWidth } = event.target as HTMLButtonElement;
    setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
  };

  const openModal = (product: Product | null) => {
    setSelectedProduct(product);
    setIsModalOpen(product !== null);
  };

  const closeWindow = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className={s.container}>
        <div className={s.management}>
          <p className={s.text}>Техника</p>
          <button
            ref={stockRef}
            className={isInStock ? s.activeButton : s.button}
            onClick={(e) => handleClick(true, e)}
          >
            В Наличии
          </button>
          <div className={s.divisor}></div>
          <button
            className={isInStock ? s.button : s.activeButton}
            onClick={(e) => handleClick(false, e)}
          >
            В Пути
          </button>
          <div className={s.underline} style={underlineStyle}></div>
        </div>
        <div className={s.stockWrapper}>
          {isInStock ? (
            <Stock openModal={openModal} />
          ) : (
            <Arrivals openModal={openModal} />
          )}
        </div>
      </div>

      {isModalOpen && <div className={s.overlay} onClick={closeWindow}></div>}

      {isModalOpen && selectedProduct && (
        <ItemWindow
          className={s.modal}
          product={selectedProduct}
          closeWindow={closeWindow}
        />
      )}
    </div>
  );
}
