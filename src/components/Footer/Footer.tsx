import s from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        000 "ЭсЭфикс", УНП 193849990, 220020, г. Минск, ул. Тимирязева 97, каб.
        22-200 <br /> Информация на сайте не является публичной офертой и носит
        исключительно ознакомительный, консультативный характер.
        <br /> Политика конфиденциальности
      </div>
    </div>
  );
}
