import classes from "./product.module.css";

const Product = ({ name, images }) => {
  const imagesArr = images.map((item) => (
    <li>
      <img className={classes.image} src={item} alt="product_photo" />
    </li>
  ));

  return (
    <section className={`container ${classes.productBlock}`}>
      <h3 className={classes.productName}>{name}</h3>
      <div className={classes.photosProduct}>
        <div className={classes.photosSlider}>
          <ul className={classes.photosSlider__content}>{imagesArr}</ul>
        </div>
        <div className={classes.mainPhotoBlock}>
          <img className={classes.mainPhoto} src={images[0]} alt="main_photo" />
        </div>
      </div>
    </section>
  );
};

export default Product;
