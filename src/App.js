//import logo from './logo.svg';
import "./App.css";
import Headerr from "./components/Layout/Headerr";
import Tshirt from "./components/Tshirts/Tshirt";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Headerr onShowCart={showCartHandler}></Headerr>
      <main>
        <Tshirt></Tshirt>
      </main>
    </CartProvider>
  );
}

export default App;

