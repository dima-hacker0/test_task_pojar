import classes from "./footer.module.css";
import generalClasses from "../../generalClasses.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <dir className={generalClasses.container}></dir>
    </footer>
  );
};

export default Footer;
