import React from "react";
import OptimizedImage from "@/components/OptimizedImage";
import PageSection from "@/components/PageSection";
import HeroImg from "@/assets/products-bg.png";
import { Box, Text, Stack, SimpleGrid, Link } from "@chakra-ui/react";
import Punches from "@/assets/640-ball-bearing-stainless-metal-roller-for-machine-industrial-angular-contact-isolated-on-white-background.jpg";
import Knives from "@/assets/knives.jpg";
import perforatingKnives from "@/assets/perofrating-knives.jpg";
import DieCast from "@/assets/close-up-metalworking-machine.jpg";
import Gears from "@/assets/gears-table.jpg";
import ToolCabinet from "@/assets/view-toolbox-machines.jpg";
import CastIron from "@/assets/cast-iron-vs-steel.webp";
import punchHead from "@/assets/punch-head(1).jpg";
import punchHead2 from "@/assets/punch-head.jpg";
import dies from "@/assets/dies-(1).jpg";
import dies2 from "@/assets/dies.jpg";
import loadWheel from "@/assets/load-wheel(1).jpg";
import loadWheel2 from "@/assets/load-wheel.jpg";
import castroWheel from "@/assets/castrol-wheel-static.jpg";
import knifeBracket from "@/assets/knife-bracket.jpg";
import heightRoller from "@/assets/height-adjuster-roller.jpg";
import rubberWheel from "@/assets/rubber-wheel.jpg";
import fillCam from "@/assets/fill-cam.jpg";
import scissorKnives from "@/assets/scissors-knives.jpg";
import NextLink from "next/link";
import routes from "@/components/routes";
import Slider from "react-slick";

const productsList = [
  {
    title: "Star Wheels, Rubber Rollers",
    image: [rubberWheel.src],
  },
  {
    title: "Precision Rollers",
    image: [heightRoller.src],
  },
  {
    title: "Polycabonate",
    image: [Punches.src],
  },
  {
    title: "Load Wheel, Castrol Wheel",
    image: [loadWheel.src, loadWheel2.src, castroWheel.src],
  },
  {
    title: "Punches, Dies, Inlay Tablets and Tips",
    image: [punchHead.src, punchHead2.src, dies.src, dies2.src],
  },
  {
    title: "Fill Cams, Cash Cams, Wear Plate",
    image: [fillCam.src],
  },
  {
    title: "Racks",
    image: [Punches.src],
  },
  {
    title:
      "Industrial knives, Slitters, Guillotine knives, Perforated knives, Ceramic Knives",
    image: [Knives.src, perforatingKnives.src, scissorKnives.src],
  },
  {
    title: "Die cast, Alloyed aluminum, arm of different shapes",
    image: [DieCast.src],
  },
  {
    title: "Gears: Spur gear, Helical gear & different Sprockets",
    image: [Gears.src],
  },
  {
    title: "Metalic cabinets, Shelves, Workbenches, Racks & footings",
    image: [ToolCabinet.src],
  },
  {
    title: "Cast iron of different shapes and sizes",
    image: [CastIron.src],
  },
  {
    title: "Intricate parts: Knive Brackets",
    image: [knifeBracket.src],
  },
];

function Products() {
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
          <SimpleGrid
            gap={[10, null, 8, 12, 16]}
            columns={[1, null, 2]}
            w={"full"}
            mx={"auto"}
          >
            {productsList.map(({ title, image }, i) => (
              <Box key={i}>
                <Slider {...settings}>
                  {image.map((img, i) => (
                    <OptimizedImage
                      key={i}
                      src={img}
                      h={{
                        base: "16rem",
                        md: "16.5rem",
                        lg: "17.85rem",
                        xl: "20rem",
                        "2xl": "24rem",
                      }}
                      w={"full"}
                      borderRadius={"10px"}
                      objectFit="cover"
                      alt={title}
                    />
                  ))}
                </Slider>
                <Stack
                  spacing={[3, null, 4, null, 5]}
                  mt={[3, null, 4]}
                  textAlign={{
                    base: "center",
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

                  <Link
                    as={NextLink}
                    href={`${routes.contactus}?subject=${title} order#message`}
                    color={"brand.500"}
                    fontStyle={"italic"}
                    fontWeight={"medium"}
                    textDecoration={"underline"}
                    fontSize={[14, null, 15, 16]}
                    _hover={{
                      color: "brand.300",
                    }}
                  >
                    Place an order
                  </Link>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </PageSection>
    </Box>
  );
}

export default Products;
