import {
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  Box,
  Stack,
} from "@chakra-ui/react";
import homePageFoodUrl from "../../assests/images/homepagefood.jpg";
import { CallToAction } from "../CallToAction/CallToAction";

export default function MainContent() {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      height={{ base: "calc(100vh - 90px)", md: "40vh" }}
      bg={"pink"}
      gap={0}
    >
      <Stack
        width={{ base: "100%", md: "50%" }}
        height={{ base: "50%", md: "100%" }}
        bg={"rgb(74, 94, 87)"}
        alignItems={"center"}
      >
        <CallToAction />
      </Stack>
      <Stack
        width={{ base: "100%", md: "50%" }}
        height={{ base: "50%", md: "100%" }}
        bg={"green"}
      ></Stack>
    </Stack>
    // <Grid
    //   templateColumns="repeat(12, 1fr)"
    //   templateRows="repeat(6, 1fr)"
    //   height="30vh"
    //   bg={"white"}
    //   border={"1px solid black"}
    // >
    //   {/* Left  Box taking up 4 rows on the left column*/}
    //   {/* This will be the logif for the text and reserve button */}
    //   <GridItem gridRow={"1/7"} colSpan={6} bg={"green"}>
    //     {/* <Box
    //                 bgImage={homePageFoodUrl}
    //                 bgSize="cover"
    //                 bgPosition="center"
    //                 height="100%"
    //             /> */}
    //   </GridItem>

    //   {/* Right Box taking up all rows on the right column */}
    //   <GridItem
    //     gridRow={"2/7"}
    //     colSpan={6}
    //     justifyItems={"center"}

    //   >
    //     <Image
    //       src={homePageFoodUrl}
    //       alt="My Website Logo"
    //       width={"200px"}
    //       height={"200px"}
    //       borderRadius={"10px"}
    //       boxShadow={"2xl"}
    //     />
    //   </GridItem>
    // </Grid>
  );
}
