import HomeHero from "@/components/HomeHero";
import PageSection from "@/components/PageSection";
import { Text } from "@chakra-ui/react";

export default function Home() {
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
    </>
  );
}
