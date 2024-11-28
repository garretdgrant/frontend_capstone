import { Stack, Text, StackSeparator } from "@chakra-ui/react";
const NavLinks = ({inDrawer}) => {
  const navLinks = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Order Online",
    "Login",
  ];
  return (
    <Stack
      separator={<StackSeparator />}
      fontWeight={{ base: "normal", md: "bold" }}
      gap={inDrawer ? 1 :{ md: 1, lg: 3 }}
      display={ inDrawer ? "flex" : {  base: "none", sm: "none", md: "flex", lg: "flex" }}
      direction={{base:"column",sm:"column",md:"row"}}
    >
      {navLinks.map((link) => (
        <Text
          key={link}
          color="black"
          cursor="pointer"
          _hover={{ color: "green.700", boxShadow: "2xl" }}
          padding={inDrawer ? 4 : 2}
          borderRadius={"md"}
          borderBottom={link === "Home" ? "2px solid green" : "none"}
        >
          {link}
        </Text>
      ))}
    </Stack>
  );
};

export default NavLinks;
