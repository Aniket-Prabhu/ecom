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
        closeOnBlur={false} // Disable close on blur
      >
        <PopoverTrigger>
          <Avatar
            size={"sm"}
            src={
              "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
            onMouseOver={openPopover}
            onMouseLeave={closePopover}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">
            {userData.firstName} {userData.lastName}
          </PopoverHeader>
          <PopoverBody>Jr Software Engineer</PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
