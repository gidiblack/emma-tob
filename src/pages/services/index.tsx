import React from "react";
import OptimizedImage from "@/components/OptimizedImage";
import PageSection from "@/components/PageSection";
import HeroImg from "@/assets/services-bg.png";
import { Box, Text, Flex, Stack, Link, GridItem, Grid } from "@chakra-ui/react";
import precision from "@/assets/metallic-factory-machine.jpg";
import fabrication from "@/assets/different-car-accessories-arrangement.jpg";
import welding from "@/assets/closeup-metal-cog-gears.jpg";
import tools from "@/assets/mechanic-selecting-work-tool-from-toolbox.jpg";
import line from "@/assets/architectural-blueprints.jpg";
import spareParts from "@/assets/spare-parts-car.jpg";
import training from "@/assets/male-apprentice-engineer-working-on.jpg";
import NextLink from "next/link";
import routes from "@/components/routes";

const productsList = [
  {
    title: "Precision Engineering",
    description:
      "Production of intricate machine spare parts with high level of precision. These spare parts include punches, dies, gears, shafts, bushings, etc",
    image: precision.src,
  },
  {
    title: "Fabrication",
    description:
      "This is one of our fabrication projects constructed for one of the multinationals companies. Our fabrication- jobs also cover iron and steel structures for companies and individuals.",
    image: fabrication.src,
  },
  {
    title: "SIS Welding",
    description:
      "Welding of pipelines, arc welding and argon welding gas services.",
    image: welding.src,
  },
  {
    title: "Tools and Machinery",
    description:
      "Importation/procurement and installation; servicing and overhauling of industrial machine, hardware, equipment and sales of tools.",
    image: tools.src,
  },
  {
    title: "Line Improvements",
    description:
      "Design and production of line improvement items to aid productivity of a manufacturing company. These items include weighing scale hanger, mobile laminate hanger.",
    image: line.src,
  },
  {
    title: "Industrial spare parts",
    description:
      "Design, production & supply of industrial knives e.g slitters, guillotine & perforated knives. We also produce gears and sprockets.",
    image: spareParts.src,
  },
  {
    title: "Training and Consultancy",
    description:
      "We offer various types of Training Programmes for various groups - SIWES, NYSC, Industrial staff, apprenticeship, corporate, off-site, and on-site Training along our business areas.",
    image: training.src,
  },
];

function Services() {
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
            SERVICES
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
        alt={"Emma-Tob Technologies services"}
        w={{ base: "full" }}
        h={{ base: "30rem", md: "32.5rem", lg: "37.5rem" }}
        objectFit="cover"
      />
      <PageSection>
        <Stack spacing={[16, null, 20, 24, 28]}>
          {productsList.map(({ title, image, description }, i) => (
            <Grid
              templateColumns={{
                base: "repeat(3, 1fr)",
                md: "repeat(6, 1fr)",
                lg: "repeat(12, 1fr)",
              }}
              columnGap={[6, null, 6, 8]}
              rowGap={[8, null, 12]}
              w={"100%"}
              maxW={"80rem"}
              mx={"auto"}
              key={i}
            >
              <GridItem colSpan={[3, null, 6, 7]}>
                <OptimizedImage
                  src={image}
                  h={{
                    base: "24rem",
                    md: "28rem",
                    xl: "34rem",
                    "2xl": "36.5rem",
                  }}
                  w={"full"}
                  objectFit="cover"
                  alt={title}
                />
              </GridItem>
              <GridItem
                colSpan={[3, null, 6, 5]}
                order={{ lg: i === 0 || i % 2 === 0 ? 1 : -1 }}
              >
                <Flex flexDirection={"column"} h={"full"} justify={"center"}>
                  <Stack
                    spacing={[3, null, 5, 6, 7, 8]}
                    textAlign={{
                      base: "center",
                      lg: i === 0 || i % 2 === 0 ? "left" : "right",
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
              </GridItem>
            </Grid>
          ))}
        </Stack>
      </PageSection>
    </Box>
  );
}

export default Services;
