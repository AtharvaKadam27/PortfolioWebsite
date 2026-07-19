import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Landing from "../../components/Landing/Landing";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Landing />
      </div>
    </>
  );
};

export default Home;
