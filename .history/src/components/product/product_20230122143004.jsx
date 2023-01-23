import Svg from "../../svg";
import classes from "./product.module.css";

const Product = ({ name, images, characteristics, price }) => {
  const imagesArr = images.map((item) => (
    <li>
      <img className={classes.image} src={item} alt="product_photo" />
    </li>
  ));

  characteristics = characteristics.map((item) => (
    <div className={classes.characteristicProduct}>
      <p className={classes.characteristicProduct__text}>
        {item.characteristic}
      </p>
      <p className={classes.characteristicProduct__text}>{item.value}</p>
    </div>
  ));

  return (
    <section className={`container ${classes.productBlock}`}>
      <h3 className={classes.productName}>{name}</h3>
      <div>
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
              <div className={classes.svgWrapper}>
                <Svg name="magnifier"></Svg>
              </div>
            </div>
          </div>
          <div className={classes.characteristics}>{characteristics}</div>
        </div>
        <div>
          Цена: <span>{price}</span>
        </div>
      </div>
    </section>
  );
};

export default Product;
