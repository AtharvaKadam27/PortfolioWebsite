import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Landing from "../../components/Landing/Landing";
import Carousel from "../../components/Carousel/Carousel";
import Homeskills from "../../components/Homeskills/Homeskills";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Landing />
        <Carousel />
        <Homeskills />
      </div>
    </>
  );
};

export default Home;
