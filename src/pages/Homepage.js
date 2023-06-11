import ResponsiveAppBar from "../components/Appbar";
import React from "react";
import Box from "@mui/material/Box";
import Intro from "../components/Intro";
import Volunteer from "../components/Volunteers";
import Organization from "../components/Organizations";
import About from "../components/About";

const Homepage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ResponsiveAppBar />
      <Intro />
      <Volunteer />
      <Organization />
      <About />
    </Box>
  );
};

export default Homepage;
