import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import s from "./styles.module.scss";
import { ProductItem } from "../../../Data";

interface ProductListProps {
    onOpenModal: (item: ProductItem | null) => void;
    data: ProductItem[]
}

export const ProductList: React.FC<ProductListProps> = ({ onOpenModal, data }) => {
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
            {data.map((item, index) => (
                <div
                    onClick={() => onOpenModal(item)}
                    key={index}
                    className={s.slide}
                >
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
    );
}
