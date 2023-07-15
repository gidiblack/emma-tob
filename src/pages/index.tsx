import Navbar from "@/components/Navbar";
import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box minH={"100vh"} pos={"relative"} textAlign={"center"} pt={"5rem"}>
      <Navbar />
      <Heading as={"h1"} textAlign={"center"} my={10} fontWeight={"extrabold"}>
        EMMA-TOB
      </Heading>
      <Text
        textAlign={"center"}
        w={"50%"}
        mx={"auto"}
        fontSize={18}
        fontStyle={"italic"}
      >
        Emma-Tob is your trusted partner for designing, fabricating and
        supplying machines including rare and hard-to-find spare parts. With our
        extensive experience and expertise, we help our customers significantly
        reduce their production costs, giving them a competitive edge in the
        market.
      </Text>

      <Button my={5}>Click me</Button>
      <Button my={5} variant={"transparent"} size={"lg"}>
        Click me again
      </Button>
      <Button my={5} variant={"outline"} size={"sm"}>
        Click me again again
      </Button>
      <Input placeholder="Some placeholder" w={"65%"} />
      <Textarea
        placeholder="Textarea placeholder"
        w={"65%"}
        mx={"auto"}
        mt={8}
      />
      <Select placeholder="Choose one" w={"65%"} mx={"auto"} mt={8} />
    </Box>
  );
}
