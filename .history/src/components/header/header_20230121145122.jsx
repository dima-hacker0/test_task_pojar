import classes from "./header.module.css";
import logo from "../../png/logo.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`container ${classes.content}`}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.workingHours}>
        <p></p>
      </div>
    </header>
  );
};
export default Header;
