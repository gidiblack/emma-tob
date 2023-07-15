import PageSection from "@/components/PageSection";
import { Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <PageSection textAlign={"center"}>
      <Heading as={"h1"} my={10} fontWeight={"extrabold"}>
        EMMA-TOB
      </Heading>
      <Text w={"50%"} mx={"auto"} fontSize={18} fontStyle={"italic"}>
        Emma-Tob is your trusted partner for designing, fabricating and
        supplying machines including rare and hard-to-find spare parts. With our
        extensive experience and expertise, we help our customers significantly
        reduce their production costs, giving them a competitive edge in the
        market.
      </Text>
    </PageSection>
  );
}
