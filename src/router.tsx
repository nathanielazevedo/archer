import Home from "./components/Home";
import Intro from "./components/marketing/Intro";
import Navbar from "./components/marketing/Navbar";
import LoginPage from "./components/LoginPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
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
    element: <Home />,
  },
]);
