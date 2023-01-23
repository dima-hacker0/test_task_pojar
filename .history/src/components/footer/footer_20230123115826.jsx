import classes from "./footer.module.css";
import generalClasses from "../../generalClasses.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div
        className={`${generalClasses.container} ${classes.footer__content}`}></div>
    </footer>
  );
};

export default Footer;
