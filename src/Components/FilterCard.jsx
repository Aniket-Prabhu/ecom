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
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import FilterGroups from "./FilterGroups";
import ColorFilter from "./ColorFilter";

function FilterCard() {
  return (
    // <>
    //   <Box
    //     maxHeight="200px"
    //     width="400px"
    //     background="white"
    //     display="flex"
    //     justifyContent="center"
    //     boxShadow="base"
    //     margin="10px 50px 50px 20px"
    //   >
    //     <VStack>
    //       <Box>
    //         <Heading size="md" padding="10px">
    //           Filter
    //         </Heading>
    //       </Box>
    //       <Box>
    //         <Accordion
    //           borderTop="15px"
    //           borderBottom="15px"
    //           maxWidth="100%"
    //           allowMultiple
    //         >
    //           <AccordionItem>
    //             <h2>
    //               <AccordionButton className="filterTags">
    //                 <Box as="span" flex="1" textAlign="left">
    //                   Price
    //                 </Box>
    //                 <AccordionIcon />
    //               </AccordionButton>
    //             </h2>
    //             <AccordionPanel pb={4}>
    //               <FilterGroups></FilterGroups>
    //             </AccordionPanel>
    //           </AccordionItem>
    //           <AccordionItem>
    //             <h2>
    //               <AccordionButton>
    //                 <Box as="span" flex="1" textAlign="left">
    //                   Colour
    //                 </Box>
    //                 <AccordionIcon />
    //               </AccordionButton>
    //             </h2>
    //             <AccordionPanel pb={4}>
    //               <ColorFilter></ColorFilter>
    //             </AccordionPanel>
    //           </AccordionItem>
    //         </Accordion>
    //       </Box>
    //     </VStack>
    //   </Box>
    // </>

    <Card
      display="flex"
      flexDirection="column"
      align="center"
      height="fit-content"
      minWidth="150px"
      margin="10px 30px 50px 20px"
    >
      <CardHeader>
        <Heading size="md" alignItems="">
          Filter
        </Heading>
      </CardHeader>
      <CardBody p="0" pb="10px" width="100%">
        <Accordion
          // borderColor="#d3d3d3"
          // borderTop="15px"
          // borderBottom="15px"
          // maxWidth="100%"
          allowMultiple
        >
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ color: "red" }}>
                <Box as="span" flex="1" textAlign="left">
                  Price
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <FilterGroups></FilterGroups>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ color: "red" }}>
                <Box as="span" flex="1" textAlign="left">
                  Colour
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ColorFilter></ColorFilter>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
}

export default FilterCard;
