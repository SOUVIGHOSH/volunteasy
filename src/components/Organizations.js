import React from "react";
import Box from "@mui/material/Box";
import Frame46 from "../assets/Frame46.svg";

const Organization = () => {
  return (
    <Box
      id="organization"
      sx={{
        position: "absolute",
        top: "1500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          fontFamily: "Arial Rounded MT Bold",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "40px",
          lineHeight: "40px",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        Organizations
      </Box>
      <Box
        sx={{
          fontFamily: "Bahnschrift",
          fontStyle: "normal",
          fontWeight: "300",
          fontSize: "20px",
          lineHeight: "24px",
          color: "rgba(118, 113, 113, 0.56)",
        }}
      >
        Find skills volunteers for any assignments
      </Box>
      <Box
        component={"img"}
        src={Frame46}
        alt="org offerings"
        sx={{
          width: "90vw",
          height: "413px",
        }}
      ></Box>
    </Box>
  );
};
export default Organization;
