import React, { useContext } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  HStack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import { MdStars } from "react-icons/md";

import { ProductListContext } from "../pages/HomePage";

function ProductCard({ product }) {
  let { addToCart, removeFromCart } = useContext(ProductListContext);

  return (
    <Card
      marginTop="10px"
      display="flex"
      flexDirection="column"
      maxHeight="800px"
    >
      <CardBody>
        <Box height="250px">
          <Image
            width="100%"
            objectFit="contain"
            src={product.images}
            alt={product.title}
            borderRadius="lg"
            maxH="250px"
          />
        </Box>
        <Stack mt="6" spacing="3" height="200px">
          <Box flex="1 1 150px">
            <Heading size="md">{product.title}</Heading>
            <HStack padding="10px 0 10px 0">
              <MdStars size="1.5rem" color="green" />
              <Text color="green" fontWeight="600" fontSize="1.2rem">
                {product.rating}
              </Text>
            </HStack>
            <Text>{product.description}</Text>
          </Box>

          <Box flex="1 1 auto">
            <Text color="blue.600" fontSize="2xl">
              ${product.price}
            </Text>
          </Box>
        </Stack>
      </CardBody>

      <Divider color="gray.300" />
      <CardFooter>
        <ButtonGroup spacing="5">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          {/* <Button variant="ghost" colorScheme="blue" onClick={()=> addToCart(product)} >
            Add to cart
          </Button> */}
          {product?.inCart == true ? (
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => {
                product.inCart = false;
                removeFromCart(product);
              }}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => {
                product.inCart = true;
                addToCart(product);
              }}
            >
              Add to Cart
            </Button>
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
export default ProductCard;
