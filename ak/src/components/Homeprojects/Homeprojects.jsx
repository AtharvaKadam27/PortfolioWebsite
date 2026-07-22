import React from "react";
import "./Homeprojects.css";
import webnews from "../../assets/web_hupDuvC79.webp";
import backend from "../../assets/backend-s_P2OJLt2PE.webp";
import support from "../../assets/flow-2_9oZFVj3Oy.webp";
import { MdTerminal } from "react-icons/md";
import { PiEyeBold } from "react-icons/pi";

const Homeprojects = () => {
  let skills = ["React.js", "HTML", "CSS", "Tailwind CSS"];
  return (
    <div className="homeprojects">
      <div className="homeskills-top">
        <div className="homeskills-item-top">
          <p>PORTFOLIO</p>
        </div>
        <div className="homeskills-item-bottom">
          <h2>SELECTED WORKS</h2>
          <button>VIEW ALL PROJECTS</button>
        </div>
      </div>
      <div className="homeprojects-bottom">
        <div className="homeprojects-bottom-horizontal">
          <div className="homeprojects-bottom-item-img">
            <img src={webnews} alt="webnews" />
          </div>
          <div className="homeprojects-bottom-item-text">
            <span>featured project</span>
            <h3>Tomato</h3>
            <div className="homeskills-bottom-skills">
              {skills.map((skill) => (
                <span>{skill}</span>
              ))}
            </div>
            <p>
              AI-powered full-stack tech news platform that aggregates web
              development news and generates concise summaries using Groq AI.
            </p>
            <div className="homeprojects-bottom-item-text-btn">
              <button>
                <PiEyeBold className="homeprojects-bottom-icon" />
                LIVE PROJECT
              </button>
              <button>
                <MdTerminal className="homeprojects-bottom-icon" />
                SOURCE CODE
              </button>
            </div>
          </div>
        </div>
        <div className="homeprojects-bottom-vertical">
          <div className="homeprojects-ver-item">
            <div className="homeprojects-ver-item-img">
              <img src={backend} alt="backend" />
            </div>
            <div className="homeprojects-ver-item-text">
              <span>NODE JS</span>
              <h3>TASK MANAGER</h3>
              <div className="homeskills-bottom-skills">
                {skills.map((skill) => (
                  <span>{skill}</span>
                ))}
              </div>
              <p>
                Open-source production-ready Node.js/Express backend template
                with MVC architecture, JWT auth, RBAC, CI/CD, and ESLint.
              </p>
              <div className="homeprojects-bottom-item-text-btn">
                <button>
                  <PiEyeBold className="homeprojects-bottom-icon" />
                  LIVE PROJECT
                </button>
                <button>
                  <MdTerminal className="homeprojects-bottom-icon" />
                  SOURCE CODE
                </button>
              </div>
            </div>
          </div>
          <div className="homeprojects-ver-item">
            <div className="homeprojects-ver-item-img">
              <img src={support} alt="support" />
            </div>
            <div className="homeprojects-ver-item-text">
              <span>NODE JS</span>
              <h3>AI RECRUITMENT</h3>
              <div className="homeskills-bottom-skills">
                {skills.map((skill) => (
                  <span>{skill}</span>
                ))}
              </div>
              <p>
                Open-source production-ready Node.js/Express backend template
                with MVC architecture, JWT auth, RBAC, CI/CD, and ESLint.
              </p>
              <div className="homeprojects-bottom-item-text-btn">
                <button>
                  <PiEyeBold className="homeprojects-bottom-icon" />
                  LIVE PROJECT
                </button>
                <button>
                  <MdTerminal className="homeprojects-bottom-icon" />
                  SOURCE CODE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeprojects;
