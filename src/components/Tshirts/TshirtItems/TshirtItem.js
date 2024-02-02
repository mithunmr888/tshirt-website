import classes from "./TshirtItem.module.css";
import TshirtForm from "./TshirtForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const TshirtItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount, quantity) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      small: props.small,
      medium: props.medium,
      large: props.large,
      quantity: quantity,
    });
    console.log(cartCtx.items);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>₹{props.price}</div>
      </div>
      <div>
        <TshirtForm
          onAddToCart={addToCartHandler}
          small={props.small}
          medium={props.medium}
          large={props.large}
        ></TshirtForm>
      </div>
    </li>
  );
};

export default TshirtItem;
