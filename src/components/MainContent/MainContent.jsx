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
import DesktopMainRight from "./DesktopMainRight/DesktopMainRight";

export default function MainContent() {
  return (
    <>
      <Stack
        direction={{ base: "column", md: "row" }}
        height={{ base: "calc(100vh - 90px)", md: "50vh" }}
        bg={"white"}
        gap={0}
        justifyContent={"space-around"}
      >
        <Stack
          width={{ base: "100%", md: "50%" }}
          height={{ base: "50%", md: "80%" }}
          bg={"rgb(74, 94, 87)"}
          alignItems={"flex-end"}
        >
          <CallToAction />
        </Stack>
        <DesktopMainRight />
      </Stack>
      
    </>
  );
}
