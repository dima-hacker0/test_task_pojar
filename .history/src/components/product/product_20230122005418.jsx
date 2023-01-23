import classes from "./product.module.css";

const Product = ({ name }) => {
  return (
    <section className={`container ${classes.productBlock}`}>
      <h3 className={classes.productName}>{name}</h3>
    </section>
  );
};
export default Product;
