import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LogoSvg from "../assets/logo.svg";
import { Link } from "react-router-dom";

const menuItems = ["Volunteer", "Organization", "About"];

function ResponsiveAppBar() {
  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ height: "100px", display: "flex", justifyContent: "center" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={LogoSvg}
            alt="Logo"
            sx={{ height: "80%" }}
          />

          <Box
            sx={{
              marginLeft: "5vw",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {menuItems.map((menu) => (
              <Button
                key={menu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  marginRight: "5vw",
                }}
                onClick={scrollToElement.bind(this, menu.toLowerCase())}
              >
                {menu}
              </Button>
            ))}
          </Box>
          <Box>
            <Button
              key="LoginButton"
              sx={{
                width: "92px",
                background: "#FFFFFF",
                border: "1px solid #8A3CC4",
                borderRadius: "20px",
              }}
            >
              Login
            </Button>
            <Button
              key="SignUp"
              sx={{
                width: "92px",
                background: "#8A3CC4",
                border: "1px solid #8A3CC4",
                borderRadius: "20px",
                marginLeft: "2vw",
                color: "#FFFFFF",
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
                Sign Up
              </Box>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
