import classes from "./header.module.css";
import logo from "../../png/logo.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`container ${classes.content}`}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.workingHours}>
        <p>Пн-Сб: c 10:00 до 20:00</p>
        <p>Выходной: воскресенье</p>
      </div>
    </header>
  );
};
export default Header;
