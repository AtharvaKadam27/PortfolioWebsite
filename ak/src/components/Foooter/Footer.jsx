import React from "react";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h3 className="footer-logo">
          AK<span>.</span>
        </h3>
        <p>(c) 2026 ATHARVA KADAM. Built with MERN.</p>
      </div>
      <div className="footer-right">
        <a href="" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          Mail
        </a>
        <FaArrowUp className="footer-arrow-up" />
      </div>
    </div>
  );
};

export default Footer;
