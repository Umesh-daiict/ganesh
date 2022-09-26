import React, { useCallback, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from './components/Layout/Header'
import Meals from "./components/Meals/Meals";
function App() {
  const [openCart,setOpenCart]=useState(false);
  const showCartHandler = () => {
    setOpenCart(true);
  };
  const closeCartHandler = () => {
    setOpenCart(false);
  }
  return (
    <React.Fragment>
      {openCart && <Cart onCloseCart={closeCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </React.Fragment>
    );
}

export default App;
