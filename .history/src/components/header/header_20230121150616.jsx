import classes from "./header.module.css";
import logo from "../../png/logo.png";
import Svg from "../../svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`container ${classes.content}`}>
        <img className={classes.logo} src={logo} alt="logo" />
        <div className={classes.workingHours}>
          <p>Пн-Сб: c 10:00 до 20:00</p>
          <p>Выходной: воскресенье</p>
        </div>
        <div className={classes.orderLayout}>
          <div className={classes.wrapper}>
            <Svg name="3d"></Svg>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
