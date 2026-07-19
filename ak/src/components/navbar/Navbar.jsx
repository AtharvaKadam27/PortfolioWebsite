import React from "react";
import "./Navbar.css";
import { AiOutlineSend } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          AK<span>.</span>
        </h1>
      </div>
      <div className="links">
        <a href="">HOME</a>
        <a href="">ABOUT</a>
        <a href="">SKILLS</a>
        <a href="">PROJECTS</a>
        <a href="">CONTACT</a>
      </div>
      <div className="hireme">
        <button>
          <AiOutlineSend className="send-icon" />
          <span>HIRE ME</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
