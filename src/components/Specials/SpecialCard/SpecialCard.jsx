import {
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  Box,
  Stack,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { TbTruckDelivery } from "react-icons/tb";

const SpecialCard = ({ title, description, price, imgUrl }) => {
  return (
    <>
      <Stack
        direction={"column"}
        height={"80%"}
        width={"100%"}
        maxHeight={"390px"}
        bg={"rgb(217, 217, 217)"}
        padding={0}
        marginTop={2}
        borderRadius={"xl"}
        boxShadow={"2xl"}
      >
        <Image
          src={imgUrl}
          alt={title}
          width={"100%"}
          height={"33%"}
          maxWidth={"100%"}
          maxHeight={"50%"}
          fit={"cover"}
          borderTopRadius={"xl"}
        />
        <Stack
          direction={"column"}
          display={"flex"}
          justifyContent={"space-around"}
          height={"67%"}
          padding={4}
          paddingTop={0}
        >
          <HStack width={"90%"} display={"flex"} justifyContent={"space-between"}>
            <Text fontWeight={"bolder"}>{title}</Text>
            <Text fontWeight={"bold"} color={"black"} alignSelf={"flex-end"}>{price}</Text>
          </HStack>

          <Text>{description}</Text>

          <Text
            fontWeight={"medium"}
            width={"100%"}
            alignSelf={"flex-end"}
            justifySelf={"flex-end"}
            marginTop={"auto"}
          >
            Order Delivery{" "}
            <Icon size={"lg"}>
              <TbTruckDelivery />
            </Icon>
          </Text>
        </Stack>
      </Stack>
    </>
  );
};
export default SpecialCard;
