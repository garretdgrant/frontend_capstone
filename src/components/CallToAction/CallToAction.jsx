import {
  Grid,
  GridItem,
  Image,
  Button,
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";

export const CallToAction = () => {
  return (
    <>
      <Stack
        direction={"column"}
        width={"80%"}
        height={"80%"}
        bg={""}
        justifyContent={"space-between"} // Center content vertically
        alignItems={"flex-start"} // Center content horizontally
        fontFamily={"roboto"}
        color={"white"}
      >
        <Box minWidth={"250px"}>
          <Text
            color={"rgb(245, 208, 22)"}
            fontWeight={"bolder"}
            fontSize={"4xl"}
          >
            Little Lemon
          </Text>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Placerville, California
          </Text>
        </Box>
        <Text
          width={"300px"}
          minWidth={"280px"}
          maxWidth={"350px"}
          fontSize={"xl"}
        >
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </Text>
        <Button
          bg="rgb(245, 208, 22)"
          color="black"
          borderRadius="100px"
          minWidth="150px"
          marginTop="1.5em"
          fontSize="xl"
          transition="all 0.3s ease"
          _hover={{
            bg: "rgb(230, 190, 20)", // Slightly darker shade for hover
            boxShadow: "2xl", // Enhanced shadow effect
            transform: "translateY(-3px)", // Lift effect
          }}
          _active={{
            transition: "none",
            bg: "rgb(215, 172, 18)", // Even darker shade for active
            transform: "translateY(0)", // Reset lift
            boxShadow: "lg", // Reduced shadow for active press
            outline: "2px solid rgba(245, 208, 22, 0.5)", // Focus ring
            outlineOffset: "2px",
          }}
        >
          Reserve a Table
        </Button>
      </Stack>
    </>
  );
};
