import { Box, Button, Typography } from "@mui/material";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts";
import { globalStyles } from "../../styles";
import { constants } from "../../constants";

const SectionFour = ({ setOpen }: { setOpen: (val: boolean) => void }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.innerContainer}>
        <LineChart width={350} height={300} data={constants.marketingGraph}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Line type="monotone" dataKey="main_ranch" stroke="#8884d8" />
        </LineChart>
        <Box
          sx={{
            maxWidth: "550px",
            alignSelf: { xs: "flex-start", lg: "center" },
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Make Data Driven Decisions
          </Typography>
          <Typography>
            Analyze your irrigation process with precission. Stop relying on
            antecdotes, and start making decisions based on data.
          </Typography>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            sx={styles.button}
            color="success"
          >
            Request Access
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionFour;

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "150px 0",
  },
  innerContainer: {
    display: "flex",
    flexDirection: { xs: "column-reverse", lg: "row" },
    maxWidth: { xs: "90%", lg: "1200px" },
    width: { xs: "90%", lg: "1200px" },
    gap: { xs: "70px" },
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: "50px",
    fontSize: "1rem",
    marginTop: "20px",
    background: globalStyles.gradientBg,
  },
};
