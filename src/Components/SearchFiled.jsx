import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Stack, InputGroup, Input, InputRightElement } from "@chakra-ui/react";

function SearchFiled({
  handleFocus,
  setSearchProduct,
  searchCProductCopy,
  handleBlur,
}) {
  const inputRef = React.useRef(null);

  function filterSearch(value) {
    // console.log(value);
    if (value === "") {
      setSearchProduct([]);
    }

    const res = searchCProductCopy.filter((item) => {
      return (
        value &&
        item &&
        item.title &&
        item.title.toLowerCase().includes(value.toLowerCase())
      );
    });
    if (res.length !== 0) {
      setSearchProduct(res);
    } else {
      setSearchProduct(searchCProductCopy);
    }
  }

  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputRightElement pointerEvents="none">
          <SearchIcon color="gray.500" />
        </InputRightElement>

        <Input
          id="searchBox"
          ref={inputRef}
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            filterSearch(e.target.value);
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </InputGroup>
    </Stack>
  );
}

export default SearchFiled;
