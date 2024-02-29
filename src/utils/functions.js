import { Box, Text, background } from "@chakra-ui/react";
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
const searchHighlight = () => {
  background = "#f2f2f2";
};
export function displaySearchSuggText(searchProduct) {
  let tmp = searchProduct.map((prod, id) => {
    return (
      <Box
        className="searchSuggestion"
        paddingLeft="1rem"
        shadow="2px"
        onClick={() => {
          console.log("you have clicked");
        }}
      >
        <Text key={id}>{prod.title}</Text>
      </Box>
    );
  });
  return tmp;
}
