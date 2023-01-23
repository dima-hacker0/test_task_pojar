import classes from "./product.module.css";

const Product = ({ name, images }) => {
  images = images.map((item) => (
    <li>
      <img className={classes.image} src={item} alt="product_photo" />
    </li>
  ));

  return (
    <section className={`container ${classes.productBlock}`}>
      <h3 className={classes.productName}>{name}</h3>
      <div className={classes.photosProduct}>
        <div className={classes.photosSlider}>
          <ul className={classes.photosSlider__content}>{images}</ul>
        </div>
        <div className={classes.mainPhoto}>{images[0]}</div>
      </div>
    </section>
  );
};

export default Product;
