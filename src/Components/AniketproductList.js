import React from "react";
import "../App.css";
import { ProductContext } from "../App";
import { useContext } from "react";

export default function ProductList() {
  let { product, addToCart, removeFromCart } = useContext(ProductContext); //it will return context object which is set by the provider
  console.log("product", product);
  return (
    <div className="flex">
      {
        // <h1>Product List</h1>
        product.map((productItem, productIndex) => {
          return (
            <div style={{ width: "50%" }}>
              <div className="productItem">
                {productItem.name}
                <p>{productItem.seller}</p>
                <p>{productItem.price}</p>
                {productItem?.inCart == true ? (
                  <button
                    onClick={() => {
                      productItem.inCart = false;
                      removeFromCart(productItem);
                    }}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      productItem.inCart = true;
                      addToCart(productItem);
                    }}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })
      }
    </div>
  );
}
