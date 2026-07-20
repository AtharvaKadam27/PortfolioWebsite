import React from "react";
import "./Homeskills.css";
import { RiComputerLine } from "react-icons/ri";
import { GoServer } from "react-icons/go";
import { FiDatabase } from "react-icons/fi";
import { SiSnowflake } from "react-icons/si";

const Homeskills = () => {
  const skillsData = [
    {
      id: 1,
      icon: RiComputerLine,
      color: "fdd700",
      category: "JAVASCRIPT & REACT.JS",
      title: "Frontend",
      description:
        "Responsive, fast, and polished interfaces built with React, Next.js, Tailwind CSS, state management, and motion where it supports the experience.",
      skills: ["React.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      id: 2,
      icon: GoServer,
      color: "03ecfd",
      category: "Node Systems",
      title: "Backend",
      description:
        "Production-ready APIs with Node.js, Express, MongoDB, authentication, validation, uploads, queues, and clean service boundaries.",
      skills: ["Node.js", "Express", "MongoDB", "JWT Auth"],
    },
    {
      id: 3,
      icon: FiDatabase,
      color: "fe6a00",
      category: "Data Layer",
      title: "Database",
      description:
        "Schema design, indexing, and query optimization across document and relational databases with caching layers for fast, scalable APIs.",
      skills: ["Mongoose", "Supabase", "MongoDB", "Redis Cache"],
    },
    {
      id: 4,
      icon: SiSnowflake,
      color: "fff",
      category: "Front + Back",
      title: "Full Stack",
      description:
        "End-to-end product delivery across frontend, backend, data, deployment, and admin tooling so ideas become usable shipped systems.",
      skills: ["MERN Stack", "Admin CMS", "AI Features", "Deployment"],
    },
  ];
  return (
    <div className="homeskills">
      <div className="homeskills-top">
        <div className="homeskills-item-top">
          <p>EXPERTISE</p>
        </div>
        <div className="homeskills-item-bottom">
          <h2>My Skill Set</h2>
          <button>VIEW ALL SKILLS</button>
        </div>
      </div>
      <div className="homeskills-bottom">
        {skillsData.map((skill) => (
          <div className="homeskills-bottom-box">
            <div
              className="homeskills-bottom-icon"
              style={{ backgroundColor: `#${skill.color}` }}
            >
              <skill.icon />
            </div>
            <span>{skill.category}</span>
            <h4>{skill.title}</h4>
            <p>{skill.description}</p>
            <div className="homeskills-bottom-skills">
              {skill.skills.map((skill) => (
                <span>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homeskills;
