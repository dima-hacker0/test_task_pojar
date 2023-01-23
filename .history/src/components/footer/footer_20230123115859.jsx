import classes from "./footer.module.css";
import generalClasses from "../../generalClasses.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`${generalClasses.container} ${classes.footer__content}`}>
        <div className={classes.footer__1column}></div>
        <div className={classes.footer__2column}></div>
        <div className={classes.footer__3column}></div>
      </div>
    </footer>
  );
};

export default Footer;
