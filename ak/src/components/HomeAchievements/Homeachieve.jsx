import React from "react";
import "./Homeachieve.css";
import { GrTrophy } from "react-icons/gr";

const Homeachieve = () => {
  return (
    <div className="homeachieve">
      <div className="homeskills-top">
        <div className="homeskills-item-top">
          <p>MILESTONES</p>
        </div>
        <div className="homeskills-item-bottom">
          <h2>ACHIEVEMENTS</h2>
          <button>VIEW ALL ACHIEVEMENTS</button>
        </div>
      </div>
      <div className="homeachieve-bottom">
        <div className="homeachieve-bottom-item">
          <div className="homeachieve-bottom-icon">
            <GrTrophy />
          </div>
          <p className="homeachieve-bottom-yrs">2025-26</p>
          <h4>Sheryians Coding School Hackathon 2026 - SupportFlow AI</h4>
          <span>Sheryians Coding School</span>
        </div>
        <div className="homeachieve-bottom-item">
          <div className="homeachieve-bottom-icon">
            <GrTrophy />
          </div>
          <p className="homeachieve-bottom-yrs">2025-26</p>
          <h4>Sheryians Coding School Hackathon 2026 - SupportFlow AI</h4>
          <span>Sheryians Coding School</span>
        </div>
        <div className="homeachieve-bottom-item">
          <div className="homeachieve-bottom-icon">
            <GrTrophy />
          </div>
          <p className="homeachieve-bottom-yrs">2025-26</p>
          <h4>Sheryians Coding School Hackathon 2026 - SupportFlow AI</h4>
          <span>Sheryians Coding School</span>
        </div>
      </div>
    </div>
  );
};

export default Homeachieve;
