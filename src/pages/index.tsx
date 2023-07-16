import ContactTabs from "@/components/ContactTabs";
import HomeHero from "@/components/HomeHero";
import OptimizedImage from "@/components/OptimizedImage";
import PageSection from "@/components/PageSection";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import Punches from "@/assets/640-ball-bearing-stainless-metal-roller-for-machine-industrial-angular-contact-isolated-on-white-background.jpg";
import Wheels from "@/assets/metal-preparations-are-ready-following-stage-processing.jpg";
import Knives from "@/assets/high-angle-medical-scalpel-blades.jpg";
import DieCast from "@/assets/close-up-metalworking-machine.jpg";
import Gears from "@/assets/gears-table.jpg";
import ToolCabinet from "@/assets/view-toolbox-machines.jpg";
import CastIron from "@/assets/cast-iron-vs-steel.webp";
import IntricateParts from "@/assets/various-work-tools-worktop.jpg";

export default function Home() {
  const products = [
    {
      name: "Punches, Dies and Precision Rollers",
      img: Punches.src,
    },
    {
      name: "Star Wheels, Rubber Rollers, Polycabonate",
      img: Wheels.src,
    },
    {
      name: "Industrial knives, Slitters, Guillotine knives, Perforated knives",
      img: Knives.src,
    },
    {
      name: "Die cast, Alloyed aluminum, arm of different shapes",
      img: DieCast.src,
    },
    {
      name: "Gears: Spur gear, Helical gear & different Sprockets",
      img: Gears.src,
    },
    {
      name: "Metalic cabinets, Shelves, Workbenches, Racks & footings",
      img: ToolCabinet.src,
    },
    {
      name: "Cast iron of different shapes and sizes",
      img: CastIron.src,
    },
    {
      name: "Intricate parts",
      img: IntricateParts.src,
    },
  ];

  return (
    <>
      <HomeHero />
      <PageSection>
        <Text
          maxW={"64rem"}
          mx={"auto"}
          fontSize={[16, null, 18, 20, 22, null, 24]}
          fontWeight={"medium"}
          letterSpacing={1}
          textAlign={{ base: "center", lg: "left" }}
          fontStyle={"italic"}
        >
          Emma-Tob is your trusted partner for designing, fabricating and
          supplying machines including rare and hard-to-find spare parts. With
          our extensive experience and expertise, we help our customers
          significantly reduce their production costs, giving them a competitive
          edge in the market.
        </Text>
      </PageSection>
      <PageSection>
        <Text as={"h2"} textAlign={"center"} mb={8}>
          GET IN TOUCH
        </Text>
        <ContactTabs />
      </PageSection>
      <PageSection>
        <Text as={"h2"} textAlign={"center"} mb={2}>
          OUR PRODUCTS
        </Text>
        <Text textAlign={"center"} fontSize={20} color={"dark.500"}>
          We fabricate metals, spare parts for machines
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(3, 1fr)",
            md: "repeat(6, 1fr)",
            lg: "repeat(12, 1fr)",
          }}
          columnGap={[6, null, 6, 8]}
          rowGap={[8, null, 12, 16]}
          mt={[8, null, 12, 16]}
        >
          {products.map(({ name, img }, i) => (
            <GridItem colSpan={{ base: 3, lg: 4, xl: 3 }} key={i}>
              <OptimizedImage
                src={img}
                h={{
                  base: "16rem",
                  md: "16.5rem",
                  xl: "17rem",
                  "2xl": "17.875rem",
                  "3xl": "20rem",
                }}
                w={"full"}
                borderRadius={"10px"}
                objectFit={"cover"}
                alt={name}
              />
              <Text
                fontFamily={"Lato"}
                mt={[3, null, 4, 5]}
                fontSize={[18, null, 20]}
                fontWeight={"medium"}
                color={"gray.900"}
                letterSpacing={1}
                textAlign={"center"}
              >
                {name}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </PageSection>
    </>
  );
}
