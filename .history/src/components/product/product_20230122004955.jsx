import classes from "./product.module.css";

const Product = ({ name }) => {
  return (
    <section className={`container`}>
      <h3 className={classes.name}>{name}</h3>
    </section>
  );
};
export default Product;
