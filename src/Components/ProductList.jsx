import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../utils/functions";
import { HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ProductListContext, ProductListContextCopy } from "../pages/HomePage";
function ProductList() {
  const { searchProduct, setSearchProduct } = useContext(ProductListContext);

  const { searchCProductCopy, setSearchProductCopy } = useContext(
    ProductListContextCopy
  );
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    (async function () {
      let result = await getProducts();
      // console.log("result==>>", result.data)
      setResults(result.data);
      setSearchProduct(result.data);
      setSearchProductCopy(result.data);
      console.log("in useEffect xx");
    })();
  }, [setSearchProduct]);

  return results && results.length > 0 ? (
    <Stack>
      <HStack w="100%" alignItems={"center"}>
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          {searchProduct.map((product, id) => {
            return <ProductCard key={id} product={product} />;
          })}
        </SimpleGrid>
      </HStack>
    </Stack>
  ) : (
    <div>Hello World</div>
  );
}

export default ProductList;
