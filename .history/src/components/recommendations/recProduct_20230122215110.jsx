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
      <div className={classes.description}>
        <p className={classes.name}>{name}</p>
      </div>
    </div>
  );
};

export default RecProduct;
