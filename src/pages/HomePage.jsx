import React, { createContext, useState } from "react";
import { Container, Flex, HStack, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import FilterGroups from "../components/FilterGroups";
import ColorFilter from "../components/ColorFilter";
import FilterCard from "../components/FilterCard";
export const ProductListContext = createContext();
export const ProductListContextCopy = createContext();

function HomePage() {
  const [searchProduct, setSearchProduct] = React.useState([]);
  const [searchCProductCopy, setSearchProductCopy] = React.useState([]);
  // let majorProductList = [];

  const [cart, setCart] = useState([]);
  // console.log(cart);

  const addToCart = (data) => {
    // console.log("add to cart==>>", data)
    data.inCart = true;
    
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const removeFromCart = (data) => {
    // console.log("remove from cart==>>", data)
    searchCProductCopy.map((item) => {
      if (data.title == item.title) item.inCart = false;
    });
    const temp = cart.filter((obj) => obj.title !== data.title);
    // console.log("removed", temp)
    setCart(temp);
  };

  return (
    <ProductListContext.Provider
      value={{
        searchProduct,
        setSearchProduct,
        cart,
        removeFromCart,
        addToCart,
        setCart
      }}
    >
      <ProductListContextCopy.Provider
        value={{ searchCProductCopy, setSearchProductCopy }}
      >
        <Navbar />
        {/* <HStack align="center">
          <Text>Filter By:</Text>
          <FilterGroups />
          <ColorFilter />
        </HStack> */}
        <Container maxW="100vw" padding="10px">
          <Flex>
            <FilterCard />
            <ProductList />
          </Flex>
        </Container>
      </ProductListContextCopy.Provider>
    </ProductListContext.Provider>
  );
}

export default HomePage;
