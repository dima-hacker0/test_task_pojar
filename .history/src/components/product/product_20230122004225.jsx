import classes from "./product.module.css";

const Product = ({ name }) => {
  return (
    <section>
      <h2 className={classes.name}></h2>
    </section>
  );
};
export default Product;
