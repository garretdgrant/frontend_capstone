import {
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  Box,
  Stack,
} from "@chakra-ui/react";
import homePageFoodUrl from "../../../assests/images/homepagefood.jpg";

const DesktopMainRight = () => {
  return (
    <>
      <Stack
        width={{ base: "100%", md: "50%" }}
        height={{ base: "50%", md: "100%" }}
        bg={{ base: "white", md: "rgb(74, 94, 87)" }}
        justifyContent={"flex-start"}
        // display={{ base: "none", md: "flex" }}
      >
        <Grid
          height={"100%"}
          width={"100%"}
          templateColumns={"repeat(12, 1fr)"}
          templateRows={"repeat(5, 1fr)"}
        >
          {/** white space for Desktop view, bottom half for mobile view */}
          <GridItem
            gridRow={{ base: "1/6", md: "5/6" }}
            colSpan={12}
            bg={"white"}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
          >
            <Image
              display={{ base: "block", md: "block" }}
              src={homePageFoodUrl}
              alt="Overlay Image"
              objectFit="cover"
              width={{ base: "300px", md: "300px", lg: "400px", xl: "500px" }} // Define specific size for the image
              height={"325px"}
              position={{ base: "none", md: "absolute" }}
              top={"37%"} // Adjust this to position the image vertically
              left={"75%"} // Adjust this to position the image horizontally
              transform={{ md: "translate(-50%, -50%)" }} // Center image relative to the defined area
              borderRadius={"2xl"}
              boxShadow={"2xl"}
            />
          </GridItem>
        </Grid>
      </Stack>
    </>
  );
};

export default DesktopMainRight;
