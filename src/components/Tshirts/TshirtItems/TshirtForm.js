import classes from "./TshirtForm.module.css";
import { useState, useRef, useContext } from "react";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const TshirtForm = (props) => {
  const cartCtx = useContext(CartContext);
  const smallQuantity = useRef();
  const mediumQuantity = useRef();
  const largeQuantity = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const smallout = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.smallQuantity;
  }, 0);
  const smallremain = `${props.small}` - smallout;

  const mediumout = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.mediumQuantity;
  }, 0);
  const mediumremain = `${props.medium}` - mediumout;

  const largeout = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.largeQuantity;
  }, 0);
  const largeremain = `${props.large}` - largeout;

  const submitHandler = (e) => {
    e.preventDefault();
    let smallQuantityNum = Number(smallQuantity.current.value);
    let mediumQuantityNum = Number(mediumQuantity.current.value);
    let largeQuantityNum = Number(largeQuantity.current.value);

    const enteredAmount =
      smallQuantityNum + mediumQuantityNum + largeQuantityNum;

    if (enteredAmount < 0 || enteredAmount > 8) {
      setAmountIsValid(false);
      return;
    }
    if (enteredAmount > 0) {
      props.onAddToCart(
        enteredAmount,
        smallQuantityNum,
        mediumQuantityNum,
        largeQuantityNum
      );
    }
    console.log(
      enteredAmount,
      smallQuantityNum,
      mediumQuantityNum,
      largeQuantityNum
    );
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={smallQuantity}
          label={`Small (${smallremain})`}
          input={{
            id: "small",
            type: "number",
            min: 0,
            max: 8,
            defaultValue: 0,
          }}
        ></Input>
        <Input
          ref={mediumQuantity}
          label={`Medium (${mediumremain})`}
          input={{
            id: "medium",
            type: "number",
            min: 0,
            max: 8,
            defaultValue: 0,
          }}
        ></Input>
        <Input
          ref={largeQuantity}
          label={`Large (${largeremain})`}
          input={{
            id: "large",
            type: "number",
            min: 0,
            max: 8,
            defaultValue: 0,
          }}
        ></Input>
        <button>+ Add product</button>

        {!amountIsValid && <p>Please enter valid amount (1-8).</p>}
      </form>
    </>
  );
};

export default TshirtForm;
