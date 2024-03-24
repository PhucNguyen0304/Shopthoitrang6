// App.jsx

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import Home from "./pages/home";
import Cart from "./pages/cart";


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Pass addToCart function and cartItems to Home component */}
          <Route
            path="/"
            element={<Home addToCart={addToCart} cartItems={cartItems} />}
          />
          {/* Pass cartItems to Cart component */}
          <Route
            path="cart"
            element={<Cart cartItems={cartItems} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



