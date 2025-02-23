import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import PizzaList from "./Components/PizzaList";
import CartPage from "./Components/Cart";
import Footer from "./Components/footer";

const App = () => {
  const [cart, setCart] = useState([]);

  // Add to Cart
  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  // Remove from Cart
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="bg-gray-950 min-h-screen text-white">
        <Navbar cartCount={cart.length} />
        <div className="max-w-5xl mx-auto p-5">
          <Routes>
            <Route path="/" element={<PizzaList addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
