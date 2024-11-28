import React from "react";
import { HStack, Box, Image } from "@chakra-ui/react";
import MobileMenu from "../MobileMenu/MobileMenu";
import NavLinks from "../NavLinks/NavLinks";
import imgUrl from "../../assests/Logo.png";
function Header() {
  return (
    <Box as="header" boxShadow={"md"} p={4} height={"90px"}>
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
        <NavLinks />
      </HStack>
    </Box>
  );
}

export default Header;
