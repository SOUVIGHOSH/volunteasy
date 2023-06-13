import React from "react";
import Logo from "../assets/171_Logo.svg";
import Box from "@mui/material/Box";
import searchIcon from "../assets/ICON_S1.svg";
import caseIcon from "../assets/ICON_T1.svg";
import { Link } from "react-router-dom";

const JoinPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={Logo}
        alt="Logo"
        sx={{ height: "43px", width: "185px" }}
      />
      <Box
        component={Link}
        to="/volunteasy/register"
        sx={{
          height: "548px",
          width: "1139px",
          background: "#FFFFFF",
          border: "1px solid #8A3CC4",
          borderRadius: "100px",
          marginTop: "105px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Box
          component={"p"}
          sx={{
            fontFamily: "Bahnschrift",
            fontWeight: "300",
            fontSize: "40px",
            lineHeight: "48px",
            height: "96px",
          }}
        >
          Join as an{" "}
          <Box component="span" sx={{ color: "#8A3CC4" }}>
            Organisation
          </Box>{" "}
          or{" "}
          <Box component="span" sx={{ color: "#8A3CC4" }}>
            Volunteer
          </Box>{" "}
          your skills
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            marginTop: "42px",
          }}
        >
          <Box
            sx={{
              height: "230px",
              width: "422px",
              border: "1px solid #8A3CC4",
              borderRadius: "50px",
              padding: "2%",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={searchIcon}
              alt="volunteers search"
              sx={{ height: "48px", width: "48px" }}
              marginBottom="25px"
            />
            <Box
              component={"p"}
              sx={{
                fontFamily: "Bahnschrift",
                fontWeight: "300",
                fontSize: "32px",
                lineHeight: "38.41px",
              }}
            >
              I'm an{" "}
              <Box component="span" sx={{ color: "#8A3CC4" }}>
                Organisation
              </Box>{" "}
              looking for Volunteers
            </Box>
          </Box>
          <Box
            sx={{
              height: "230px",
              width: "422px",
              border: "1px solid #8A3CC4",
              borderRadius: "50px",
              padding: "2%",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={caseIcon}
              alt="organization search"
              sx={{ height: "48px", width: "48px" }}
              marginBottom="25px"
            />
            <Box
              component={"p"}
              sx={{
                fontFamily: "Bahnschrift",
                fontWeight: "300",
                fontSize: "32px",
                lineHeight: "38.41px",
              }}
            >
              I'm a{" "}
              <Box component="span" sx={{ color: "#8A3CC4" }}>
                Volunteer
              </Box>{" "}
              looking for Assignments
            </Box>
          </Box>
        </Box>
        <Box
          component={"p"}
          sx={{
            fontFamily: "Bahnschrift",
            fontWeight: "300",
            fontSize: "32px",
            lineHeight: "38.41px",
            marginTop: "40px",
          }}
        >
          Already have an account?
          <Box
            component="span"
            sx={{ color: "#8A3CC4", fontWeight: "700", marginLeft: "1rem" }}
          >
            Log In
          </Box>{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default JoinPage;
