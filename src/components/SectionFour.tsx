import { Box, Button, Typography } from "@mui/material";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts";

const SectionFour = ({ setOpen }: { setOpen: (val: boolean) => void }) => {
  const data = [
    {
      name: "5/10",
      main_ranch: 4,
    },
    {
      name: "5/17",
      main_ranch: 6,
    },
    {
      name: "5/24",
      main_ranch: 4,
    },
    {
      name: "5/31",
      main_ranch: 5,
    },
    {
      name: "6/7",
      main_ranch: 7,
    },
    {
      name: "6/14",
      main_ranch: 5,
    },
    {
      name: "6/21",
      main_ranch: 6,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "150px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", lg: "row" },
          maxWidth: { xs: "90%", lg: "1200px" },
          width: { xs: "90%", lg: "1200px" },
          gap: { xs: "70px" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LineChart width={350} height={300} data={data}>
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
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
            }}
          >
            Make Data Driven Decisions
          </Typography>
          <Typography>
            Analyze your irrigation process with precission. Stop relying on
            antecdotes, and start making decisions based on data.
          </Typography>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            sx={{
              width: "100%",
              height: "50px",
              fontSize: "1rem",
              marginTop: "20px",
              background:
                "radial-gradient(926px at 2.7% 11%, #30a7d0 0%, rgb(178, 31, 102) 90%)",
            }}
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
