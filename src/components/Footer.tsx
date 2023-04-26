import { Box, Typography } from "@mui/material";
import polygons from "../assets/polygons.png";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "20vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10rem",
        backgroundColor: "#060816",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "1.7rem",
            letterSpacing: ".3rem",
          }}
        >
          ARCHER
        </Typography>
        <Typography
          sx={{
            textDecoration: "italic",
          }}
        >
          Copyright 2023
        </Typography>
        <Typography>All Rights Reserved</Typography>
      </Box>
      <Box>
        <img src={polygons} alt="" style={{ width: "170px" }} />
      </Box>
    </Box>
  );
};

export default Footer;
