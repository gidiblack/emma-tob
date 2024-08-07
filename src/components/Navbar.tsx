import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "@/assets/emma-tobb-logo.png";
import OptimizedImage from "./OptimizedImage";
import NextLink from "next/link";
import routes from "./routes";
import { useRouter } from "next/router";

const Links = [
  {
    label: "Home",
    href: routes.home,
  },
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
    label: "Academy",
    href: routes.academy,
  },
  {
    label: <Button mx={-2.5}>Contact us</Button>,
    href: routes.contactus,
  },
];

const NavLink = ({
  children,
  href,
  onClick,
  isActive,
}: {
  children: ReactNode;
  href: string;
  onClick?: () => void;
  isActive?: boolean;
}) => (
  <Link
    as={NextLink}
    p={2.5}
    textTransform={"uppercase"}
    fontSize={16}
    fontWeight={"500"}
    fontFamily={"Lato"}
    letterSpacing={"1px"}
    color={"brand.500"}
    _hover={{
      color: "brand.300",
    }}
    href={href}
    target={href.includes("https:") ? "_blank" : undefined}
    onClick={onClick}
  >
    {children}
    {isActive && <Box borderTopWidth={1} borderColor={"brand.500"} w={"50%"} />}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useRouter();
  return (
    <Box
      bg={"#FFF"}
      w={"full"}
      px={["1rem", "1.5rem", "2rem", "4rem", "5rem", "6.25rem", "8rem"]}
      boxShadow={
        "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)"
      }
      pos={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={"modal"}
    >
      <Flex
        py={2}
        align={"center"}
        justify={"space-between"}
        maxW={"100rem"}
        mx={"auto"}
      >
        <Link as={NextLink} href={"/"}>
          <OptimizedImage
            src={Logo.src}
            alt={"emma-tob logo"}
            w={{ base: "7rem", md: "8rem", lg: "10rem" }}
            h={{ base: "2.25rem", md: "3rem" }}
            className="contain"
          />
        </Link>
        <HStack as={"nav"} spacing={6} display={{ base: "none", lg: "flex" }}>
          {Links.map(({ label, href }, index) => (
            <NavLink
              key={index}
              href={href}
              isActive={pathname !== "/contact-us" && pathname === href}
            >
              {label}
            </NavLink>
          ))}
        </HStack>
        <IconButton
          size={"md"}
          variant={"transparent"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ lg: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ lg: "none" }} transition={"all ease .25s"}>
          <Stack as={"nav"} spacing={3} textAlign={"center"}>
            {Links.map(({ label, href }, index) => (
              <NavLink key={index} href={href} onClick={onClose}>
                {label}
              </NavLink>
            ))}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}
