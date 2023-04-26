import "./App.css";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import LoginPage from "./components/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import { createContext, useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#060816",
    },
    secondary: {
      main: "#fff",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/intro",
    element: <Intro />,
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <LoginPage />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
]);

export const Context = createContext<any>(null);

const App = () => {
  const setVal = useState(true)[0];

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={setVal}>
        <Box
          sx={{
            minHeight: "calc(100vh - 68.5px)",
            maxWidth: "100vw",
          }}
        >
          <RouterProvider router={router} />
        </Box>
      </Context.Provider>
    </ThemeProvider>
  );
};

export default App;
