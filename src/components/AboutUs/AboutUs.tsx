import React from "react";
import s from "./styles.module.scss";

export default function AboutUs() {
  return (
    <div className={s.aboutUs}>
      <div className={s.wrapper}>
        <p className={s.text}>
          Мы - SFX Motors. <br /> Нашей истории положило начало творческое
          объединение близких по духу людей, увлечённых миром мотоциклов и авто,
          в последствии, и заложивших фундамент для создания Компании. Вместо
          1000 слов, мы просто скажем - мы любим своё дело и вкладываем в него
          наше стремление сделать мир лучше.
        </p>
      </div>
    </div>
  );
}
