import React, { useContext } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Container,
  Image,
  Stack,
  HStack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { MdStars } from 'react-icons/md';

import { ProductListContext } from "../pages/HomePage";

function ProductCard({ product }) {

  let { addToCart ,removeFromCart } = useContext(ProductListContext); 


  return (
    <Card marginTop="10px">
      <CardBody>
        <Image
          width="100%"
          objectFit="contain"
          src={product.images}
          alt={product.title}
          borderRadius="lg"
          maxH="250px"
        />

        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title}</Heading>
          <HStack>
            <MdStars size="1.5rem" color="green" />
            <Text color="green" fontWeight="600" fontSize="1.2rem">
              {product.rating}
            </Text>
          </HStack>
          <Text>{product.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${product.price}
          </Text>
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
                  <Button variant="ghost" colorScheme="blue"
                    onClick={() => {
                      product.inCart = false;
                      removeFromCart(product);
                    }}
                  >
                    Remove from Cart
                  </Button>
                ) : (
                  <Button variant="ghost" colorScheme="blue"
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
