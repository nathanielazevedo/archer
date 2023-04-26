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
import RequestDialog from "./RequestDialog";

const Intro = () => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  useEffect(() => {
    if (user.username) {
      navigate("/home");
    }
  }, [navigate, user]);

  return (
    <>
      <Navbar />
      <Hero setOpen={setDialogOpen} />
      <SectionOne />
      <SectionTwo setOpen={setDialogOpen} />
      <SectionThree setOpen={setDialogOpen} />
      <SectionFour setOpen={setDialogOpen} />
      <Faq />
      <Footer />
      <RequestDialog open={dialogOpen} setOpen={setDialogOpen} />
    </>
  );
};

export default Intro;
