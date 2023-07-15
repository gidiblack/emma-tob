import { ComponentStyleConfig } from "@chakra-ui/react";

const Textarea: ComponentStyleConfig = {
  baseStyle: {
    borderWidth: "1px",
    borderColor: "gray.500",
    borderRadius: "8px",
    fontFamily: "body",
    bgColor: "white",
    color: "gray.800",
    _placeholder: {
      color: "gray.500",
    },
  },
  sizes: {
    sm: {
      field: { fontSize: "0.875rem", px: "1rem", py: "0.75rem" },
    },
    md: {
      h: "10rem",
      fontSize: "1rem",
      px: "1.5rem",
      py: "1rem",
    },
    lg: {
      field: { fontSize: "1.115rem", px: "2rem", py: "1.25rem" },
    },
  },
  variants: {
    solid: {
      bg: "transparent",
      _hover: {
        borderColor: "brand.400",
      },
      _focus: {
        borderColor: "brand.400",
      },
    },
  },
  // overwrite defaultProps
  defaultProps: {
    size: "md",
    variant: "solid",
  },
};

export default Textarea;
