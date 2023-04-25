import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import polygon from "../assets/polygons.png";

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
          justifyContent: "space-evenly",
          minHeight: "calc(100vh - 68.5px)",
          backgroundColor: "#060816",
        }}
      >
        <Box>
          <Typography variant="h3">Welcome Back</Typography>
          <Typography>
            Please enter your email and password to login to your account.
          </Typography>
          <Box
            sx={{
              height: "150px",
              width: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "auto",
              marginTop: "100px",
            }}
          >
            <img src={polygon} width={"300px"} />
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            height: "80vh",
            width: "30vw",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
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
