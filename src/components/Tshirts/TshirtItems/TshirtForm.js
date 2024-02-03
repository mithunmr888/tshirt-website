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
  const currentTshirtId = props.id;

  const smallout = cartCtx.items.reduce((curNumber1, item) => {
    if (item.id === currentTshirtId) {
      return curNumber1 - item.smallQuantity;
    }
    return curNumber1;
  }, props.small);

  const mediumout = cartCtx.items.reduce((curNumber, item) => {
    if (item.id === currentTshirtId) {
      return curNumber + item.mediumQuantity;
    }
    return curNumber;
  }, 0);
  const mediumremain = props.medium - mediumout;

  const largeout = cartCtx.items.reduce((curNumber, item) => {
    if (item.id === currentTshirtId) {
      return curNumber + item.largeQuantity;
    }
    return curNumber;
  }, 0);
  const largeremain = props.large - largeout;

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
    smallQuantity.current.value = 0;
    mediumQuantity.current.value = 0;
    largeQuantity.current.value = 0;
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={smallQuantity}
          label={`Small (${smallout})`}
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

/*const cartCtx = useContext(CartContext);
  const [smallQuantity, setSmallQuantity] = useState(0);
  const [mediumQuantity, setMediumQuantity] = useState(0);
  const [largeQuantity, setLargeQuantity] = useState(0);
  const [amountIsValid, setAmountIsValid] = useState(true);

  const smallremain = props.small - cartCtx.items.reduce((total, item) => total + item.smallQuantity, 0);
  const mediumremain = props.medium - cartCtx.items.reduce((total, item) => total + item.mediumQuantity, 0);
  const largeremain = props.large - cartCtx.items.reduce((total, item) => total + item.largeQuantity, 0);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = smallQuantity + mediumQuantity + largeQuantity;

    if (enteredAmount < 0 || enteredAmount > 8) {
      setAmountIsValid(false);
      return;
    }

    if (enteredAmount > 0) {
      props.onAddToCart(enteredAmount, smallQuantity, mediumQuantity, largeQuantity);
    }

    // Reset quantities after submission
    setSmallQuantity(0);
    setMediumQuantity(0);
    setLargeQuantity(0);

    setAmountIsValid(true); // Reset validation
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          label={`Small (${smallremain})`}
          input={{
            type: "number",
            min: 0,
            max: smallremain,
            value: smallQuantity,
            onChange: (e) => setSmallQuantity(Number(e.target.value)),
          }}
        />
        <Input
          label={`Medium (${mediumremain})`}
          input={{
            type: "number",
            min: 0,
            max: mediumremain,
            value: mediumQuantity,
            onChange: (e) => setMediumQuantity(Number(e.target.value)),
          }}
        />
        <Input
          label={`Large (${largeremain})`}
          input={{
            type: "number",
            min: 0,
            max: largeremain,
            value: largeQuantity,
            onChange: (e) => setLargeQuantity(Number(e.target.value)),
          }}
        />
        <button>+ Add product</button>

        {!amountIsValid && <p>Please enter a valid amount (1-8).</p>}
      </form>
    </>
  ); */
