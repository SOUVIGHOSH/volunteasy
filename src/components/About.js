import React from "react";
import Box from "@mui/material/Box";
import Frame47 from "../assets/Frame47.svg";

const About = () => {
  return (
    <Box
      id="about"
      sx={{ position: "absolute", top: "1900px", marginTop: "50px" }}
    >
      <Box
        component={"img"}
        src={Frame47}
        alt="about"
        sx={{
          width: "90vw",
          height: "928px",
          transform: "scale(0.8)",
        }}
      ></Box>
    </Box>
  );
};

export default About;
