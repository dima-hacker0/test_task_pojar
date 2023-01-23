import classes from "./form.module.css";

const Form = () => {
  return (
    <section className={classes.formSection}>
      <div className={classes.formSection__container}>
        <h3 className={classes.formSection__header}>
          Не нашли то, что искали?
        </h3>
      </div>
    </section>
  );
};

export default Form;
