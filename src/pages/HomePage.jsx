import React, { createContext, useState } from 'react';
import { Container, HStack, Text } from '@chakra-ui/react';
import Navbar from '../Components/Navbar';
import ProductList from '../Components/ProductList';
import FilterGroups from '../Components/FilterGroups';
import ColorFilter from '../Components/ColorFilter';
export const ProductListContext = createContext();
export const ProductListContextCopy = createContext();

function HomePage() {
  const [searchProduct, setSearchProduct] = React.useState([]);
  const [searchCProductCopy, setSearchProductCopy] = React.useState([]);
  // let majorProductList = [];

  const [cart, setCart] = useState([]);
  console.log(cart);

  const addToCart = (data) => {
    console.log("add to cart==>>", data)
    data.inCart = true
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const removeFromCart = (data)=> {
    console.log("remove from cart==>>", data)
    searchCProductCopy.map((item)=>{
        if(data.title == item.title)
        item.inCart = false
    })
    const temp = cart.filter((obj) => obj.title !== data.title);
    console.log("removed", temp)
    setCart(temp)
  }

  return (
    <ProductListContext.Provider value={{ searchProduct, setSearchProduct  , cart ,removeFromCart , addToCart }}>
      <ProductListContextCopy.Provider
        value={{ searchCProductCopy, setSearchProductCopy }}
      >
        <Navbar />
        <HStack align="center">
          <Text>Filter By:</Text>
          <FilterGroups />
          <ColorFilter />
        </HStack>
        <Container maxW="100vw" padding="10px">
          <ProductList />
        </Container>
      </ProductListContextCopy.Provider>
    </ProductListContext.Provider>
  );
}

export default HomePage;