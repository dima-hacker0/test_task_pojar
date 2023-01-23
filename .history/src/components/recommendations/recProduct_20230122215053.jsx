import classes from "./recommendations.module.css";

const RecProduct = ({
  image,
  name,
  countPeople,
  prevPrice,
  newPrice,
  characteristics,
}) => {
  return (
    <div className={classes.recProduct}>
      <img src={image} alt="product_image" />
      <div className={classes.description}></div>
    </div>
  );
};

export default RecProduct;
