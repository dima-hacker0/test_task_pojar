import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`.container ${classes.content}`}>
        <img src="../../" alt="logo" />
      </div>
    </header>
  );
};
export default Header;
