import {
  Box,
  BoxProps,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import routes from "./routes";
import NextLink from "next/link";

function HomeHero() {
  const arrowStyles: BoxProps = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    transform: "translateY(-50%)",
    py: "6px",
    px: "12px",
    color: "white",
    fontWeight: "bold",
    fontSize: "24px",
    transition: "0.6s ease",
    borderRadius: 4,
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "brand.300",
    },
  };
  const slides = [
    {
      img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      label: "Production of Intricate Industrial Parts",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      label: "Second Slide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      label: "Third Slide",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      label: "Fourth Slide",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      label: "Fifth Slide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide: number) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  // useEffect(() => {
  //   const autoplay = setInterval(
  //     () => setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1)),
  //     5000
  //   );

  //   return () => {
  //     clearInterval(autoplay);
  //   };
  // }, [slidesCount]);

  return (
    <Box
      as={"section"}
      textAlign={"center"}
      bg={"linear-gradient(180deg, #DDE3F0 0%, rgba(193, 211, 255, 0.38) 100%)"}
      px={"1rem"}
      py={{ base: "2rem", md: "2.875rem", lg: "3.5rem" }}
      pos={"relative"}
    >
      <Text as={"h1"} mb={8} fontWeight={"extrabold"}>
        EMMA-TOB Technologies Ltd.
      </Text>
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex
          h={{ base: "28rem", md: "30rem", lg: "37rem" }}
          w="full"
          {...carouselStyle}
        >
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
                borderRadius={12}
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
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
      </Flex>
      <HStack justify="center" mt={6} w="full">
        {Array.from({
          length: slidesCount,
        }).map((_, slide) => (
          <Box
            key={`dots-${slide}`}
            cursor="pointer"
            boxSize={["12px", null, "16px"]}
            m="0 2px"
            bg={currentSlide === slide ? "brand.500" : "gray.300"}
            rounded="50%"
            display="inline-block"
            transition="background-color 0.6s ease"
            _hover={{
              bg: "brand.500",
            }}
            onClick={() => setSlide(slide)}
          ></Box>
        ))}
      </HStack>
    </Box>
  );
}

export default HomeHero;
