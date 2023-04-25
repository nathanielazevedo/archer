import { Box, Button, Typography } from "@mui/material";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

const SectionFour = () => {
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
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "150px 180px",
        backgroundColor: "#060816",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: "white",
          }}
        >
          Make Data Driven Decisions
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <LineChart width={630} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              label={{
                value: "hours",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="main_ranch" stroke="#8884d8" />
          </LineChart>
          <Box sx={{ marginLeft: "50px" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
              Data
            </Typography>
            <Typography>
              Analyze your irrigation process with precission. Stop relying on
              antecdotes, and start making decisions based on data.
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                height: "50px",
                fontSize: "1rem",
                fontWeight: "bold",
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
    </Box>
  );
};

export default SectionFour;
