import classes from "./footer.module.css";
import generalClasses from "../../generalClasses.module.css";
import logo from "../../png/logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`${generalClasses.container} ${classes.footer__content}`}>
        <div className={classes.footer__1column}>
          <img src={logo} alt="logo" />
          <button className={classes.buttonOrderCall}>Заказать звонок</button>
        </div>
        <div className={classes.footer__2column}></div>
        <div className={classes.footer__3column}></div>
      </div>
    </footer>
  );
};

export default Footer;
