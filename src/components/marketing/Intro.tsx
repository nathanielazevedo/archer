import { useState } from "react";
import Faq from "./Faq";
import Hero from "./Hero";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AppStore from "./AppStore";
import SectionTwo from "./SectionTwo";
import SectionFour from "./SectionFour";
import SectionThree from "./SectionThree";
import RequestDialog from "./RequestDialog";

const Intro = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Hero setOpen={setDialogOpen} />
      <AppStore />
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
