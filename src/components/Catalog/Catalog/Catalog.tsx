import { useState, useEffect, useRef } from "react";
import s from "./styles.module.scss";
import ItemWindow from "../ItemWindow/ItemWindow";
import { ProductList } from "../ProductList/ProductList";
import Data, { ProductItem } from "../../../Data";


export const Catalog: React.FC = ({ }) => {
  const [isInStock, setIsInStock] = useState(true);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const stockRef = useRef<HTMLButtonElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const data = isInStock ? Data.catalog.stock : Data.catalog.arrivals;

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

  const handleOpenModal = (product: ProductItem | null) => {
    setSelectedProduct(product);
    setIsModalOpen(product !== null);
  };

  const closeWindow = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="catalog">
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
          {<ProductList data={data} onOpenModal={handleOpenModal} />}
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
    </section>
  );
}
