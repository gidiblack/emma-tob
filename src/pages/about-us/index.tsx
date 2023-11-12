import React from "react";
import PageSection from "@/components/PageSection";
import { Box, Flex, SimpleGrid, Text, Grid, GridItem } from "@chakra-ui/react";
import OptimizedImage from "@/components/OptimizedImage";
import HeroImg from "@/assets/wheels-in-cog.png";
import ManWelding from "@/assets/man-welding.png";
import useWindowDimension from "@/helpers/useWindowDimension";
import ContactTabs from "@/components/ContactTabs";

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
        <Text as={"h2"} textAlign={"center"} mb={8}>
          GET IN TOUCH
        </Text>
        <ContactTabs />
      </PageSection>
    </>
  );
}

export default AboutUs;
