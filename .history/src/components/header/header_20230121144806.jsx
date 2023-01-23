import classes from "./header.module.css";
import logo from "../../png/logo.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`.container ${classes.content}`}>
        {/* <img src="../../png/logo.png" alt="logo" /> */}
      </div>
    </header>
  );
};
export default Header;
