import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <Box
        as={"main"}
        minH={{
          base: "calc(100vh - 3.5rem)",
          md: "calc(100vh - 4rem)",
          lg: "calc(100vh - 4.75rem)",
        }}
        mt={{ base: "3.5rem", md: "4rem", lg: "4.75rem" }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
