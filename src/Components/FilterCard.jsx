import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FilterGroups from "./FilterGroups";
import ColorFilter from "./ColorFilter";

function FilterCard() {
  return (
    <Card
      align="center"
      maxHeight="500px"
      w="400px"
      margin="10px 50px 50px 20px"
    >
      <CardHeader>
        <Heading size="md"> Filter</Heading>
      </CardHeader>
      <CardBody padding="0px">
        <Accordion borderTop="20px" borderBottom="20px" allowMultiple>
          <AccordionItem >
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Price
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}></AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
}

export default FilterCard;
