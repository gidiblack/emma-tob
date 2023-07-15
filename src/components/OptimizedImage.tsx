import NextImage from "next/image";
import { chakra, Box, ImageProps } from "@chakra-ui/react";

const OptimizedImage = ({
  src,
  alt,
  objectFit = "contain",
  ...props
}: ImageProps) => {
  const OptimizedImg = chakra(NextImage, {
    shouldForwardProp: (prop) => ["layout", "src", "alt"].includes(prop),
  });

  return (
    <Box pos="relative" {...props}>
      <OptimizedImg
        src={src as string}
        layout="fill"
        objectFit={objectFit}
        alt={alt || ""}
      />
    </Box>
  );
};

export default OptimizedImage;