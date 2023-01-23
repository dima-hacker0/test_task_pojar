import classes from "./recommendations.module.css";

const Recommendations = () => {
  return (
    <section className={classes.recommendationsSection}>
      <div className="container">
        <h3 className={classes.headerText}>Вам также могут понравиться</h3>
      </div>
    </section>
  );
};
export default Recommendations;
