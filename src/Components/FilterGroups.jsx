import React from "react";
import { Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ProductListContext, ProductListContextCopy } from "../pages/HomePage";

function FilterGroups() {
  // console.log("Inside Filter Groups");
  const { searchProduct, setSearchProduct } =
    React.useContext(ProductListContext);
  const { searchCProductCopy, setSearchProductCopy } = React.useContext(
    ProductListContextCopy
  );
  // console.log('XXX', searchCProductCopy);

  const handleSortByPrice = (order) => {
    // Copy the products array to avoid mutating the original data
    const sortedProducts = [...searchProduct];

    // console.log("Clicked", searchCProductCopy, sortedProducts);

    // Sort the products based on the price
    sortedProducts.sort((a, b) => {
      const priceA = parseInt(a.price);
      const priceB = parseInt(b.price);

      if (order === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

    // Update the results using the prop function
    setSearchProduct(sortedProducts);
  };

  return (
    <>
      <Text
        as="button"
        display="block"
        padding="5px"
        className="priceFilter"
        onClick={() => handleSortByPrice("desc")}
      >
        High to Low
      </Text>
      <Text
        as="button"
        display="block"
        padding="5px"
        className="priceFilter"
        onClick={() => handleSortByPrice("asc")}
      >
        Low to High
      </Text>
    </>
  );
}

export default FilterGroups;
