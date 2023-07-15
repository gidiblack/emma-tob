import { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "500",
    fontFamily: "'Lato', sans",
    borderRadius: "8px",
    lineHeight: 0,
    _hover: {
      transform: "scale(1.04)",
    },
  },
  sizes: {
    sm: {
      fontSize: "0.875rem",
      px: "2rem",
      py: ".625rem",
    },
    md: {
      fontSize: "1rem",
      px: "3rem",
      py: "0.75rem",
    },
    lg: {
      fontSize: "1.125rem",
      px: "4rem",
      py: "1rem",
    },
  },
  variants: {
    solid: {
      bg: "brand.500",
      color: "#fff",
      _hover: {
        bg: "brand.300",
        _disabled: {
          bg: "brand.300",
        },
      },
    },
    outline: {
      bg: "#FFF",
      color: "brand.500",
      border: "1px solid",
      borderColor: "brand.500",
      _hover: {
        bg: "brand.300",
        color: "#fff",
        border: "none",
        _disabled: {
          bg: "brand.300",
          color: "#fff",
        },
      },
    },
    secondary: {
      bg: "secondary.500",
      color: "gray.50",
      _hover: {
        bg: "secondary.300",
        _disabled: {
          bg: "secondary.300",
        },
      },
    },
    transaparent: {
      bg: "transparent",
      color: "gray.900",
      _hover: {
        bg: "secondary.200",
        _disabled: {
          bg: "secondary.200",
        },
      },
    },
  },
  // overwrite defaultProps
  defaultProps: {
    size: "md",
    variant: "solid",
  },
};

export default Button;
