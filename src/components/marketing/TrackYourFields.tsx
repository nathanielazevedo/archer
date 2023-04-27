import { Box, Button, Typography } from "@mui/material";
import Fields from "../Fields";
import { globalStyles } from "../../styles";

const SectionThree = ({ setOpen }: { setOpen: (val: boolean) => void }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.innerContainer}>
        <Box>
          <Fields />
        </Box>
        <Box sx={styles.wordContainer}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Track Your Fields
          </Typography>
          <Typography>
            Get rid of the spreadsheets and start tracking your fields in one
            place. Get notified when your field is ready to be irrigated,
            sprayed, or harvested.
          </Typography>
          <Button
            fullWidth
            sx={styles.button}
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Request Access
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionThree;

const styles = {
  container: {
    height: { xs: "100%", lg: "50vh" },
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: "10px",
    padding: { xs: "100px 0", lg: "0" },
  },
  innerContainer: {
    color: "black",
    display: "flex",
    flexDirection: { xs: "column-reverse", lg: "row" },
    justifyContent: "center",
    alignItems: "center",
    width: { xs: "90%", lg: "1200px" },
    maxWidth: { xs: "90%", lg: "1200px" },
    gap: { xs: "70px", lg: "70px" },
  },
  wordContainer: {
    maxWidth: { xs: "550px", lg: "500px" },
    alignSelf: { xs: "flex-start", lg: "center" },
  },
  button: {
    marginTop: "20px",
    height: "50px",
    background: globalStyles.gradientBg,
  },
};
