import React from "react";
import "./Landing.css";
import { GoDotFill } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegFileAlt, FaCode } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { GoStarFill } from "react-icons/go";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-left">
        <div className="land-work">
          <span className="land-green-dot"></span>
          <span>Let's work together</span>
        </div>
        <div className="land-name">
          <span>KADAM</span>
          <span>ATHARVA</span>
        </div>
        <div className="land-tech">
          <span>FRONTEND</span>
          <span>BACKEND</span>
          <span>DATABASE</span>
        </div>
        <div className="land-desc">
          <p>
            Full-Stack MERN Developer with hands-on experience building scalable
            web applications, REST APIs, and AI-powered platforms. Interned at
            Sheryians Coding School, published an open-source NPM package
            (secure-test-guard), and ranked Top 5 among 105 teams at the
            Samadhan 2.0 National Hackathon. I build things that work - from
            Next.js frontends to Express backends to LLM integrations.
          </p>
        </div>
        <div className="land-work-cv">
          <button>
            <HiOutlineShoppingBag />
            <span>VIEW ALL WORK</span>
          </button>
          <button>
            <FaRegFileAlt />
            <span>GET CV</span>
          </button>
        </div>
        <div className="land-social-links">
          <a
            href="mailto:atharvak396@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdAlternateEmail />
          </a>
          <a
            href="https://github.com/AtharvaKadam27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode />
          </a>
          <a
            href="https://twitter.com/atharvakadam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlinePeopleAlt />
          </a>
          <a
            href="https://www.instagram.com/atharvakadam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram />
          </a>
        </div>
      </div>
      <div className="landing-right">
        <div className="land-nav">
          <span className="land-circle"></span>
          <span className="land-circle"></span>
          <span className="land-circle"></span>
        </div>
        <div className="land-image">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt="photo"
          />
        </div>
        <span className="land-fullstack">FULL-STACK DEVELOPER</span>
        <span className="land-star">
          <GoStarFill />
        </span>
      </div>
    </div>
  );
};

export default Landing;
