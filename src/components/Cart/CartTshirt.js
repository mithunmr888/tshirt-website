import classes from "./CartTshirt.module.css";

const CartTshirt = (props) => {
  const quantity = `SIZE: S${props.smallQuantity}  -  M${props.mediumQuantity}  -  L${props.largeQuantity}`;
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>₹{props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>

          <span className={classes.quantity}>{quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartTshirt;
