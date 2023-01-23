import classes from "./product.module.css";

const Product = ({ name }) => {
  return (
    <section>
      <h3 className={classes.name}>{name}</h3>
    </section>
  );
};
export default Product;
