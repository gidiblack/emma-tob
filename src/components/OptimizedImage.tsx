import NextImage from "next/image";
import { chakra, Box, ImageProps } from "@chakra-ui/react";

const OptimizedImage = ({
  src,
  alt,
  objectFit = "contain",
  borderRadius,
  ...props
}: ImageProps) => {
  const OptimizedImg = chakra(NextImage, {
    shouldForwardProp: (prop) => ["fill", "src", "alt"].includes(prop),
  });

  return (
    <Box pos="relative" {...props}>
      <OptimizedImg
        src={src as string}
        fill={true}
        objectFit={objectFit}
        alt={alt || ""}
        borderRadius={borderRadius}
      />
    </Box>
  );
};

export default OptimizedImage;
