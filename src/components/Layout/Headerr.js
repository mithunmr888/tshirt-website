import classes from "./Headerr.module.css";
import { Fragment } from "react";
import tshirtImage from "../../assets/tshirt.jpg";
import HeaderBtn from "./HeaderBtn";

const Headerr = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div>
          <h1>MINCHS</h1>
          <p>T - Shirts for Men</p>
        </div>

        <HeaderBtn onClickBtn={props.onShowCart}></HeaderBtn>
      </header>

      <div className={classes["main-image"]}>
        <img src={tshirtImage} alt="A man with grey shades!" />
       
      </div>
    </Fragment>
  );
};

export default Headerr;
