import React, { FormEvent, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import OptimizedImage from "@/components/OptimizedImage";
import PageSection from "@/components/PageSection";
import HeroImg from "@/assets/contact-illustration.png";
import ContactTabs from "@/components/ContactTabs";

function Contactus() {
  const [currentMapSrc, setCurrentMapSrc] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    switch (tabIndex) {
      case 0:
        setCurrentMapSrc(
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63422.84389248766!2d3.043387793481497!3d6.530810251722835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b78963f436a7f%3A0x190bbbebf2733a7f!2sEmma-Tob%20Technologies%20Limited!5e0!3m2!1sen!2sng!4v1691012126524!5m2!1sen!2sng"
        );
        break;
      case 1:
        setCurrentMapSrc(
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.7183571212736!2d-1.9954280240660776!3d5.306569936105557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdd6ffa3d0ba655%3A0x4485fbdfc9ed7153!2starkwa%20nsuaem%20municipal%20assembly%20old%20office!5e0!3m2!1sen!2sng!4v1691014214250!5m2!1sen!2sng"
        );
        break;
      case 2:
        setCurrentMapSrc(
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.619902379381!2d9.652788385164623!3d4.097510033148963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10611146b966ab75%3A0x410b3ad02bbf2e7!2sBECT%20Engineering%20Sarl!5e0!3m2!1sen!2sng!4v1691014484868!5m2!1sen!2sng"
        );
        break;
      case 3:
        setCurrentMapSrc(
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1191.714794151791!2d7.798180198731034!3d47.31762078893151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47902d0a40cf18d5%3A0x43b75433ec103f8!2sWolfackerstrasse%2C%204622%20Egerkingen%2C%20Switzerland!5e0!3m2!1sen!2sng!4v1691014610646!5m2!1sen!2sng"
        );
        break;
      default:
        setCurrentMapSrc(
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63422.84389248766!2d3.043387793481497!3d6.530810251722835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b78963f436a7f%3A0x190bbbebf2733a7f!2sEmma-Tob%20Technologies%20Limited!5e0!3m2!1sen!2sng!4v1691012126524!5m2!1sen!2sng"
        );
        break;
    }
  }, [tabIndex]);

  return (
    <>
      <PageSection>
        <SimpleGrid
          columns={{ md: 2 }}
          gap={[2, null, 4, 6, 8]}
          mt={[-8, null, -6, "unset"]}
        >
          <OptimizedImage
            src={HeroImg.src}
            placeholder={"blur"}
            blurDataURL={HeroImg.blurDataURL}
            alt={"contact Emma-Tob Technologies"}
            w={{ base: "full", xl: "37.75rem" }}
            h={{ base: "14rem", md: "18rem", xl: "22.5rem" }}
          />
          <Flex align={"center"}>
            <Box textAlign={{ base: "center", md: "left" }}>
              <Text as={"h1"} mb={[2, null, 3, 4]} fontWeight={"extrabold"}>
                CONTACT US
              </Text>
              <Text fontSize={[18, null, 20, 21, 22]}>
                Have any question or feedback, feel free to reach out to us. We
                are always available to help.
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </PageSection>
      <Box>
        <iframe
          src={currentMapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          width={"100%"}
          height={"580px"}
        />
        <Box
          px={["1rem", "1.5rem", "2rem", "4rem", "5rem", "6.25rem", "8rem"]}
          mt={{ md: -16 }}
          position={"relative"}
          zIndex={10}
        >
          <ContactTabs isControlled={true} setTabIndex={setTabIndex} />
        </Box>
      </Box>
      <PageSection id={"message"}>
        <Text as={"h2"} textAlign={"center"} mb={[2, null, 3]}>
          SEND US A MESSAGE
        </Text>
        <Text textAlign={"center"} fontSize={16}>
          Have any question or feedback, feel free to reach out to us. We are
          always available to help.
        </Text>

        <Box
          as={"form"}
          maxW={"42.5rem"}
          mx={"auto"}
          textAlign={"center"}
          mt={[8, null, 10, 12]}
          onSubmit={handleSubmit}
        >
          <SimpleGrid columns={{ md: 2 }} gap={[5, null, 6, 8]}>
            <Input
              name={"name"}
              type={"text"}
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              name={"email"}
              type={"email"}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              name={"phone"}
              type={"tel"}
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <Select
              name={"industry"}
              placeholder="Select your industry"
              value={industry}
              required
            />
            <Select
              name={"country"}
              placeholder="Select your country"
              value={country}
              required
            />
            <Input
              name={"city"}
              type={"text"}
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </SimpleGrid>
          <Textarea
            name={message}
            placeholder={"Write your message here"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            mt={[5, null, 6, 8]}
          />
          <Button mt={6} size={"lg"} px={24} type={"submit"}>
            Submit
          </Button>
        </Box>
      </PageSection>
    </>
  );
}

export default Contactus;
