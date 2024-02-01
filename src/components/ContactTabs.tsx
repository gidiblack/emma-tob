import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Grid,
  GridItem,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import routes from "./routes";

function ContactTabs({
  isControlled,
  setTabIndex,
}: {
  isControlled?: boolean;
  setTabIndex?: (i: number) => void;
}) {
  const addresses = [
    {
      country: "Nigeria",
      address: "Grace House, Atan/Lusada Road Near Evans Plc,",
      address2: "Ago-Eto Idawojo, Agbara, Ogun State",
      email:
        "admin@emma-tob.com, emmatobonline@gmail.com, ogunsonsltd@gmail.com",
      phone: "+234-803-716-0902, +234-807-777-7100, +234-813-799-1608",
    },
    {
      country: "Ghana",
      address: "Sawmill Kawererekwanano Tarkwa, Tarkwa Nsuaem Municipal",
      address2: "Western Region, P. O. Box 431, Tarkwa",
      email:
        "admin@emma-tob.com, emmatobonline@gmail.com, ogunsonsltd@gmail.com",
      phone: "(+233)-548-724-944",
    },
    {
      country: "Cameroun",
      address: `ETS OGUNLADE  & SONS`,
      address2: `4781 Bonaberi Douala`,
      email:
        "admin@emma-tob.com, emmatobonline@gmail.com, ogunsonsltd@gmail.com",
      phone: "(+237)-670-513-089, 675-452-708",
    },
    {
      country: "Switzerland",
      address: "Wolfackerstrasse 6",
      address2: "4622 Egerkingen, Switzerland",
      email:
        "admin@emma-tob.com, emmatobonline@gmail.com, ogunsonsltd@gmail.com",
      phone: "+41 763 838 336",
    },
  ];

  const handleTabChange = (i: number) => {
    if (setTabIndex !== undefined) {
      setTabIndex(i);
    }
  };
  return (
    <Tabs
      bg={"brand.500"}
      px={[3, 4, 4, 6, 8, 12]}
      pt={4}
      pb={8}
      mx={["-1rem", "-1.5rem", "unset"]}
      variant={"unstyled"}
      onChange={isControlled ? (i) => handleTabChange(i) : undefined}
    >
      <TabList
        justifyContent={"center"}
        borderBottom={"1px solid #465E73"}
        color={"secondary.600"}
        fontFamily={"Lato"}
      >
        {addresses.map(({ country }, i) => (
          <Tab
            py={[3, 3, 4]}
            px={[2, null, 3, 4, 5, 6]}
            textTransform={"uppercase"}
            fontWeight={"semibold"}
            fontSize={[12, null, 13]}
            letterSpacing={1}
            _selected={{
              color: "gray.50",
            }}
            key={i}
          >
            {country}
          </Tab>
        ))}
      </TabList>
      <TabIndicator mt="-2px" height="3px" bg="gray.50" />
      <TabPanels color={"gray.50"} px={[0, null, null, 4, 8]}>
        {addresses.map(({ address, phone, email, address2 }, i) => (
          <TabPanel pt={[5, 5, 6, 8]} pb={[5, 6, 8, 10]} key={i}>
            <Grid
              templateColumns={{
                base: "repeat(4, 1fr)",
                md: "repeat(10, 1fr)",
              }}
              gap={[6, null, 5, 6, 8]}
            >
              <GridItem colSpan={4}>
                <Text
                  fontSize={17}
                  fontFamily={"Lato"}
                  fontWeight={"semibold"}
                  color={"gray.50"}
                  mb={2.5}
                >
                  Address
                </Text>
                <Text fontSize={16} color={"gray.300"}>
                  {address}
                </Text>
                {address2 && (
                  <Text fontSize={15} color={"gray.300"}>
                    {address2}
                  </Text>
                )}
              </GridItem>
              <GridItem colSpan={3}>
                <Text
                  fontSize={17}
                  fontFamily={"Lato"}
                  fontWeight={"semibold"}
                  color={"gray.50"}
                  mb={2.5}
                >
                  Email
                </Text>
                <Text fontSize={16} color={"gray.300"}>
                  {email}
                </Text>
              </GridItem>
              <GridItem colSpan={3}>
                <Text
                  fontSize={17}
                  fontFamily={"Lato"}
                  fontWeight={"semibold"}
                  color={"gray.50"}
                  mb={2.5}
                >
                  Phone
                </Text>
                <Text fontSize={16} color={"gray.300"}>
                  {phone}
                </Text>
              </GridItem>
            </Grid>
          </TabPanel>
        ))}
        {!isControlled && (
          <Box textAlign={"center"}>
            <Link href={routes.contactus}>
              <Button variant={"outline"} size={"lg"}>
                Contact us
              </Button>
            </Link>
          </Box>
        )}
      </TabPanels>
    </Tabs>
  );
}

export default ContactTabs;
