import classes from "./product.module.css";

const Product = ({ name, images }) => {
  return (
    <section className={`container ${classes.productBlock}`}>
      <h3 className={classes.productName}>{name}</h3>
      <div className={classes.photosProduct}>
        <div className={classes.photosSlider}>
          <ul className={classes.photosContent}></ul>
        </div>
      </div>
    </section>
  );
};
export default Product;
