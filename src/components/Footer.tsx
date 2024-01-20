import {
  Box,
  Grid,
  GridItem,
  Stack,
  Text,
  Link,
  HStack,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import OptimizedImage from "./OptimizedImage";
import Logo from "@/assets/emma-tobb-logo.png";
import NextLink from "next/link";
import routes from "./routes";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

const FooterLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => (
  <Link
    as={NextLink}
    fontSize={{ base: 15, md: 16, lg: 18 }}
    fontFamily={"Lato"}
    color={"gray.800"}
    _hover={{
      color: "brand.500",
    }}
    href={href}
  >
    {children}
  </Link>
);

const Links1 = [
  {
    label: "Services",
    href: routes.services,
  },
  {
    label: "Products",
    href: routes.products,
  },
  {
    label: "About us",
    href: routes.aboutus,
  },
  {
    label: "Contact us",
    href: routes.contactus,
  },
];

const Links2 = [
  {
    label: (
      <HStack>
        <PhoneIcon boxSize={3} color={"brand.500"} />
        <Text fontSize={16} fontFamily={"Lato"} fontWeight={"medium"}>
          +234-803-716-0902
        </Text>
      </HStack>
    ),
    href: "tel:+2348037160902",
  },
  {
    label: (
      <HStack>
        <PhoneIcon boxSize={3} color={"brand.500"} />
        <Text fontSize={16} fontFamily={"Lato"} fontWeight={"medium"}>
          +234-807-777-7100
        </Text>
      </HStack>
    ),
    href: "tel:+2348077777100",
  },
  {
    label: (
      <HStack>
        <EmailIcon h={5} color={"brand.500"} />
        <Text fontSize={16} fontFamily={"Lato"} fontWeight={"medium"}>
          emmatobonline@gmail.com
        </Text>
      </HStack>
    ),
    href: "mailto:emmatobonline@gmail.com",
  },
];

function Footer() {
  return (
    <Box
      as={"footer"}
      id={"footer"}
      py={["2rem", "2.5rem", "4rem", "5rem"]}
      px={["1rem", "1.5rem", "2rem", "4rem", "5rem", "6.25rem", "8rem"]}
      boxShadow={
        "0px -2px 4px -1px rgba(0, 0, 0, 0.06), 0px -4px 6px -1px rgba(0, 0, 0, 0.10)"
      }
    >
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(8, 1fr)",
          lg: "repeat(12, 1fr)",
        }}
        gap={{ base: 8, md: 8, lg: 10 }}
        fontFamily={"Lato"}
        maxW={"100rem"}
        mx={"auto"}
      >
        <GridItem colSpan={{ base: 2, md: 4, lg: 6 }}>
          <Stack spacing={6}>
            <OptimizedImage
              src={Logo.src}
              alt={"emma-tob-logo"}
              w={"120px"}
              h={"40px"}
            />
            <Text color={"gray.800"} fontSize={[16, 16, 17, 18, 19, 20]}>
              Our ethos is to diagnose our customer’s problems and thus offer
              perfectly tailored solutions for each unique application. We work
              with a passion for precision, refusing to lower our standards
              below that required of our customers.
            </Text>
          </Stack>
        </GridItem>
        <GridItem colSpan={2} colStart={{ lg: 8 }}>
          <Text
            color={"brand.500"}
            fontSize={[16, 16, 17, 18, 19, 20]}
            fontWeight={"semibold"}
          >
            Company
          </Text>
          <Stack mt={[4, 5, 6, 8]} spacing={[3, 3, 4, 5]}>
            {Links1.map(({ label, href }, i) => (
              <FooterLink key={i} href={href}>
                {label}
              </FooterLink>
            ))}
          </Stack>
        </GridItem>
        <GridItem colSpan={[2, null, null, 3]}>
          <Text
            color={"brand.500"}
            fontSize={[16, 16, 17, 18, 19, 20]}
            fontWeight={"semibold"}
          >
            Contact
          </Text>
          <Stack mt={[4, 5, 6, 8]} spacing={[3, 3, 4, 5]}>
            {Links2.map(({ label, href }, i) => (
              <FooterLink key={i} href={href}>
                {label}
              </FooterLink>
            ))}
          </Stack>
        </GridItem>
      </Grid>
      <Text mt={16} fontSize={16} fontFamily={"body"} textAlign={"center"}>
        © {new Date().getFullYear()} Emma-tob technologies limited
      </Text>
    </Box>
  );
}

export default Footer;
