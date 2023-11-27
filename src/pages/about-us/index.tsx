import React from "react";
import PageSection from "@/components/PageSection";
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  Grid,
  GridItem,
  Divider,
} from "@chakra-ui/react";
import OptimizedImage from "@/components/OptimizedImage";
import HeroImg from "@/assets/wheels-in-cog.png";
import ManWelding from "@/assets/man-welding.png";
import useWindowDimension from "@/helpers/useWindowDimension";
import ContactTabs from "@/components/ContactTabs";
import Integrity from "@/assets/integrity.svg";
import Professionalism from "@/assets/professionalism.svg";
import Promptness from "@/assets/promptness.svg";

const coreValues = [
  {
    title: "Integrity",
    Img: Integrity,
    desc: "Our ethos is to provide the correct cable for the individual application, refusing to lower our standards below that required by our customers",
  },
  {
    title: "Professionalism",
    Img: Professionalism,
    desc: "Our ethos is to provide the correct cable for the individual application, refusing to lower our standards below that required by our customers",
  },
  {
    title: "Promptness",
    Img: Promptness,
    desc: "Our ethos is to provide the correct cable for the individual application, refusing to lower our standards below that required by our customers",
  },
];

function AboutUs() {
  const { width } = useWindowDimension();
  return (
    <>
      <Box
        as={"section"}
        background={
          "linear-gradient(180deg, #DDE3F0 0%, rgba(193, 211, 255, 0.38) 100%)"
        }
        px={["1.25rem", null, "5rem", "5.5rem", "6.25rem"]}
        py={["2rem", null, "5rem", "5.5rem", "6.25rem"]}
      >
        <SimpleGrid
          columns={{ md: 2 }}
          gap={[2, null, 4, 6, 8]}
          mt={[0, null, -6, "unset"]}
          maxW={"80rem"}
          mx={"auto"}
        >
          <OptimizedImage
            src={HeroImg.src}
            placeholder={"blur"}
            blurDataURL={HeroImg.blurDataURL}
            alt={"about Emma-Tob Technologies"}
            w={{ base: "full", xl: "37.75rem" }}
            h={{ base: "20rem", md: "25rem", xl: "27.5rem" }}
          />
          <Flex align={"center"}>
            <Box textAlign={{ base: "center", md: "left" }}>
              <Text as={"h1"} mb={[2, null, 3, 4]} fontWeight={"extrabold"}>
                ABOUT US
              </Text>
              <Text fontSize={[18, null, 20, 21, 22]}>
                Our vision is to become your first point of contact and one-stop
                solution provider for top quality toolings, machinery,
                industrial spare parts, and services across Africa and Globally.
                To emerge as a leading provider for precision engineering and
                fabrications in Africa and Globally. 
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
      <Grid
        templateColumns={{
          base: "repeat(6, 1fr)",
          lg: "repeat(12, 1fr)",
        }}
        rowGap={[5, null, null, 12]}
        w={"100%"}
        maxW={"90rem"}
        mx={"auto"}
        mb={["3rem", null, "3.5rem"]}
      >
        <GridItem colSpan={6}>
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            p={["1.25rem", null, "2rem", "2.5rem", "3rem", "5rem"]}
            h={"full"}
          >
            <Text
              fontSize={[16, null, 18, null, 20]}
              mb={[4, null, 5, null, 8, 10]}
            >
              Emma-tob Technologies is a subsidiary of Ogunlade & Sons
              established in 2012. Our goal is to become your one-stop solution
              provider for top quality toolings, machinery, industrial spare
              parts, and services tailored to each unique application. Our
              customers are at the core of everything we do as we adhere to a
              strict ethos to always deliver the best quality products and
              service without compromising our standards below that required by
              our customers.
            </Text>
            <Text fontSize={[16, null, 18, null, 20]}>
              Since its inception, the company has consistently thrived and
              achieved remarkable growth over time. Emma-tob Technologies
              comprises 4 production sites dedicated to meeting the needs of our
              customers across Africa and globally. Each site is supported by an
              efficient team of technical engineers and are readily available to
              understand your business needs and cater to applications requiring
              customized solutions.
            </Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={6} order={[-1, null, null, "unset"]}>
          <OptimizedImage
            src={ManWelding.src}
            placeholder="blur"
            blurDataURL={ManWelding.blurDataURL}
            alt={"man welding"}
            w={"full"}
            h={{ base: width, lg: "35rem", xl: "40rem", "2xl": "45rem" }}
          />
        </GridItem>
      </Grid>
      <PageSection>
        <Text as={"h2"} textAlign={["center", null, "left"]}>
          VISION STATEMENT
        </Text>
        <Divider mb={8} borderWidth={1} borderColor={"brand.500"} />
        <Text color={"dark.500"} fontSize={[20, null, 22, 24]}>
          Our vision is to become your first point of contact and one-stop
          solution provider for top quality toolings, machinery, industrial
          spare parts, and services across Africa and Globally. To emerge as a
          leading provider for precision engineering and fabrications in Africa
          and Globally.
        </Text>
        <Text as={"h2"} textAlign={["center", null, "right"]} mt={"7.5rem"}>
          MISSION STATEMENT
        </Text>
        <Divider mb={8} borderWidth={1} borderColor={"brand.500"} />
        <Text color={"dark.500"} fontSize={[20, null, 22, 24]}>
          To satisfy our clients always by providing reliable and excellent
          services while being abreast of current innovations and be up-to-date
          in this fast growing IT environment.
        </Text>
      </PageSection>
      <PageSection>
        <Text as={"h2"} textAlign={"center"} mb={8}>
          WHAT MAKES US UNIQUE
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(4, 1fr)",
            md: "repeat(8, 1fr)",
            lg: "repeat(12, 1fr)",
          }}
          gap={[8, null, 5, 6, null, 8]}
        >
          {coreValues.map(({ title, Img, desc }, i) => (
            <GridItem
              colSpan={4}
              display={"flex"}
              borderRadius={8}
              borderWidth={2}
              borderColor={"brand.500"}
              alignItems={"center"}
              flexDirection={"column"}
              textAlign={"center"}
              p={[5, null, 6, 8]}
              key={i}
            >
              <OptimizedImage
                src={Img}
                alt={`core values - ${title}`}
                w={["4rem", null, "5rem"]}
                h={["4rem", null, "5rem"]}
              />
              <Text
                as={"h3"}
                color={"dark.500"}
                fontWeight={"semibold"}
                fontSize={[22, null, 24]}
                mt={8}
                mb={6}
              >
                {title}
              </Text>
              <Text
                fontSize={[15, null, 16, 18]}
                color={"gray.800"}
                lineHeight={"22px"}
              >
                {desc}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </PageSection>
      <PageSection>
        <Text as={"h2"} textAlign={"center"} mb={8}>
          GET IN TOUCH
        </Text>
        <ContactTabs />
      </PageSection>
    </>
  );
}

export default AboutUs;
