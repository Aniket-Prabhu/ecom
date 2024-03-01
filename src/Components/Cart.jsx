import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";
import { useContext } from "react";
import { ProductListContext } from "../pages/HomePage";
import { useEffect } from "react";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";

export default function Cart() {
  let { cart, removeFromCart } = useContext(ProductListContext); //it will return context object which is set by the provider

  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <Card>
      <CardHeader>
        <Flex p="10px" mb={"10px"} justify={"space-between"}>
          <Text as={"h1"} fontWeight="bold">Your Bag</Text>
          <Text>{CART.length} Items</Text>
        </Flex>
      </CardHeader>

      <SimpleGrid p="10px" spacing={10} minChildWidth="250px" >
        <CardBody  >
          {CART?.map((cartItem, cartIndex) => (
            <>
              <HStack justify={"space-between"} p={"10px"}>
                <Image
                  boxSize={"150px"}
                  objectFit="contain"
                  // objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={cartItem.images}
                  alt="Caffe Latte"
                />
                <VStack textAlign={"left"}>
                  <Text as="h1" textAlign={"left"}>{cartItem.title}</Text>
                  <Text as="h3" textAlign={"left"}>{cartItem.seller}</Text>
                  <Text as="h6" textAlign={"left"}>{cartItem.category}</Text>
                </VStack>
                <Spacer />
                <VStack>
                  <Button  onClick={()=> removeFromCart(cartItem)} leftIcon={<CloseIcon /> }  variant={"ghost"}></Button>
                  <Box>
                    <Flex>
                      <Button
                        disabled={cartItem.quantity > 1 ? false : true}
                        onClick={() => {
                          const CarT = CART.map((item, Index) => {
                            return cartIndex === Index
                              ? {
                                  ...item,
                                  quantity:
                                    item.quantity > 0 ? item.quantity - 1 : 0,
                                }
                              : item;
                          });
                          setCART(CarT);
                        }} size={"xl"}  variant={"ghost"}
                      >
                        -
                      </Button>
                      <span>{cartItem.quantity}</span>
                      <Button
                        onClick={() => {
                          const CarT = CART.map((item, Index) => {
                            return cartIndex === Index
                              ? { ...item, quantity: item.quantity + 1 }
                              : item;
                          });
                          setCART(CarT);
                        }}
                       size={"xs"}  variant={"ghost"}>
                        +
                      </Button>
                    </Flex>
                  </Box>
                  <Text>{cartItem.price * cartItem.quantity}</Text>
                </VStack>
              </HStack>
              <Text>Expected delivery: Tuesday, 16 Jan - Friday, 19th Jan</Text>
            </>
          ))}
          {/* <HStack justify={"space-between"}p={"10px"}>
            <Image
              boxSize={"150px"}
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />
            <VStack textAlign={"start"}>  
              <Text as="h1">Laptop</Text>
              <Text as="h3">Apple India ltd.</Text>
              <Text as="h6">Space Grey </Text>
            </VStack>
            <Spacer/>
            <VStack>
              <Button leftIcon={<CloseIcon />}></Button>
              <Box>
                <Flex>
                  <Button>-</Button>
                  <span>5</span>
                  <Button>+</Button>
                </Flex>
              </Box>
              <Text>$550</Text>
            </VStack>
          </HStack>
          <Text>Expected delivery: Tuesday, 16 Jan - Friday, 19th Jan</Text> */}
          {/* <HStack justify={"space-between"} p={"10px"}>
            <Image
              boxSize={"150px"}
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />
            <VStack textAlign={"start"}>  
              <Text as="h1">Laptop</Text>
              <Text as="h3">Apple India ltd.</Text>
              <Text as="h6">Space Grey </Text>
            </VStack>
            <Spacer/>
            <VStack>
              <Button leftIcon={<CloseIcon />}></Button>
              <Box>
                <Flex>
                  <Button>-</Button>
                  <span>5</span>
                  <Button>+</Button>
                </Flex>
              </Box>
              <Text>$550</Text>
            </VStack>
          </HStack>
          <Text>Expected delivery: Tuesday, 16 Jan - Friday, 19th Jan</Text> */}
        </CardBody>
      </SimpleGrid>

      <Flex p="10px" mb={"10px"}>
        <VStack>
          <p>Final Taxes calculated at checkout</p>
          <Text>Estimated total</Text>
          
        </VStack>
        <Spacer />
        <VStack mb={"20px"} >
          <Text>Free</Text>
          <Text>Rs {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}/-</Text>
        </VStack>
      </Flex>

      <Button bg={"black"} color={"white"} justify="stretch"p={"5px"}>
        CheckOut
      </Button>
    </Card>
  );
}
