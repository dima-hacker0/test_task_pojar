import classes from "./recommendations.module.css";
import RecProduct from "./recProduct";
import topasRecImg from "../../png/topas_rec.png";

const Recommendations = () => {
  return (
    <section className={classes.recommendationsSection}>
      <div className="container">
        <h3 className={classes.headerText}>Вам также могут понравиться</h3>
        <RecProduct />
      </div>
    </section>
  );
};
export default Recommendations;
