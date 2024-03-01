import { Box, Text } from "@chakra-ui/react";
import axios from "axios";

export function searchData() {
  console.log("in the searchData function");
}
export async function getProducts() {
  let products = await axios.get(
    "https://hemangbhagat.github.io/product_api/product.json"
  );
  return products;
}

export function displaySearchSuggText(searchProduct, setSearchProduct) {
  let tmp = searchProduct.map((prod, id) => {
    return (
      <Box
        as="button"
        display="block"
        width="100%"
        textAlign="left"
        className="searchSuggestion"
        paddingLeft="1rem"
        shadow="2px"
        onClick={() => {
          setSearchProduct([prod]);
          document.getElementById("searchBox").value = prod.title;
        }}
      >
        <Text key={id}>{prod.title}</Text>
      </Box>
    );
  });
  return tmp;
}
