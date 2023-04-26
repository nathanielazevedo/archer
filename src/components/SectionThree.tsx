import { Box, Button, Typography } from "@mui/material";
import Fields from "./Fields";

const SectionThree = ({ setOpen }: { setOpen: (val: boolean) => void }) => {
  return (
    <Box
      sx={{
        height: { xs: "100%", lg: "50vh" },
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: "10px",
        padding: { xs: "100px 0", lg: "0" },
      }}
    >
      <Box
        sx={{
          color: "black",
          display: "flex",
          flexDirection: { xs: "column-reverse", lg: "row" },
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "90%", lg: "1200px" },
          maxWidth: { xs: "90%", lg: "1200px" },
          gap: { xs: "70px", lg: "70px" },
        }}
      >
        <Box>
          <Fields />
        </Box>
        <Box
          sx={{
            maxWidth: { xs: "550px", lg: "500px" },
            alignSelf: { xs: "flex-start", lg: "center" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
            }}
          >
            Track Your Fields
          </Typography>
          <Typography>
            Get rid of the spreadsheets and start tracking your fields in one
            place. Get notified when your field is ready to be irrigated,
            sprayed, or harvested.
          </Typography>
          <Button
            variant="contained"
            fullWidth
            onClick={() => setOpen(true)}
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
