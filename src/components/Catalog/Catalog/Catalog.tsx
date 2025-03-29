import { useState, useEffect, useRef } from "react";
import s from "./styles.module.scss";
import Stock from "../Stock/Stock";
import Arrivals from "../Arrivals/Arrivals";

export default function Catalog() {
  const [isInStock, setIsInStock] = useState(true);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const stockRef = useRef(null);

  useEffect(() => {
    if (stockRef.current) {
      const { offsetLeft, offsetWidth } = stockRef.current;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, []);

  const handleClick = (
    isStock: boolean,
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setIsInStock(isStock);
    const { offsetLeft, offsetWidth } = event.target as HTMLButtonElement;
    setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
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
          {isInStock ? <Stock /> : <Arrivals />}
        </div>
      </div>
    </div>
  );
}
