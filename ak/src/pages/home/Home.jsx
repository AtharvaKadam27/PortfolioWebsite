import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Landing from "../../components/Landing/Landing";
import Carousel from "../../components/Carousel/Carousel";
import Homeskills from "../../components/Homeskills/Homeskills";
import Homeprojects from "../../components/Homeprojects/Homeprojects";
import Homeachieve from "../../components/HomeAchievements/Homeachieve";
import Homework from "../../components/Homework/Homework";
import Footer from "../../components/Foooter/Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Landing />
        <Carousel />
        <Homeskills />
        <Homeprojects />
        <Homeachieve />
        <Homework />
        <Footer />
      </div>
    </>
  );
};

export default Home;
