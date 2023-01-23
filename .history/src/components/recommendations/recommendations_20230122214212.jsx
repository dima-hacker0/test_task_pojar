import classes from "./recommendations.module.css";
import RecProduct from "./recProduct";
import topasRecImg from "../../png/topas_rec.png";

const Recommendations = () => {
  return (
    <section className={classes.recommendationsSection}>
      <div className="container">
        <h3 className={classes.headerText}>Вам также могут понравиться</h3>
        <RecProduct
          image={topasRecImg}
          name="Топас-С 4"
          countPeople="4"
          prevPrice="86 700"
          newPrice="78 030"
          characteristics={[
            { characteristic: "Очистка:", value: "0,8 м3/сут" },
            { characteristic: "Залповый сброс:", value: "175 л" },
          ]}
        />
      </div>
    </section>
  );
};
export default Recommendations;
