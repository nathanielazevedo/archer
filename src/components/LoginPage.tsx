import {
  Box,
  Button,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import polygon from "../assets/polygons.png";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();
  useEffect(() => {
    if (user.username) {
      navigate("/home");
    }
  }, [navigate, user]);

  const handleSubmit = () => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/home");
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "center", lg: "space-evenly" },
          width: { xs: "90%", sm: "90%", lg: "100%" },
          flexDirection: { xs: "column", sm: "column", lg: "row" },
          minHeight: "calc(100vh - 68.5px)",
          backgroundColor: "#060816",
          // border: "1px solid white",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            marginBottom: { xs: "30px", sm: "30px" },
            width: { xs: "90%", sm: "auto", lg: "auto" },
          }}
        >
          <Typography variant="h4">Welcome Back</Typography>
          <Typography
            sx={{ display: { xs: "none", sm: "block", lg: "block" } }}
          >
            Please enter your email and password to login to your account.
          </Typography>
          <Box
            sx={{
              height: "150px",
              width: "150px",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              marginTop: "100px",
              display: { xs: "none", sm: "none", lg: "flex" },
            }}
          >
            <Box sx={{ display: { sm: "none", lg: "block" } }}>
              <img src={polygon} width={"300px"} />
            </Box>
          </Box>
        </Box>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              flexDirection: "column",
              gap: "20px",
              display: { xs: "flex", sm: "flex", lg: "none" },
              width: { xs: "90%", sm: "500px" },
            }}
          >
            <TextField
              label="Email"
              fullWidth
              value={formData.username}
              onChange={(e) => {
                setFormData({ ...formData, username: e.target.value });
              }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
            />
            <Button
              variant="contained"
              color="success"
              fullWidth
              sx={{
                fontWeight: "bold",
                height: "50px",
                color: "white",
                background:
                  "radial-gradient(926px at 2.7% 11%, #30a7d0 0%, rgb(178, 31, 102) 90%)",
              }}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Box>
        </ThemeProvider>
        <Box
          sx={{
            backgroundColor: "white",
            height: "80vh",
            width: "30vw",
            borderRadius: "10px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            display: { xs: "none", sm: "none", lg: "flex" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              width: "70%",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "black",
                alignSelf: "flex-start",
              }}
            >
              Login
            </Typography>
            <TextField
              label="Email"
              fullWidth
              value={formData.username}
              onChange={(e) => {
                setFormData({ ...formData, username: e.target.value });
              }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
            />
            <Button
              variant="contained"
              color="success"
              fullWidth
              sx={{
                fontWeight: "bold",
                height: "50px",
                background:
                  "radial-gradient(926px at 2.7% 11%, #30a7d0 0%, rgb(178, 31, 102) 90%)",
              }}
              onClick={handleSubmit}
            >
              Login
            </Button>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                color: "black",
                alignSelf: "flex-start",
                marginLeft: "5px",
              }}
            >
              Forgot Password
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
