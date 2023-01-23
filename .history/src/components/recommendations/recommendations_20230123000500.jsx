import classes from "./recommendations.module.css";
import RecProduct from "./recProduct";
import topasRecImg from "../../png/topas_rec.png";
import Svg from "../../svg";

const Recommendations = () => {
  return (
    <section className={classes.recommendationsSection}>
      <div className="container">
        <h3 className={classes.headerText}>Вам также могут понравиться</h3>
        <div className={classes.slider}>
          <div className={classes.slider__products}>
            <div className={classes.arrowWrapper}>
              <Svg name="arrow"></Svg>
            </div>
            <RecProduct
              image={topasRecImg}
              name="Топас-С 4"
              countPeople="4"
              prevPrice="86 700 ₽"
              newPrice="78 030 ₽"
              characteristics={[
                { characteristic: "Очистка:", value: "0,8 м3/сут" },
                { characteristic: "Залповый сброс:", value: "175 л" },
              ]}
            />
            <RecProduct
              image={topasRecImg}
              name="Топас-С 4 Пр"
              countPeople="4"
              prevPrice="98 300 ₽"
              newPrice="88 470 ₽"
              characteristics={[
                { characteristic: "Очистка:", value: "0,8 м3/сут" },
                { characteristic: "Залповый сброс:", value: "175 л" },
              ]}
            />
            <RecProduct
              image={topasRecImg}
              name="Топас-С 5"
              countPeople="5"
              prevPrice="99 500 ₽"
              newPrice="89 550 ₽"
              characteristics={[
                { characteristic: "Очистка:", value: "1 м3/сут" },
                { characteristic: "Залповый сброс:", value: "220 л" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Recommendations;
