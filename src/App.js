import React, { useContext } from "react";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Meals from "./components/Meals/Meals";
import { cartContext } from "./store/cart-context";

import Cart from "./components/cart/Cart";

function App() {
  const ctxCart = useContext(cartContext);
  return (
    <div className="App">
      <Header />
      {ctxCart.showCart ? <Cart /> : <Meals />}
      <Footer />
    </div>
  );
}

export default App;
