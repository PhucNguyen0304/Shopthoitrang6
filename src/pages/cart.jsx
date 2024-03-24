//cart.jsx

import Footer from "../components/footer/Footer";
import {emptyCart} from "../assets/index";
import { Link } from "react-router-dom";
import './cart.css';

const Cart = ({ cartItems, removeFromCart }) => {

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  return (
    <div className="container">
      <div style={{margin: '0px 0px 50px'}}>
        <h1 style={{ fontWeight: "bold", paddingTop: "70px" }}>Cart</h1>
        <h6>{">"} Cart</h6>
        </div>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index}>
              <h3>Product Information</h3>
              <img src={item.image} alt={item.name} />
              <p>Name: {item.name}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleRemove(index)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <div>
           <div className="row" style={{marginBottom:'100px'}}>
           <div className="col-lg-6" >
            <img
              className="image-style"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="col-lg-6 YourCartfeelslonely">
            <h1 className="text-style">
              Your Cart feels lonely.
            </h1>
            <p className="app-container">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/">
              <button className="background-color">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
        </div>
      )}
      <div className="" >
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
