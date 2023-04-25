import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import { useNavigate } from "react-router-dom";
import SectionFour from "./SectionFour";
import Faq from "./Faq";

const Intro = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  useEffect(() => {
    if (user.username) {
      navigate("/home");
    }
  }, [navigate, user]);

  return (
    <>
      <Navbar />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Faq />
      <Footer />
    </>
  );
};

export default Intro;
