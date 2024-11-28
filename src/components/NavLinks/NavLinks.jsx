import { Stack, Text, StackSeparator } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

const NavLinks = ({inDrawer}) => {
  const location = useLocation();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Reservations", path: "/reservations" },
    { name: "Order Online", path: "/order-online" },
    { name: "Login", path: "/login" },
  ];
  return (
    <Stack
      separator={<StackSeparator />}
      fontWeight={{ base: "normal", md: "bold" }}
      gap={inDrawer ? 1 :{ md: 1, lg: 3 }}
      display={ inDrawer ? "flex" : {  base: "none", sm: "none", md: "flex", lg: "flex" }}
      direction={{base:"column",sm:"column",md:"row"}}
    >
      {navLinks.map(({name, path}) => {
        const isActive = location.pathname === path;
        return (<Text
          as={NavLink}
          to={path}
          key={name}
          color="black"
          cursor="pointer"
          _hover={{ color: "green.700", boxShadow: "2xl" }}
          padding={inDrawer ? 4 : 2}
          borderRadius={"md"}
          // I do not love this implementation, I would prefer to use the react-router-dom
          // Link component but I enjoy the simplicity of chakra-ui styling.
          borderBottom={isActive === true ? "2px solid green" : "none"}
        >
          {name}
        </Text>)
      })}
    </Stack>
  );
};

export default NavLinks;
