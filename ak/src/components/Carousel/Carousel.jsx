import React from "react";
import "./Carousel.css";
import { GoStarFill } from "react-icons/go";

const Carousel = () => {
  let carouselItems = [
    "OpenAI API",
    "Groq AI",
    "Anthropic Claude SDK",
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Auth",
    "RBAC",
    "Socket.io",
    "Axios",
    "NextAuth.js",
    "Multer / File Uploads",
    "MongoDB",
    "Mongoose",
    "Prisma",
    "PostgreSQL",
    "Redis (Upstash)",
    "Git &amp; GitHub",
    "GitHub Actions",
    "CI/CD",
    "Vercel",
    "Netlify",
    "NPM",
    "ESLint / Prettier",
    "Postman",
    "Figma",
    "VS Code",
    "ImageKit / Cloudinary",
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "TanStack Query",
    "Tailwind CSS",
    "SCSS",
    "GSAP",
    "Framer Motion",
    "Bootstrap",
    "Zod",
    "React Hook Form",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
  ];
  return (
    <div className="carousel">
      <div className="carousel-grp">
        {carouselItems.map((item, index) => (
          <div className="carousel-item" key={item}>
            <span className="carousel-item-text">{item}</span>
            <span>
              <GoStarFill />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
