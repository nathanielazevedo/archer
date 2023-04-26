import { Box } from "@mui/material";
import { useEffect } from "react";
import Fields from "./Fields";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    if (!user.username) {
      navigate("/login");
    }
  }, [navigate, user]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "5rem",
      }}
    >
      <Fields />
    </Box>
  );
};

export default Home;
