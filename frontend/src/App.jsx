import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Features from "./Components/Features";
import Card from "./Components/Card";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Features></Features>
      {/* <Main></Main> */}
      <Skills></Skills>

      <Footer></Footer>
    </>
  );
};

export default App;
