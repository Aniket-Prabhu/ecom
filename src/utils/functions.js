import { Text } from '@chakra-ui/react';
import axios from 'axios';

export function searchData() {
  console.log('in the searchData function');
}
export async function getProducts() {
  let products = await axios.get(
    'https://hemangbhagat.github.io/product_api/product.json'
  );
  return products;
}
export function displaySearchSuggText(results) {
  let tmp = results.map((prod, id) => {
    console.log('product Title: ' + prod.title);
    return <Text key={id}>{prod.title}</Text>;
  });
  return tmp;
}
