import React, { useEffect, useState } from "react";
import { useContext } from "react";
// import './App.css';
import { ProductContext } from "../App";

export default function CartList() {
  let { cart , removeFromCart } = useContext(ProductContext); //it will return context object which is set by the provider
  
  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(cart);
  }, [cart]);
  return (
    <div>
      {CART?.map((cartItem, cartIndex) => {
        return (
          <div>
            <p>
              <span>{cartItem.name} </span>
            </p>
            <h4>Rs.{cartItem.price * cartItem.quantity}</h4>
            <button
              disabled={cartItem.quantity > 1 ? false : true}
              onClick={() => {
                const CarT = CART.map((item, Index) => {
                  return cartIndex === Index
                    ? {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                      }
                    : item;
                });
                setCART(CarT);
              }}
            >
              -
            </button>
            <span> {cartItem.quantity} </span>
            <button
              onClick={() => {
                const CarT = CART.map((item, Index) => {
                  return cartIndex === Index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(CarT);
              }}
            >
              +
            </button>
            <button
              onClick={()=> removeFromCart(cartItem)}
            >
              remove from cart
            </button>
            {/* <p></p> */}
          </div>
        );
      })}
      <p>
        Total:
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
      </p>
    </div>
  );
}
