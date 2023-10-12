import React from "react";
//import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./landingpagecomponents/navbar/Navbar"
import Navbars from "./landingpagecomponents/navbars/Navbars"
import Header from "./landingpagecomponents/header/Header"

import Footer from "./landingpagecomponents/footer/Footer";


function LandingPage() {
  return (
    <>
      <Navbar />
      <Navbars />
      <Header />
      <Footer />
    </>
      
  );
}

export default LandingPage;