import React, { useMemo } from "react";
import Slider from "react-slick";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Skeleton,
  Stack,
  useColorModeValue as mode,
  Text,
  Link, // Chakra UI의 Link를 사용
} from "@chakra-ui/react";
import { ImageSlide } from "react-chakra-slide-show";
import { FaArrowRight } from "react-icons/fa";
import { Link as ReactLink } from "react-router-dom"; // react-router-dom의 Link를 ReactLink로 임포트
import logo from "./favicon.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsPhoneFlip } from "react-icons/bs";

const LandingScreen = () => {
  const images = useMemo(
    () => [
      "/images/landing-light.jpg",
      "/images/landing-dark.jpg",
      "/images/Camera-1.jpg",
      "/images/Laptop-1.webp",
    ],
    []
  );

  const captions = useMemo(
    () => [
      "Where quality meets style – discover the difference.",
      "Your one-stop shop for everything you need, delivered to your door",
      "Your satisfaction, our priority. Discover a seamless shopping experience.",
      "Discover exclusive finds you won’t see anywhere else.",
    ],
    []
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box maxW="8xl" mx="auto" p={{ base: "0", lg: "12" }} minH="6xl">
      <Stack
        direction={{ base: "column-reverse", lg: "row" }}
        spacing={{ base: "0", lg: "20" }}
      >
        <Box
          width={{ lg: "sm" }}
          transform={{ base: "translateY(-50%)", lg: "none" }}
          bg={{ base: mode("cyan.50", "gray.700"), lg: "transparent" }}
          mx={{ base: "6", md: "8", lg: "0" }}
          px={{ base: "6", md: "8", lg: "0" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <Stack spacing={{ base: "8", lg: "10" }}>
            <Stack spacing={{ base: "2", lg: "4" }}>
              <Flex alignItems="center">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "150px", height: "150px" }}
                />

                <Text fontSize="4xl" fontWeight="bold">
                  Techno Mart
                </Text>
              </Flex>
              <Heading size="xl" fontWeight="normal">
                Refresh your equipment
              </Heading>
            </Stack>
            <HStack spacing="3">
              <Link
                as={ReactLink}
                to="/products"
                color={mode("orange", "yellow.200")}
              >
                Discover now
              </Link>
              <Icon color={mode("orange", "yellow.200")} as={FaArrowRight} />
            </HStack>
          </Stack>
        </Box>

        <Flex flex="1" overflow="hidden">
          {/* <Slider {...settings}>
            {images.map((src, index) => (
              <Box key={index}>
                <Image
                  src={src}
                  fallback={<Skeleton />}
                  maxH="550px"
                  minW="300px"
                  objectFit="cover"
                  flex="1"
                />
              </Box>
            ))}
          </Slider> */}

          <ImageSlide images={images} captions={captions} />
        </Flex>
      </Stack>
    </Box>
  );
};

export default LandingScreen;
