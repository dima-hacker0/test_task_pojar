import Svg from "../../svg";
import classes from "./product.module.css";
import generalClasses from "../../generalClasses.module.css";

const Product = ({ name, images, characteristics, price, description }) => {
  const imagesArr = images.map((item, i) => (
    <li key={i}>
      <img className={classes.image} src={item} alt="product_photo" />
    </li>
  ));

  characteristics = characteristics.map((item, i) => (
    <div key={i} className={classes.characteristicProduct}>
      <p className={classes.characteristicProduct__text}>
        {item.characteristic}
      </p>
      <p className={classes.characteristicProduct__text}>{item.value}</p>
    </div>
  ));

  return (
    <section className={classes.productBlock}>
      <div className={generalClasses}>
        <h3 className={classes.productName}>{name}</h3>
        <div className={classes.productContent}>
          <div className={classes.photosProduct}>
            <div className={classes.photosSlider}>
              <ul className={classes.photosSlider__content}>{imagesArr}</ul>
            </div>
            <div className={classes.mainPhotoBlock}>
              <img
                className={classes.mainPhoto}
                src={images[1]}
                alt="main_photo"
              />
              <div className={classes.magnifierSvgWrapper}>
                <Svg name="magnifier"></Svg>
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className={classes.characteristics}>{characteristics}</div>
            <div className={classes.price}>
              Цена: <span>{price}</span>
            </div>
          </div>
        </div>
        <div className={classes.discussDetailsAndDescription}>
          <div className={classes.discussDetailsAndDescription__details}>
            <h4 className={classes.discussDetailsAndDescription__header}>
              Обсудим детали?
            </h4>
            <form className={classes.form} action="">
              <input
                placeholder="Ваше имя"
                className={generalClasses.formInput}
                type="text"
              />
              <input
                placeholder="Номер телефона"
                className=className={generalClasses.formInput}
                type="text"
              />
              <input
                value="Хочу обсудить детали"
                className={`formInput ${classes.form__submit}`}
                type="submit"
              />
            </form>
          </div>
          <div className={classes.discussDetailsAndDescription_description}>
            <h3 className={classes.discussDetailsAndDescription__header}>
              Описание модели
            </h3>
            <p className={classes.descriptionText}>{description}</p>
          </div>
        </div>
        <ul className={classes.menu}>
          <li className={classes.svgWrapper}>
            <Svg name="calculator"></Svg>
          </li>
          <li className={classes.svgWrapper}>
            <Svg name="binoculars"></Svg>
          </li>
          <li className={classes.svgWrapper}>
            <Svg name="dividers"></Svg>
          </li>
          <li className={classes.svgWrapper}>
            <Svg name="builder"></Svg>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Product;
