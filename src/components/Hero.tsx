import { Box, Button, Typography } from "@mui/material";
import polygons from "../assets/polygons.png";
import bg from "../assets/herobg.png";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        height: "80vh",
        alignItems: "center",
        maxWidth: "100vw",
        backgroundColor: "#060816",
        paddingLeft: "200px",

        // backgroundImage: `url(${bg})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          width: "500px",
          zIndex: 1,
          // marginRigth: "100px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
          }}
          mb={0.5}
          // color="success"
        >
          Modern Irrigation
        </Typography>
        <Typography mb={3}>
          Archer is an easy to install water sensor and an effective solution
          for farmers of all sizes. With Archer farmers can closely monitor
          their irrigation systems and receive real-time alerts regarding
          irrigation status. Stop checking water, let Archer do it for you.
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "50px",
            fontSize: "1rem",
            fontWeight: "bold",
            background:
              "radial-gradient(926px at 2.7% 11%, #30a7d0 0%, rgb(178, 31, 102) 90%)",
          }}
          color="success"
        >
          Request Access
        </Button>
      </Box>
      <img
        src={hero}
        alt=""
        style={{
          width: "600px",
          borderRadius: "50%",
          marginBottom: "200px",
          position: "absolute",
          top: "100px",
          right: "100px",
        }}
      />
      {/* <div style={{ width: "400px" }}></div> */}
    </Box>
  );
};

export default Hero;
