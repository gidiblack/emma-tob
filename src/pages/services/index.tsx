import React from "react";
import OptimizedImage from "@/components/OptimizedImage";
import PageSection from "@/components/PageSection";
import HeroImg from "@/assets/services-bg.png";
import { Box, Text, Flex, Stack, Link, GridItem, Grid } from "@chakra-ui/react";
import precision from "@/assets/metallic-factory-machine.jpg";
import fabrication from "@/assets/shredding_machine.png";
import gate from "@/assets/mechanized-gate-old.jpg";
import welding from "@/assets/man-welding-hero.jpg";
import tools from "@/assets/mechanic-selecting-work-tool-from-toolbox.jpg";
import azocage from "@/assets/azo-cage.jpg";
import bigBag from "@/assets/big-bag-storage.jpg";
import toolHanger from "@/assets/cleaning-tool-hanger.jpg";
import laminateHanger from "@/assets/mobile-laminate-hanger.jpg";
import conveyor from "@/assets/z-conveyor.jpg";
import spareParts from "@/assets/thegarten-pusher.jpg";
import thegarten from "@/assets/thegarten-pusher-flat.jpg";
import knives from "@/assets/scissors-knives.jpg";
import perforatingKnives from "@/assets/perofrating-knives.jpg";
import training from "@/assets/trainee-ogunlade-and-sons.jpg";
import NextLink from "next/link";
import routes from "@/components/routes";
import Slider from "react-slick";

const productsList = [
  {
    title: "Precision Engineering",
    description:
      "Production of intricate machine spare parts with high level of precision. These spare parts include punches, dies, gears, shafts, cams etc",
    image: [{ img: precision, name: "" }],
  },
  {
    title: "Fabrication",
    description:
      "Our fabrication jobs cover iron and steel structures for both companies and individuals. Others include Motorized gate, Automatic dosing machine, Screw conveyors, gang tray, Modular Conveyors, Belt Conveyors, Roller Conveyors, Shredding machine",
    image: [
      { img: gate, name: "Motorized gate" },
      { img: fabrication, name: "Shredding machine" },
      { img: conveyor, name: "Z-Conveyor" },
    ],
  },
  {
    title: "SIS Welding",
    description:
      "Welding of pipelines, arc welding and argon welding gas services.",
    image: [{ img: welding, name: "" }],
  },
  {
    title: "Tools and Machinery",
    description:
      "Importation/procurement and installation; servicing and overhauling of industrial machines, hardware, equipment and sales of engineering tools and equipment.",
    image: [{ img: tools, name: "" }],
  },
  {
    title: "Line Improvements",
    description:
      "Design and implementation of high-performing technology that enhances production lines and improves efficiency and productivity. These include fabricated equipment like weighing scale hanger, mobile laminate hanger, cleaning tool hangers, AZO cage, Big Bag Storage Stand.",
    image: [
      { img: laminateHanger, name: "Mobile Laminate Hanger" },
      { img: bigBag, name: "Big bag Storage" },
      { img: azocage, name: "AZO Cage" },
      { img: toolHanger, name: "Cleaning tools Hanger" },
    ],
  },
  {
    title: "Industrial spare parts",
    description:
      "Design, production & supply of industrial knives e.g slitters, guillotine & perforated knives, ceramic knives. We also produce gears, sprockets, turret (star wheel), castrol wheel.",
    // image: [spareParts, knives, thegarten, perforatingKnives],
    image: [
      { img: spareParts, name: "Thegarten Pusher" },
      { img: knives, name: "Scissor Knives" },
      { img: thegarten, name: "Thegarten Pusher" },
      { img: perforatingKnives, name: "Perforating Knives" },
    ],
  },
  {
    title: "Emma-tob International Academy",
    description:
      "We offer various types of Training Programmes from basic to advanced levels for various groups - SIWES, NYSC, Industrial staff, apprenticeship, corporate, off-site, and on-site Training along our business areas.",
    line2:
      "Emmatob International Academy has a team of seasoned professionals with a wealth of extensive field and practical experience in the industry. Our training programs leverage this wealth of expertise to enhance your career development. Join us and embark on a journey to elevate your professional growth.",
    image: [{ img: training, name: "" }],
    href: "https://zfrmz.com/kqZR2DWYxHQJt4qtRZVY",
  },
];

function Services() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "product-slider",
  };

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
            We fabricate metals, spare parts and installations of machines
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
        className="cover"
      />
      <PageSection>
        <Stack spacing={[16, null, 20, 24, 28]}>
          {productsList.map(({ title, image, description, href, line2 }, i) => (
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
                <Slider {...settings}>
                  {image.map(({ img, name }, i) => (
                    <Box key={i} position={"relative"}>
                      <OptimizedImage
                        src={img.src}
                        blurDataURL={img.blurDataURL}
                        placeholder="blur"
                        h={{
                          base: "24rem",
                          md: "28rem",
                          xl: "35rem",
                          "2xl": "36.5rem",
                        }}
                        w={"full"}
                        className="cover"
                        alt={title}
                      />
                      {name !== "" && (
                        <Box
                          py={1.5}
                          px={4}
                          borderRadius={4}
                          bgColor={"white"}
                          position={"absolute"}
                          bottom={3}
                          right={3}
                          zIndex={200}
                        >
                          <Text
                            fontFamily={"Lato"}
                            fontSize={14}
                            letterSpacing={"wide"}
                            fontWeight={"bold"}
                          >
                            {name}
                          </Text>
                        </Box>
                      )}
                    </Box>
                  ))}
                </Slider>
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
                    <Box>
                      <Text
                        fontSize={[14, null, 15, 16, 18]}
                        color={"dark.600"}
                      >
                        {description}
                      </Text>
                      {line2 && (
                        <Text
                          fontSize={[14, null, 15, 16, 18]}
                          color={"dark.600"}
                          mt={[2, null, 3]}
                        >
                          {line2}
                        </Text>
                      )}
                    </Box>
                    <Link
                      as={NextLink}
                      href={
                        href
                          ? href
                          : `${routes.contactus}?subject=${title} Quotation#message`
                      }
                      target={href ? "_blank" : undefined}
                      rel={"noreferrer"}
                      color={"brand.500"}
                      fontStyle={"italic"}
                      fontWeight={"medium"}
                      textDecoration={"underline"}
                      fontSize={[14, null, 15, 16]}
                      _hover={{
                        color: "brand.300",
                      }}
                    >
                      {href ? "Enroll now" : "Get a quote"}
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
