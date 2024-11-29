import { IoMdGitPullRequest } from "react-icons/io";
import SpecialCard from "./SpecialCard/SpecialCard";
import { Stack, Image } from "@chakra-ui/react";
import imgGreekSalad from "../../assests/images/greeksalad.jpg";
import imgBruschetta from "../../assests/images/bruschetta.jpg";
import imgLemonFish from "../../assests/images/grilledlemonfish.jpg";

const SpecialsContent = () => {
  const specialsData = [
    {
      title: "Greek salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: "$12.99",
      imgUrl: imgGreekSalad,
    },
    {
      title: "Bruschetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: "$5.99",
      imgUrl: imgBruschetta,
    },
    {
      title: "Grilled Lemon Fish",
      description:
        "This is a special dish that we offer that you can only get at our restaurant. The fish is grilled and served with a side of grilled vegetables.",
      price: "$19.00",
      imgUrl: imgLemonFish,
    },
  ];
  return (
    <>
      <Stack
        direction={{ base: "column", md: "row" }}
        gap={8}
        padding={5}
        width={"90%"}
        justifyContent={"space-around"}
        marginTop={{ base: "-300px", md: "0" }}
      >
        {specialsData.map(({ title, description, price, imgUrl }) => (
          <SpecialCard
            key={title}
            title={title}
            description={description}
            price={price}
            imgUrl={imgUrl}
          />
        ))}
      </Stack>
    </>
  );
};

export default SpecialsContent;
