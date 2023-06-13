import React from "react";
import Box from "@mui/material/Box";
import icona1 from "../assets/icon_a1.svg";
import Easy from "../assets/easy.svg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <Box
      sx={{
        width: "90vw",
        height: "400px",
        position: "absolute",
        top: "105px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "521px",
          height: "387px",
          background: "white",
          marginTop: "50px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            marginRight: "2rem",
          }}
        >
          <Box sx={{ marginBottom: "50px", padding: "0 10%" }}>
            <Box
              component={"span"}
              sx={{
                width: "108px",
                height: "47px",
                background: "#8A3CC4",
                fontFamily: "Calibri",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "36px",
                lineHeight: "44px",
                color: "#FFFFFF",
                margin: "2px",
              }}
            >
              Volunt
            </Box>
            <Box
              component={"span"}
              sx={{
                fontFamily: "Calibri",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "32px",
                lineHeight: "39px",
                marginRight: "0.5rem",
              }}
            >
              eering
            </Box>
            <Box
              component={"span"}
              sx={{
                fontFamily: "Arial Rounded MT Bold",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "32px",
                lineHeight: "37px",
                marginRight: "0.5rem",
              }}
            >
              made
            </Box>
            <Box
              component={"img"}
              src={Easy}
              alt="easy"
              sx={{
                display: "inline-block",
                height: "47px",
                width: "84px",
                verticalAlign: "bottom",
              }}
            />
          </Box>
          <Box
            component={"p"}
            sx={{
              fontFamily: "Bahnschrift",
              fontWeight: "300",
              fontSize: "28px",
              lineHeight: "33.61px",
            }}
          >
            Unlock your full{" "}
            <Box component="span" sx={{ color: "#8A3CC4" }}>
              potential
            </Box>{" "}
            and make a real difference in the world by{" "}
            <Box component="span" sx={{ color: "#8A3CC4" }}>
              volunteering
            </Box>{" "}
            your skills
          </Box>
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
              "&:hover": {
                background: "#8A3CC4",
                transform: "scale(1.05)",
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
              Join Now
            </Box>
          </Button>
        </Box>
      </Box>
      <Box
        component="img"
        src={icona1}
        alt="Logo"
        sx={{
          width: "521px",
          height: "387px",
          background: "white",
        }}
      ></Box>
    </Box>
  );
};
export default Intro;
