import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import "./Homework.css";

const Homework = () => {
  return (
    <div className="homework">
      <div className="homework-left">
        <h3>
          Let's work <span>together</span>
        </h3>
        <p>
          Have a project in mind or just want to say hi? I'm currently open to
          new opportunities and collaborations.
        </p>
        <div className="homework-left-mail">
          <MdOutlineEmail className="homework-left-mail-icon" />
          <a href="mailto:atharvak396@example.com">atharvak396@example.com</a>
        </div>
      </div>
      <div className="homework-right">
        <h4>Ready To Start?</h4>
        <p>
          I'm currently open to new opportunities and collaborations. Let's
          build something exceptional together.
        </p>
        <div className="homework-right-button">
          <button>Lets talk</button>
          <button>Get cv</button>
        </div>
      </div>
    </div>
  );
};

export default Homework;
