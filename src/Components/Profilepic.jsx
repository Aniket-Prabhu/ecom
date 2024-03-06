import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

export default function Profilepic() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const openPopover = () => {
    if (!isOpen) {
      onToggle();
    }
  };
  const closePopover = () => {
    if (isOpen) {
      onClose();
    }
  };

  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Popover
        placement="bottom"
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        closeOnBlur={true} // Disable close on blur
      >
        <PopoverTrigger>
          <Avatar
            bg="teal"
            size={"sm"}
            src="https://bit.ly/broken-link"
            onMouseOver={openPopover}
            onMouseLeave={closePopover}
          />
        </PopoverTrigger>
        <PopoverContent maxWidth="200px">
          <PopoverHeader fontWeight="semibold">
            {userData.firstName} {userData.lastName}
          </PopoverHeader>
          {/* <PopoverBody>Jr Software Engineer</PopoverBody> */}
        </PopoverContent>
      </Popover>
    </>
  );
}
