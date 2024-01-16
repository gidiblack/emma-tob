import React from "react";
import { Box, Link, Stack, Text } from "@chakra-ui/react";
import routes from "./routes";
import NextLink from "next/link";
import slide1 from "@/assets/intricate-parts.png";
import slide2 from "@/assets/metallic-factory-machine.jpg";
import slide3 from "@/assets/mechanized-gate.jpg";
import slide4 from "@/assets/man-welding-hero.jpg";
import slide5 from "@/assets/line-improvements.png";
import slide6 from "@/assets/spare-parts.png";
import slide7 from "@/assets/trainee-ogunlade-and-sons.jpg";
import OptimizedImage from "./OptimizedImage";
import Slider from "react-slick";

function HomeHero() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "hero-slider",
  };

  const slides = [
    {
      img: slide1.src,
      blurData: slide1.blurDataURL,
      label: "Production of Intricate Industrial Parts",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: slide2.src,
      blurData: slide2.blurDataURL,
      label: "Precision Engineering",
    },
    {
      img: slide3.src,
      blurData: slide3.blurDataURL,
      label: "Fabrication",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      img: slide4.src,
      blurData: slide4.blurDataURL,
      label: "SIS Welding",
    },
    {
      img: slide5.src,
      blurData: slide5.blurDataURL,
      label: "Line Improvements",
    },
    {
      img: slide6.src,
      blurData: slide6.blurDataURL,
      label: "Industrial spare parts",
    },
    {
      img: slide7.src,
      blurData: slide7.blurDataURL,
      label: "Training and Consultancy",
    },
  ];

  return (
    <Box
      as={"section"}
      textAlign={"center"}
      bg={"linear-gradient(180deg, #DDE3F0 0%, rgba(193, 211, 255, 0.38) 100%)"}
      px={{ base: "1rem", "2xl": "1.5rem", "3xl": "5rem" }}
      py={{ base: "2rem", md: "2.875rem", lg: "3.5rem" }}
      pos={"relative"}
    >
      <Text as={"h1"} fontWeight={"extrabold"}>
        EMMA-TOB Technologies Ltd.
      </Text>
      <Text
        fontSize={[14, null, 15, null, 16]}
        mb={8}
        fontWeight={"medium"}
        color={"red.400"}
      >
        A subsidiary of{" "}
        <Text as={"span"} fontWeight={"bold"} color={"gray.800"}>
          {" "}
          OGUNLADE & SONS
        </Text>
      </Text>
      <Slider {...settings}>
        {slides.map((slide, sid) => (
          <HeroCard slide={slide} key={sid} />
        ))}
      </Slider>
    </Box>
  );
}

const HeroCard = ({
  slide,
}: {
  slide: {
    img: string;
    blurData: string | undefined;
    label: string;
  };
}) => (
  <Box boxSize="full" shadow="md" flex="none" position={"relative"}>
    <OptimizedImage
      src={slide.img}
      alt="carousel image"
      h={{
        base: "28rem",
        md: "30rem",
        lg: "35rem",
        xl: "37.5rem",
        "2xl": "38.5rem",
        "3xl": "45rem",
      }}
      w="full"
      borderRadius={12}
      blurDataURL={slide.blurData}
      placeholder={"blur"}
      className={"cover"}
    />
    <Box
      bg={{
        base: "linear-gradient(180deg, #000 21.25%, rgba(0, 0, 0, 0.00) 24.45%)",
        md: "linear-gradient(195deg, #000 21.75%, rgba(0, 0, 0, 0.00) 30.55%)",
        lg: "linear-gradient(193deg, #000 18.75%, rgba(0, 0, 0, 0.00) 32.65%)",
      }}
      pos="absolute"
      borderRadius={12}
      boxSize={"full"}
      top={0}
    >
      <Stack
        p={[3, 4, 4, 5, 6]}
        bottom="24px"
        textAlign={{ base: "center", md: "right" }}
        w="full"
        spacing={[1, null, 1.5, 2, 3]}
        color="gray.50"
        ml={"auto"}
        maxW={{ md: "18rem", lg: "20.5rem" }}
      >
        <Text
          as={"h3"}
          fontSize={[18, null, 20, 22, 24]}
          fontFamily={"Lato"}
          fontWeight={"semibold"}
        >
          {slide.label}
        </Text>
        <Link
          as={NextLink}
          fontSize={[14, null, 15, 16]}
          fontStyle={"italic"}
          textDecor={"underline"}
          href={routes.services}
          _hover={{
            color: "brand.400",
          }}
        >
          Learn more
        </Link>
      </Stack>
    </Box>
  </Box>
);

export default HomeHero;
