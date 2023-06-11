import React from "react";
import Logo from "../assets/171_Logo.svg";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";

const GetInTouch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Access form data here
  };
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
        sx={{
          borderBottom: "1px solid #8A3CC4",
          width: "1140px",
          marginTop: "5px",
        }}
      />
      <Box
        sx={{
          height: "1072px",
          width: "1140px",
          background: "#FFFFFF",
          border: "1px solid #8A3CC4",
          borderRadius: "100px",
          marginTop: "105px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2%",
        }}
      >
        <Box
          component="span"
          sx={{
            fontFamily: "Arial Rounded MT Bold",
            color: "#8A3CC4",
            fontSize: "36px",
            lineHeight: "35px",
            fontWeight: "400",
            marginBottom: "20px",
          }}
        >
          Get in touch !
        </Box>
        <Box
          component={"p"}
          sx={{
            fontFamily: "Bahnschrift",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "30px",
            height: "63px",
            width: "80%",
            textAlign: "center",
          }}
        >
          If you have any questions, would like a demo or would like to sign up
          simply just fill up your details below founder & CEO will be in touch
        </Box>
        <Box
          component="form"
          sx={{ marginTop: "20px", display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box
            sx={{
              display: "flex",
              marginBottom: "10px",
            }}
          >
            <Box
              sx={{
                width: "145px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              component={"label"}
              htmlFor="fullName"
            >
              Full Name
            </Box>
            <TextField
              sx={{
                width: "445px",
                marginLeft: "20px",
              }}
              id="fullName"
              {...register("fullName", { required: "Full Name is required" })}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName && errors.fullName.message}
              fullWidth
            />
          </Box>
          <Box sx={{ display: "flex", marginBottom: "10px" }}>
            <Box
              sx={{
                width: "145px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              component={"label"}
              htmlFor="email"
            >
              Email address
            </Box>
            <TextField
              sx={{
                width: "445px",
                marginLeft: "20px",
              }}
              id="email"
              {...register("email", { required: "Email address is required" })}
              error={Boolean(errors.fullName)}
              helperText={errors.email && errors.email.message}
              fullWidth
            />
          </Box>
          <Box sx={{ display: "flex", marginBottom: "10px" }}>
            <Box
              sx={{
                width: "145px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              component={"label"}
              htmlFor="organization"
            >
              Organization Name
            </Box>
            <TextField
              sx={{
                width: "445px",
                padding: "0",
                marginLeft: "20px",
              }}
              id="organization"
              {...register("organization", {
                required: "Organization Name is required",
              })}
              error={Boolean(errors.organization)}
              helperText={errors.organization && errors.organization.message}
              fullWidth
            />
          </Box>

          <Box sx={{ display: "flex", marginBottom: "10px" }}>
            <Box
              sx={{
                width: "145px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              component={"label"}
              htmlFor="title"
            >
              Job Title
            </Box>
            <TextField
              sx={{
                width: "445px",
                padding: "0",
                marginLeft: "20px",
              }}
              id="title"
              {...register("title", {
                required: "Job title is required",
              })}
              error={Boolean(errors.title)}
              helperText={errors.title && errors.title.message}
              fullWidth
            />
          </Box>
          <Box sx={{ display: "flex", marginBottom: "10px" }}>
            <Box
              sx={{
                width: "145px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              component={"label"}
              htmlFor="phone"
            >
              Phone Number
            </Box>
            <TextField
              sx={{
                width: "445px",
                padding: "0",
                marginLeft: "20px",
                marginRight: "145px",
              }}
              id="phone"
              {...register("phone", {
                required: "Phone Number is required",
              })}
              error={Boolean(errors.phone)}
              helperText={errors.phone && errors.phone.message}
              fullWidth
            />
          </Box>
          <Box sx={{ display: "flex", marginBottom: "10px" }}>
            <Box
              component={"input"}
              type="checkbox"
              {...register("myCheckbox")}
            ></Box>
            <Box
              component={"p"}
              sx={{
                fontFamily: "Bahnschrift",
                fontWeight: "300",
                fontSize: "20px",
                lineHeight: "35px",
                marginLeft: "20px",
                color: "#707070",
              }}
            >
              Receive exiting new and updates form Volunteasy
            </Box>
          </Box>
          <Button
            sx={{
              textAlign: "center",
              alignSelf: "center",
              justifyContent: "center",
              width: "200px",
              height: "58px",
              background: "#8A3CC4",
              borderRadius: "30px",
              marginTop: "30px",
            }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Get in Touch
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GetInTouch;
