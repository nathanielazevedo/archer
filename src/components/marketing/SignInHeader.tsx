import { Box, Typography } from "@mui/material";
import { polygons } from "../../assets";

const SignInHeader = () => {
  return (
    <Box
      style={{
        marginTop: "40%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: "20px",
      }}
    >
      <img src={polygons} alt="" style={{ width: "100px" }} />
      <Typography
        variant="h6"
        noWrap
        sx={{
          ml: 2,
          fontWeight: 400,
          fontSize: "1.7rem",
          letterSpacing: ".3rem",
        }}
      >
        AGRISYNC
      </Typography>
    </Box>
  );
};

export default SignInHeader;
