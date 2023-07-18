import ContactTabs from "@/components/ContactTabs";
import HomeHero from "@/components/HomeHero";
import OptimizedImage from "@/components/OptimizedImage";
import PageSection from "@/components/PageSection";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Punches from "@/assets/640-ball-bearing-stainless-metal-roller-for-machine-industrial-angular-contact-isolated-on-white-background.jpg";
import Wheels from "@/assets/metal-preparations-are-ready-following-stage-processing.jpg";
import Knives from "@/assets/high-angle-medical-scalpel-blades.jpg";
import DieCast from "@/assets/close-up-metalworking-machine.jpg";
import Gears from "@/assets/gears-table.jpg";
import ToolCabinet from "@/assets/view-toolbox-machines.jpg";
import CastIron from "@/assets/cast-iron-vs-steel.webp";
import IntricateParts from "@/assets/various-work-tools-worktop.jpg";
import Unilever from "@/assets/unilever-logo.png";
import Twinings from "@/assets/Twinings.png";
import Nestle from "@/assets/nestle-logo.png";
import NestleCameroun from "@/assets/camerounnestle.png";
import NestleGhana from "@/assets/ghananestle.png";
import Gsk from "@/assets/gsk-logo.jpg";
import SweetNutrition from "@/assets/sweet-nutrition.png";
import Perfetti from "@/assets/perfetti.png";
import Suntory from "@/assets/suntory.png";
import MrChef from "@/assets/mrchef.png";
import GbFoods from "@/assets/GB-FOODS.png";
import ApFoods from "@/assets/APFoods.png";
import Bayswater from "@/assets/bayswater.fw_.png";
import ReckittBenckiser from "@/assets/ReckittBenckiser.fw_.png";
import Slider from "react-slick";

export default function Home() {
  const products = [
    {
      name: "Punches, Dies and Precision Rollers",
      img: Punches.src,
    },
    {
      name: "Star Wheels, Rubber Rollers, Polycabonate",
      img: Wheels.src,
    },
    {
      name: "Industrial knives, Slitters, Guillotine knives, Perforated knives",
      img: Knives.src,
    },
    {
      name: "Die cast, Alloyed aluminum, arm of different shapes",
      img: DieCast.src,
    },
    {
      name: "Gears: Spur gear, Helical gear & different Sprockets",
      img: Gears.src,
    },
    {
      name: "Metalic cabinets, Shelves, Workbenches, Racks & footings",
      img: ToolCabinet.src,
    },
    {
      name: "Cast iron of different shapes and sizes",
      img: CastIron.src,
    },
    {
      name: "Intricate parts",
      img: IntricateParts.src,
    },
  ];

  const clients = [
    {
      name: "Unilever logo",
      img: Unilever.src,
    },
    {
      name: "Twinings logo",
      img: Twinings.src,
    },
    {
      name: "Nestle",
      img: Nestle.src,
    },
    {
      name: "Gsk",
      img: Gsk.src,
    },
    {
      name: "Sweet Nutrition",
      img: SweetNutrition.src,
    },
    {
      name: "Perfetti",
      img: Perfetti.src,
    },
    {
      name: "Suntory logo",
      img: Suntory.src,
    },
    {
      name: "Mr Chef logo",
      img: MrChef.src,
    },
    {
      name: "GB Foods",
      img: GbFoods.src,
    },
    {
      name: "AB Foods",
      img: ApFoods.src,
    },
    {
      name: "Bayswater",
      img: Bayswater.src,
    },
    {
      name: "ReckittBenckiser",
      img: ReckittBenckiser.src,
    },
  ];

  const testimonials = [
    {
      testimonial: `We have worked with Emmanuel Ogunlade (Emma-Tob) for close to 5 year here in Douala and for more than 10 years in Nigeria.

        Firstly he was well trained in workshop fabrication and in Fette Sapal lines in our company in Nigeria.Hence, he has solid background experience in fabrications and piping in general. He is also very good in Fette Sapal spare parts fabrication and supply. He has been supporting our maintenance activities and we prefer him because of proximity, knowledge and accessibility.
        
        Generally Fette sepal spares are difficult to get from overseas. With his availability in Nigeria and a branch in Douala Cameroon, our spares sourcing has become easier. Above all, he is trustworthy and reliable.`,
      name: "Alao Johnson Oladele",
      jobTitle: "Factory Engineer, Nestle Cameroon",
      img: NestleCameroun.src,
    },
    {
      testimonial: `SIS has very low return of jobs done or rejects. On site jobs are carried out with minimum supervision from Nestle. High turnover of jobs from Nestle is being experienced by SIS, because it is preferred vendor for its precision engineering practice.
      
      Respect to deadline to deliver jobs. Trust that his words are his bond would not change the price when agreed.
      
      Action, he (Emma-Tob) acts according to norms of the environment he found himself. Communicates when he is in doubt or to take decision different from specific values.`,
      name: "Emmanuel Omokaro",
      jobTitle: "Factory Engineer, Sagamu",
      img: NestleGhana.src,
    },
  ];

  // responsive breakpoints are "max-width"
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 448,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const testimonialSettings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 0,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

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
      <PageSection>
        <Text as={"h2"} textAlign={"center"} mb={8}>
          GET IN TOUCH
        </Text>
        <ContactTabs />
      </PageSection>
      <PageSection>
        <Text as={"h2"} textAlign={"center"} mb={2}>
          OUR PRODUCTS
        </Text>
        <Text textAlign={"center"} fontSize={20} color={"dark.500"}>
          We fabricate metals, spare parts for machines
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(3, 1fr)",
            md: "repeat(6, 1fr)",
            lg: "repeat(12, 1fr)",
          }}
          columnGap={[6, null, 6, 8]}
          rowGap={[8, null, 12, 16]}
          mt={[8, null, 12, 16]}
        >
          {products.map(({ name, img }, i) => (
            <GridItem colSpan={{ base: 3, lg: 4, xl: 3 }} key={i}>
              <OptimizedImage
                src={img}
                h={{
                  base: "16rem",
                  md: "16.5rem",
                  xl: "17rem",
                  "2xl": "17.875rem",
                  "3xl": "20rem",
                }}
                w={"full"}
                borderRadius={"10px"}
                objectFit={"cover"}
                alt={name}
              />
              <Text
                fontFamily={"Lato"}
                mt={[3, null, 4, 5]}
                fontSize={[18, null, 20]}
                fontWeight={"medium"}
                color={"gray.900"}
                letterSpacing={1}
                textAlign={"center"}
              >
                {name}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </PageSection>
      <PageSection>
        <Text as={"h2"} textAlign={"center"} mb={2}>
          CLIENTS
        </Text>
        <Text textAlign={"center"} fontSize={20} color={"dark.500"}>
          Our clients are our most priced assets. They have been the engine
          driving our innovations in almost 30 years of existence
        </Text>
        <Box
          mt={[6, null, 8, 10, 12]}
          mx={[
            "-1rem",
            "-1.5rem",
            "-2rem",
            "-4rem",
            "-5rem",
            "-6.25rem",
            "-8rem",
          ]}
        >
          <Slider {...settings}>
            {clients.map(({ img, name }, i) => (
              <div key={i}>
                <OptimizedImage
                  src={img}
                  w={{ base: "9rem", md: "10rem", lg: "11.25rem" }}
                  h={{ base: "5rem", md: "5.5rem", lg: "6.25rem" }}
                  borderRadius={"8px"}
                  mx={"auto"}
                  alt={name}
                />
              </div>
            ))}
          </Slider>
        </Box>
      </PageSection>
      <PageSection mx={["-1rem", null, "unset"]}>
        <Text as={"h2"} textAlign={"center"} mb={[6, null, 8, 10, 12]}>
          TESTIMONIALS
        </Text>
        <Slider {...testimonialSettings}>
          {testimonials.map(({ img, name, testimonial, jobTitle }, i) => (
            <TestimonialCard
              key={i}
              testimonial={testimonial}
              name={name}
              jobTitle={jobTitle}
              img={img}
            />
          ))}
        </Slider>
      </PageSection>
    </>
  );
}

const TestimonialCard = ({
  testimonial,
  name,
  jobTitle,
  img,
}: {
  testimonial: string;
  name: string;
  jobTitle: string;
  img: string;
}) => (
  <Flex
    flexDir={"column"}
    bg={"brand.500"}
    borderRadius={{ base: 8, md: 10, lg: 12 }}
    minH={["440px", null, "400px", "540px", "600px"]}
    py={[5, null, 8, 10]}
    px={[3, null, 5, 6]}
    justify={"space-between"}
    mx={{ base: 1, lg: 2, xl: 4, "2xl": 5 }}
  >
    <Text
      color={"gray.50"}
      fontSize={[14, null, 15, 16, 18]}
      lineHeight={{ base: "21px", lg: "24px", xl: "28px" }}
      whiteSpace={"pre-line"}
    >
      {testimonial}
    </Text>
    <HStack spacing={3} mt={[4, null, 5, 6]}>
      <OptimizedImage
        src={img}
        boxSize={[14, null, 16]}
        borderRadius={"full"}
        alt={name}
      />
      <Stack spacing={[0.5, null, null, 1]}>
        <Text
          color={"gray.50"}
          fontSize={[16, null, 17, 18, 20]}
          fontWeight={"bold"}
          fontFamily={"Lato"}
        >
          {name}
        </Text>
        <Text color={"gray.400"} fontSize={[13, null, 14, 15, 16]}>
          {jobTitle}
        </Text>
      </Stack>
    </HStack>
  </Flex>
);
