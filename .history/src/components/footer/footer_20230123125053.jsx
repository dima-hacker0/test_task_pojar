import classes from "./footer.module.css";
import generalClasses from "../../generalClasses.module.css";
import logo from "../../png/logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`${generalClasses.container} ${classes.footer__content}`}>
        <div className={classes.footer__1column}>
          <img className={classes.firstLogo} src={logo} alt="logo" />
          <button className={classes.buttonOrderCall}>Заказать звонок</button>
        </div>
        <div className={classes.footer__2column}>
          <nav className={classes.navigation}>
            <ul className={classes.navigation__column}>
              <li className={classes.navigation__item}>Главная</li>
              <li className={classes.navigation__item}>Каталог</li>
              <li className={classes.navigation__item}>Услуги</li>
              <li className={classes.navigation__item}>Расчет стоимости</li>
              <li className={classes.navigation__item}>
                Консультация архитектора
              </li>
            </ul>
            <ul className={classes.navigation__column}>
              <li className={classes.navigation__item}>Экскурсия на объект</li>
              <li className={classes.navigation__item}>3D-макет дома</li>
              <li className={classes.navigation__item}>О нас</li>
              <li className={classes.navigation__item}>Блог</li>
              <li className={classes.navigation__item}>Контакты</li>
            </ul>
          </nav>
        </div>
        <div className={classes.footer__3column}>
          <p className={classes.column3__text}>
            Делимся крутыми проектами в соц.сетях. Подписывайтесь!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
