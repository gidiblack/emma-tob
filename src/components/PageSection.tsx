import React, { ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

function PageSection({ children, ...props }: BoxProps) {
  return (
    <Box
      as={"section"}
      py={"5rem"}
      px={["1rem", "1.5rem", "2rem", "4rem", "5rem", "6.25rem", "8rem"]}
      {...props}
    >
      {children}
    </Box>
  );
}

export default PageSection;
