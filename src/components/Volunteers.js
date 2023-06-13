import React from "react";
import Box from "@mui/material/Box";
import Frame4 from "../assets/Frame4.svg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Volunteer = () => {
  return (
    <Box
      id="volunteer"
      name="Volunteer"
      sx={{ position: "absolute", top: "470px" }}
    >
      <Box sx={{ position: "relative" }}>
        <Box
          component={"img"}
          src={Frame4}
          alt="offerings"
          sx={{
            width: "90vw",
            height: "1054px",
            transform: "scale(0.8)",
          }}
        ></Box>
        <Button
          sx={{
            width: "119px",
            height: "38px",
            background: "#8A3CC4",
            borderRadius: "20px",
            fontFamily: "Arial",
            fontStyle: "normal",
            color: "#FFFFFF",
            marginTop: "50px",
            position: "absolute",
            left: "50%",
            top: "870px",
            transform: "translateX(-50%)",
            "&:hover": {
              background: "#8A3CC4",
            },
          }}
        >
          <Box
            component={Link}
            sx={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
            to="/volunteasy/join"
          >
            Get Started
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default Volunteer;
