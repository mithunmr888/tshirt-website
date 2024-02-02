import classes from "./Summary.module.css";

const Summary = (props) => {
  return (
    <>
      <section className={classes.summary}>
        <h1>The Minchs T-Shirt Company</h1>
        <p>
          The perfect T-shirt makes you look and feel great for any occasion.
          Even if you're just mowing the lawn, you'll be more comfortable in
          organic cotton, which is not only super soft, but helps your body
          maintain a comfortable temperature all year round. High quality
          doesn't always mean fragile.
        </p>
      </section>
      <div className={classes.tagline}>
        <h1>Forge  Your  Legacy : Unleash  the  Beast  in  Every  Stitch!</h1>
      </div>
    </>
  );
};

export default Summary;
