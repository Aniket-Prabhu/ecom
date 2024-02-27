// import logo from './logo.svg';
// import './App.css';
// import Cart from './Components/Cart';
// import CartList from './Components/CartList';
// import ProductList from './Components/productList';
// import { createContext, useState } from 'react';
// import Header from './Components/Header';
// export var ProductContext= createContext()
// function App() {

//   const [product, setProduct] = useState([
//     {
//       name: "White Shoes",
//       category: "shoes",
//       seller: "AMZ seller ghz",
//       price: 1999,
//     },
//     {
//       name: "A/E Watch",
//       category: "watch",
//       seller: "Armani Exchange",
//       price: 6999,
//     },
//     {
//       name: "iphone",
//       category: "Electronics",
//       seller: "Apple India",
//       price: 1999,
//     },
//     {
//       name: "Ideapad Gaming 3i",
//       category: "Laptop",
//       seller: "Lenovo",
//       price: 25000,
//     },
//   ]);

  // const [cart, setCart] = useState([]);
  // const [showCart, setShowCart] = useState();
  // console.log(cart);

  // const addToCart = (data) => {
  //   setCart([...cart, { ...data, quantity: 1 }]);
  // };

  // const removeFromCart = (data)=> {
  //   product.map((item)=>{
  //       if(data.name == item.name)
  //       item.inCart = false
  //   })
  //   const temp = cart.filter((obj) => obj.name !== data.name);
  //   console.log("removed", temp)
  //   setCart(temp)
  // }

//   const handleShow = (value) => {
//     setShowCart(value);
//   };

//   return (
//     <ProductContext.Provider value={{cart,setCart,product,addToCart, removeFromCart}}>
//     <Header count={cart.length} handleShow={handleShow} />

//        {showCart ? (
//         //  <CartList cart={cart} />
//         <Cart />

//        ) : (
//          <ProductList product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
//        )}
//     </ProductContext.Provider>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import { ChakraProvider } from "@chakra-ui/react";
// import LandingPage from "./pages/LandingPage"
// import LoginForm from './pages/Login'

const App = () => {
  const isLoggedIn = localStorage.getItem("signedin");
  
  return (
    <div>
      <Router>
        <Routes>
          {isLoggedIn == "true" && (
            <Route
              path="/landing-page"
              element={
                  <ChakraProvider>
                    <HomePage />
                  </ChakraProvider>

              }
            />
          )}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<SignUp />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
