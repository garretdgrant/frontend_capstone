import React from "react";
import {
  HStack,
  Text,
  Box,
  Image,
  StackSeparator,
} from "@chakra-ui/react";
import MobileMenu from "../Drawer/MobileMenu"
import imgUrl from "../../assests/Logo.png";
function Header() {
  return (
    <Box as="header" bg={{ base: "rgb(52, 200, 235)" }} p={4}>
      <HStack justify="space-between" align="center">
        <Image
          src={imgUrl}
          alt="My Website Logo"
          cursor={"pointer"}
          width={"200px"}
        />
        <HStack display={{ base: "flex", md: "none" }} fontWeight={"bold"}>
          <MobileMenu />
        </HStack>
        <HStack
          separator={<StackSeparator />}
          fontWeight={{ base: "normal", md: "bold" }}
          gap={{ md: 2, lg: 4 }}
          display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
        >
          <Text color="black" cursor="pointer">
            Home
          </Text>
          <Text color="black" cursor="pointer">
            About
          </Text>
          <Text color="black" cursor="pointer">
            Menu
          </Text>
          <Text color="black" cursor="pointer">
            Reservations
          </Text>
          <Text color="black" cursor="pointer">
            Order Online
          </Text>
          <Text color="black" cursor="pointer">
            Login
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
}

export default Header;
