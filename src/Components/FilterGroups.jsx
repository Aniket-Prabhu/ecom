import React from 'react';
import { Menu, MenuItem, MenuButton, MenuList, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  ProductListContext,
  ProductListContextCopy,
} from '../pages/HomePage';

function FilterGroups() {
  const { searchProduct, setSearchProduct } =
    React.useContext(ProductListContext);
  const { searchCProductCopy, setSearchProductCopy } = React.useContext(
    ProductListContextCopy
  );
  // console.log('XXX', searchCProductCopy);

  const handleSortByPrice = order => {
    // Copy the products array to avoid mutating the original data
    const sortedProducts = [...searchProduct];

    // console.log("Clicked", searchCProductCopy, sortedProducts);

    // Sort the products based on the price
    sortedProducts.sort((a, b) => {
      const priceA = parseInt(a.price);
      const priceB = parseInt(b.price);

      if (order === 'asc') {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

    // Update the results using the prop function
    setSearchProduct(sortedProducts);
  };

  return (
    <Menu padding="10px">
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        marginTop="10px"
        width="100px"
      >
        Price
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleSortByPrice('desc')}>
          High to Low
        </MenuItem>
        <MenuItem onClick={() => handleSortByPrice('asc')}>
          Low to High
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default FilterGroups;
