import {
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  Box,
  Stack,
} from "@chakra-ui/react";
import { CallToAction } from "../CallToAction/CallToAction";
import DesktopMainRight from "./DesktopMainRight/DesktopMainRight";
import SpecialsContent from "../Specials/SpecialsContent";

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
          minHeight={"300px"}
          bg={"rgb(74, 94, 87)"}
          alignItems={"flex-end"}
        >
          <CallToAction />
        </Stack>
        <DesktopMainRight />
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        height={{ base: "33vh", md: "65vh" }}
        gap={0}
        justifyContent={"space-around"}
      >
        <SpecialsContent />
      </Stack>
    </>
  );
}
