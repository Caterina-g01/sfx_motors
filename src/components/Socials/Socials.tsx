import s from "./styles.module.scss";
import YouTube from "../../assets/imgs/social/youtube.png";
import Instagram from "../../assets/imgs/social/instagram.png";
import Telegram from "../../assets/imgs/social/telegram.png";

export default function Socials() {
  return (
    <div className={s.socials}>
      <div className={s.wrapper}>
        <p className={s.contacts__text}>
          Хотите задать вопрос? Связаться c нами просто!
        </p>
        <ul className={s.contacts__links}>
          <li>
            <a
              className={s.contacts__link}
              href="https://www.youtube.com/@sfxmotors"
            >
              <img className={s.contacts__img} src={YouTube} alt="YouTube" />{" "}
              youtube.com/@sfxmotors
            </a>
          </li>
          <li>
            <a
              className={s.contacts__link}
              href="https://www.instagram.com/sfxmotors/"
            >
              <img
                className={s.contacts__img}
                src={Instagram}
                alt="Instagram"
              />{" "}
              instagram.com/sfxmotors
            </a>
          </li>
          <li>
            <a className={s.contacts__link} href="https://t.me/sfxmoto">
              <img className={s.contacts__img} src={Telegram} alt="Telegram" />{" "}
              t.me/sfxmoto
            </a>
          </li>
        </ul>
        <div className={s.contacts__phones}>
          <a className={s.contacts__number} href="tel:+375293703366">
            +375 (29) 370-33-66
          </a>
          <a className={s.contacts__number} href="tel:+79938841003">
            +7 (993) 884-10-03
          </a>
        </div>
      </div>
    </div>
  );
}
