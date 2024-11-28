import { FaHamburger } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { Button } from "../ui/button";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import NavLinks from "../NavLinks/NavLinks";
import { useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IconButton variant={"ghost"} aria-label="Open Menu" size={"2xl"}>
          <FaHamburger />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader padding={8} borderBottom={"1px solid #e2e8f0"} fontSize={"2xl"} fontWeight={"bold"}>
          <DrawerTitle>Little Lemon</DrawerTitle>
        </DrawerHeader>
        <DrawerBody _hover={{boxShadow:"sm"}}>
          <NavLinks inDrawer={true} />
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerActionTrigger>
          <Button>Save</Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default MobileMenu;
