import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
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

      <Stack my={4} align={"center"}>
        <Button>Click me</Button>
        <Button variant={"transparent"} size={"lg"}>
          Click me again
        </Button>
        <Button variant={"outline"} size={"sm"}>
          Click me again again
        </Button>
      </Stack>
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
