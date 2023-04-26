import { Box, Button, Typography } from "@mui/material";
import Fields from "./Fields";

const SectionThree = () => {
  return (
    <Box
      sx={{
        height: "50vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          color: "black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "1100px",
        }}
      >
        <Box>
          <Fields />
        </Box>
        <Box sx={{}}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
            }}
          >
            Track fields
          </Typography>
          <Typography>
            Get rid of the spreadsheets and start tracking your fields in one
            place. Get notified when your field is ready to be irrigated,
            sprayed, or harvested.
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              marginTop: "20px",
              height: "50px",
              background:
                "radial-gradient(926px at 2.7% 11%, #30a7d0 0%, rgb(178, 31, 102) 90%)",
            }}
          >
            Request Access
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionThree;
