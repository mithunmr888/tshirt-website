import classes from "./AvailableTshirts.module.css";
import TshirtItem from "./TshirtItems/TshirtItem";
import Card from "../UI/Card";

const DUMMY_TSHIRTS = [
  {
    id: "m1",
    name: "CHUNKY RIBBED KNITTED BLACK POLO T-SHIRT",
    description:
      "Get this for Rs 959 Use Code: SLAY Flat 20% off on minimum order value of Rs. 2499",
    price: 1499,
    small: 55,
    medium: 85,
    large: 95,
  },
  {
    id: "m2",
    name: "STRILINE KNIT NAVY POLO T-SHIRT",
    description:
      "Get this for Rs. 959 Use Code: SLAY Flat 20% off on minimum order value of Rs. 2499/-",
    price: 1199,
    small: 59,
    medium: 7,
    large: 10,
  },
  {
    id: "m3",
    name: "TRILINE KNIT GREY POLO T-SHIRT",
    description:
      "Get this for Rs. 959 Use Code: SLAY Flat 20% off on minimum order value of Rs. 2499/-",
    price: 1199,
    small: 20,
    medium: 55,
    large: 10,
  },
  {
    id: "m4",
    name: "TRILINE KNIT CREAM POLO T-SHIRT",
    description:
      "Get this for Rs. 959 Use Code: SLAY Flat 20% off on minimum order value of Rs. 2499/-",
    price: 1299,
    small: 48,
    medium: 59,
    large: 15,
  },
  {
    id: "m5",
    name: "TRILINE KNIT BLACK POLO T-SHIRT",
    description:
      "Get this for Rs. 959 Use Code: SLAY Flat 20% off on minimum order value of Rs. 2499/-",
    price: 1499,
    small: 89,
    medium: 10,
    large: 97,
  },
  {
    id: "m6",
    name: "QUAD ZIG MINT GREEN POLO T-SHIRT",
    description:
      "Get this for Rs. 959 Use Code: SLAY Flat 20% off on minimum order value of Rs. 2499/-",
    price: 1999,
    small: 5,
    medium: 3,
    large: 1,
  },
];

const AvailableTshirts = (props) => {
  const tshirtList = DUMMY_TSHIRTS.map((tshirt) => (
    <TshirtItem
      key={tshirt.id}
      id={tshirt.id}
      name={tshirt.name}
      description={tshirt.description}
      price={tshirt.price}
      large={tshirt.large}
      small={tshirt.small}
      medium={tshirt.medium}
    ></TshirtItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{tshirtList}</ul>
      </Card>
    </section>
  );
};

export default AvailableTshirts;
