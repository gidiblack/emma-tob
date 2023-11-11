import React from "react";
import OptimizedImage from "@/components/OptimizedImage";
import PageSection from "@/components/PageSection";
import HeroImg from "@/assets/products-bg.png";
import { Box, Text, Flex, Stack, SimpleGrid, Link } from "@chakra-ui/react";
import Punches from "@/assets/640-ball-bearing-stainless-metal-roller-for-machine-industrial-angular-contact-isolated-on-white-background.jpg";
import Wheels from "@/assets/metal-preparations-are-ready-following-stage-processing.jpg";
import Knives from "@/assets/high-angle-medical-scalpel-blades.jpg";
import DieCast from "@/assets/close-up-metalworking-machine.jpg";
import Gears from "@/assets/gears-table.jpg";
import ToolCabinet from "@/assets/view-toolbox-machines.jpg";
import CastIron from "@/assets/cast-iron-vs-steel.webp";
import IntricateParts from "@/assets/various-work-tools-worktop.jpg";
import NextLink from "next/link";
import routes from "@/components/routes";

const productsList = [
  {
    title: "Star Wheels, Rubber Rollers, Polycabonate",
    description: "A brief description of the product and its benefits",
    image: Wheels.src,
  },
  {
    title: "Punches, Dies and Precision Rollers",
    description: "A brief description of the product and its benefits",
    image: Punches.src,
  },
  {
    title: "Industrial knives, Slitters, Guillotine knives, Perforated knives",
    description: "A brief description of the product and its benefits",
    image: Knives.src,
  },
  {
    title: "Die cast, Alloyed aluminum, arm of different shapes",
    description: "A brief description of the product and its benefits",
    image: DieCast.src,
  },
  {
    title: "Gears: Spur gear, Helical gear & different Sprockets",
    description: "A brief description of the product and its benefits",
    image: Gears.src,
  },
  {
    title: "Metalic cabinets, Shelves, Workbenches, Racks & footings",
    description: "A brief description of the product and its benefits",
    image: ToolCabinet.src,
  },
  {
    title: "Cast iron of different shapes and sizes",
    description: "A brief description of the product and its benefits",
    image: CastIron.src,
  },
  {
    title: "Intricate parts",
    description: "A brief description of the product and its benefits",
    image: IntricateParts.src,
  },
];

function Products() {
  return (
    <Box position={"relative"}>
      <Box
        position={"absolute"}
        top={["4rem", null, null, "5rem"]}
        left={"0"}
        w={"full"}
        zIndex={"banner"}
      >
        <Box textAlign={"center"}>
          <Text as={"h1"} mb={[2, null, 3]} fontWeight={"extrabold"}>
            PRODUCTS
          </Text>
          <Text fontSize={[18, null, 20, 21, 22]}>
            We fabricate metals, spare parts for machines
          </Text>
        </Box>
      </Box>
      <OptimizedImage
        src={HeroImg.src}
        placeholder={"blur"}
        blurDataURL={HeroImg.blurDataURL}
        alt={"Emma-Tob Technologies products"}
        w={{ base: "full" }}
        h={{ base: "28rem", md: "32.5rem" }}
        objectFit="cover"
      />
      <PageSection>
        <Stack spacing={[10, null, 12, 16, 20]}>
          {productsList.map(({ title, image, description }, i) => (
            <SimpleGrid
              gap={[8, null, 10, 12, 16]}
              columns={[1, null, 2]}
              key={i}
              w={"full"}
              maxW={"1080px"}
              mx={"auto"}
            >
              <OptimizedImage
                src={image}
                h={{
                  base: "16rem",
                  md: "17.85rem",
                  xl: "20rem",
                  "2xl": "22.5rem",
                }}
                w={"full"}
                borderRadius={"10px"}
                objectFit="cover"
                alt={title}
              />
              <Flex
                flexDirection={"column"}
                h={"full"}
                justify={"center"}
                order={{ md: i === 0 || i % 2 === 0 ? 1 : -1 }}
              >
                <Stack
                  spacing={[3, null, 5, 6, 7, 8]}
                  textAlign={{
                    base: "center",
                    md: i === 0 || i % 2 === 0 ? "left" : "right",
                  }}
                >
                  <Text
                    as={"h3"}
                    fontWeight={"semibold"}
                    fontSize={[20, null, 24, 26, 28]}
                    color={"dark.600"}
                  >
                    {title}{" "}
                  </Text>
                  <Text fontSize={[14, null, 15, 16, 18]} color={"dark.600"}>
                    {description}
                  </Text>
                  <Link
                    as={NextLink}
                    href={`${routes.contactus}#message`}
                    color={"brand.500"}
                    fontStyle={"italic"}
                    fontWeight={"medium"}
                    textDecoration={"underline"}
                    fontSize={[14, null, 15, 16]}
                    _hover={{
                      color: "brand.300",
                    }}
                  >
                    Get a quote
                  </Link>
                </Stack>
              </Flex>
            </SimpleGrid>
          ))}
        </Stack>
      </PageSection>
    </Box>
  );
}

export default Products;
