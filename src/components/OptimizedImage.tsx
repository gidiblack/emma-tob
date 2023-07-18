import {
  Box,
  chakra,
  ChakraComponent,
  HTMLChakraProps,
} from "@chakra-ui/react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

type ImageProps = NextImageProps &
  Omit<HTMLChakraProps<"img">, keyof NextImageProps>;

const imageProps: (keyof NextImageProps)[] = [
  "src",
  "alt",
  "sizes",
  "width",
  "height",
  "fill",
  "loader",
  "quality",
  "priority",
  "loading",
  "placeholder",
  "blurDataURL",
  "unoptimized",
  "onLoadingComplete",
  "alt",
  "crossOrigin",
  "decoding",
  "referrerPolicy",
  "useMap",
  "objectFit",
  "objectPosition",
];

const Image: ChakraComponent<"img", NextImageProps> = chakra(NextImage, {
  shouldForwardProp: (prop) => (imageProps as string[]).includes(prop),
});

export default function OptimizedImage({
  src,
  alt,
  w,
  h,
  height,
  width,
  ...props
}: ImageProps) {
  return (
    <Box pos={"relative"} w={w} h={h} width={width} height={height}>
      <Image
        src={src}
        alt={alt}
        loading={"lazy"}
        objectFit={"contain"}
        fill={true}
        {...props}
      />
    </Box>
  );
}
