"use client";
import React, { useContext, useEffect, useState } from "react";
import Profilepic from "./Profilepic";
import SearchFiled from "./SearchFiled";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { displaySearchSuggText } from "../utils/functions";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  Button,
  Image,
  Avatar,
  AvatarBadge,
  Text,
  theme,
} from "@chakra-ui/react";
import { ProductListContext, ProductListContextCopy } from "../pages/HomePage";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
import Img from "../assets/Persistent_Logo_Horizontal_Default.png";

import CartImg from "../assets/grocery-store.png";

// const Links = ["Mobiles", "Laptop"];

const test = ["abcdefg", "hello", "hemag bhagat"];

const NavLink = (props) => {
  const { children } = props;
  return (
    <Box
      padding="50px"
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function WithAction() {
  const { searchProduct, setSearchProduct, cart } =
    useContext(ProductListContext);
  const { searchCProductCopy, setSearchProductCopy } = useContext(
    ProductListContextCopy
  );

  const {
    isOpen: isIconOpen,
    onOpen: onIconOpen,
    onClose: onIconClose,
  } = useDisclosure();

  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isIconOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isIconOpen ? onIconClose : onIconOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Image src={Img} boxSize={20} objectFit="contain"></Image>

            {/* <HStack
              as={"nav"}
              spacing={6}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack> */}
          </HStack>
          <Box
            width={400}
            id="searchBarWithResults"
            bg="white"
            borderRadius="12px"
            position="relative"
          >
            {/* searchbar */}
            <Box className="searchInput">
              <SearchFiled
                setSearchProduct={setSearchProduct}
                searchCProductCopy={searchCProductCopy}
              ></SearchFiled>
            </Box>

            {/* results */}

            <Box
              className="searchResults"
              position="absolute"
              top="100%"
              left="0"
              right="0"
              zIndex="30"
              background="white"
              maxHeight="150px"
              overflowY="scroll"
              cursor="pointer"
              rounded="md"
              boxShadow="lg"
            >
              {displaySearchSuggText(searchProduct, setSearchProduct)}
            </Box>
          </Box>
          {/* <Flex alignItems="center" justifyContent="flex-end">
            <Avatar
              name="Aniket"
              src={CartImg}
              size={"sm"}
              onClick={onCartOpen}
            >
              <AvatarBadge width={"1.3em"} bg="teal.500">
                <Text fontSize={"xs"} color={"white"}>
                  {cart.length}
                </Text>
              </AvatarBadge>
            </Avatar>
          </Flex> */}
          <Flex alignItems="center" gap="30px">
            {/* <FaShoppingCart onClick={onCartOpen} color="#3182ce" size="1.5rem" ></FaShoppingCart> */}
            <Avatar
              name="Aniket"
              className="cart-btn"
              src={CartImg}
              size={"sm"}
              onClick={onCartOpen}
            >
              <AvatarBadge width={"1.3em"} bg="teal.500">
                <Text fontSize={"xs"} color={"white"}>
                  {cart.length}
                </Text>
              </AvatarBadge>
            </Avatar>

            <Profilepic />
            <Button
              onClick={() => {
                localStorage.removeItem("signedin");
                window.location.href = "/";
              }}
            >
              LOGOUT
            </Button>
          </Flex>
        </Flex>

        {/* {isIconOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>

      <Drawer
        isOpen={isCartOpen}
        placement="right"
        onClose={onCartClose}
        size={"md"}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent overflow="auto">
          <DrawerCloseButton />
          <DrawerHeader bg="gray.200">Cart</DrawerHeader>
          {/* <DrawerContent overflow='auto' > */}
          <Cart />
          {/* </DrawerContent> */}
        </DrawerContent>
      </Drawer>

      {/* <CardDrawer/>  */}
    </>
  );
}
