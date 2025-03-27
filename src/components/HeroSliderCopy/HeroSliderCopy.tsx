import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import s from "./styles.module.scss";
import imgOne from "../../assets/imgs/1.jpeg";
import imgTwo from "../../assets/imgs/2.jpeg";
import imgThree from "../../assets/imgs/3.jpeg";
import arrowRight from "../../assets/imgs/white_arrow-right.png";
import arrowLeft from "../../assets/imgs/white_arrow.png";

export default function HeroSliderCopy() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const duration = 5000;

  return (
    <div className={s.sliderContainer}>
      <button ref={prevRef} className={s.customPrevButton}>
        <img className={s.arrowLeft} src={arrowLeft} alt="Предыдущий" />
      </button>

      <button ref={nextRef} className={s.customNextButton}>
        <img className={s.arrowRight} src={arrowRight} alt="Следующий" />
      </button>

      <Swiper
        slidesPerView={"auto"}
        autoplay={{
          delay: duration,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        loop={true}
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        onBeforeInit={(swiper: SwiperCore) => {
          if (swiper.params.navigation) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        onAutoplayTimeLeft={(_: SwiperCore, timeLeft: number) => {
          setProgress(((duration - timeLeft) / duration) * 100);
        }}
        className="mySwiper"
      >
        <SwiperSlide className={s.slide}>
          <img className={s.sliderImg} src={imgOne} alt="Слайд 1" />
          <p className={s.slideText}>MV Agusta Dragster 800 RR</p>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <img className={s.sliderImg} src={imgTwo} alt="Слайд 2" />
          <p className={s.slideText}>MV Agusta Dragster 800 RR</p>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <img className={s.sliderImg} src={imgThree} alt="Слайд 3" />
          <p className={s.slideText}>MV Agusta Dragster 800 RR</p>
        </SwiperSlide>
      </Swiper>

      <div className={s.progressBarContainer}>
        <div
          className={s.progressBar}
          style={{ transform: `scaleY(${progress / 100})` }}
        />
      </div>
    </div>
  );
}
