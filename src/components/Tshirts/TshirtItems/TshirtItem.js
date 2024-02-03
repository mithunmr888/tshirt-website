import classes from "./TshirtItem.module.css";
import TshirtForm from "./TshirtForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const TshirtItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (item) => {
    cartCtx.addItem(item);
  };

  return (
    <li className={classes.meal}>
      <div>
      <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>₹{props.price}</div>
      </div>
      <div>
        <TshirtForm
          onAddToCart={addToCartHandler}
          id={props.id}
          name={props.name}
          price={props.price}
          small={props.small}
          medium={props.medium}
          large={props.large}
        />
      </div>
    </li>
  );
};

export default TshirtItem;
