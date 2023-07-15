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
          base: "calc(100vh - 4.5rem)",
          md: "calc(100vh - 5rem)",
          lg: "calc(100vh - 5.75rem)",
        }}
        mt={{ base: "4.5rem", md: "5rem", lg: "5.75rem" }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
