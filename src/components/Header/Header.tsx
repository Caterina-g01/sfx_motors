import React from "react";
import s from "./styles.module.scss";
import WhatsApp from "../../assets/imgs/social/whatsapp.png";
import Telegram from "../../assets/imgs/social/telegram.png";
import Logo from "../../assets/imgs/SFXMotorsLogo.png";

export default function Header() {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <div className={s.header__wrapper}>
          <div className={s.nav__content}>
            <img className={s.nav__logo} src={Logo} alt="Logo" />
            <ul className={s.nav__list}>
              <li className={s.nav__item}>Техника</li>
              <li className={s.nav__item}>Соцсети</li>
              <li className={s.nav__item}>Отзывы</li>
              <li className={s.nav__item}>О Нас</li>
            </ul>
          </div>
          <div className={s.contacts}>
            <div className={s.contacts__messengers}>
              <a className={s.contacts__messengers__link} href="#">
                <img
                  className={s.contacts__messengers__img}
                  src={WhatsApp}
                  alt="WhatsApp"
                />
              </a>
              <a className={s.contacts__messengers__link} href="#">
                <img
                  className={s.contacts__messengers__img}
                  src={Telegram}
                  alt="Telegram"
                />
              </a>
            </div>
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
      </nav>
    </header>
  );
}
