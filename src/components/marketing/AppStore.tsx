import { Box, Typography } from "@mui/material";
import { app_store } from "../../assets";

const SectionOne = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.innerContainer}>
        <Box>
          <Typography color="black" variant="h4" fontWeight="bold" mb={1}>
            Download the App
          </Typography>
          <Typography color="black">
            Stop checking your irrigation system manually. Archer is an easy to
            use water sensor that will notify you when your irrigation is done.
            Download the app and get started.
          </Typography>
        </Box>
        <Box sx={styles.imageContainer}>
          <img src={app_store} width="200px"></img>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionOne;

const styles = {
  container: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "70px 0 ",
    borderRadius: "10px",
  },
  innerContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: { xs: "column", lg: "row" },
    alignItems: "center",
    width: { xs: "90%", lg: "100%" },
    maxWidth: "1200px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    paddingTop: { xs: "50px", lg: "0" },
  },
};
