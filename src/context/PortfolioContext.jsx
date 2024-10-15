import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import {
  FaGithub,
  FaReact,
  FaJs,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaChalkboardTeacher,
  FaLaptopCode,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { MdWeb, MdDesignServices } from "react-icons/md";
import { AiOutlineLaptop } from "react-icons/ai";

// Create Context
export const PortfolioContext = createContext();

// Create Provider component
export const PortfolioProvider = ({ children }) => {
  // Portfolio Data
  const [portfolioData, setPortfolioData] = useState({
    user: {
      name: "Manojkumar Dalal",
      dob: "16-Feb-1987",
      nationality: "Indian",
      title: ["Frontend Developer", "React Developer", "Software Trainer"],
      description:
        "Passionate about building responsive, scalable, and efficient web applications using modern JavaScript frameworks.",
      image: "../ManojDalal.jpg",
      contact: {
        email: "rajhansmanoj77@gmail.com",
        phone: "+91 8308341531",
        address: "Nashik, Maharashtra, India",
      },
    },
    skills: [
      {
        id: 1,
        icon: <FaHtml5 size={80} className="text-orange-600" />,
        text: "HTML5",
      },
      {
        id: 2,
        icon: <FaCss3Alt size={80} className="text-blue-500" />,
        text: "CSS3",
      },
      {
        id: 3,
        icon: <FaBootstrap size={80} className="text-blue-500" />,
        text: "Bootstrap",
      },
      {
        id: 4,
        icon: <SiTailwindcss size={80} className="text-blue-400" />,
        text: "Tailwind CSS",
      },
      {
        id: 5,
        icon: <FaJs size={80} className="text-yellow-500" />,
        text: "JavaScript",
      },
      {
        id: 6,
        icon: <FaReact size={80} className="text-cyan-500" />,
        text: "React JS",
      },
      {
        id: 7,
        icon: <FaGithub size={80} className="text-gray-500" />,
        text: "Github",
      },
    ],
    projects: [
      {
        id: 1,
        title: "E-Commerce Application",
        image: "../project1.PNG",
        description:
          "The Fashion eCommerce Application is a fully responsive online store designed for selling men's, women's, and kids' fashion products.",
        link: "https://your-ecommerce-app.com",
        codeLink: "",
      },
      {
        id: 2,
        title: "Personal Portfolio",
        image: "../project2.PNG",
        description:
          "The Personal Portfolio Website is a modern, responsive, and visually appealing platform designed to showcase my skills, experiences & projects.",
        link: "https://manojkumardalal.netlify.app/",
        codeLink: "https://github.com/ManojkumarDalal/my-personal-portfolio",
      },
      {
        id: 3,
        title: "Fresh Fruit Store",
        image: "../project3.PNG",
        description:
          "Designed and developed an interactive and visually appealing landing page for an online fresh fruit store.",
        link: "https://main--freshfruitsapp.netlify.app/",
        codeLink: "https://github.com/ManojkumarDalal/fresh-fruits-app",
      },
    ],
    services: [
      {
        id: 1,
        title: "Responsive Web Design",
        description:
          "Creating mobile-friendly, responsive websites that work seamlessly on all devices.",
        icon: <FaLaptopCode size={60} className="text-red-500" />,
      },
      {
        id: 2,
        title: "Web Development",
        description:
          "Developing custom web applications tailored to meet client needs using HTML, CSS, JavaScript, and React.",
        icon: <MdWeb size={60} className="text-blue-500" />,
      },
      {
        id: 3,
        title: "UI/UX Design Integration",
        description:
          "Translating design mockups into fully functional, visually appealing web pages using modern frameworks.",
        icon: <MdDesignServices size={60} className="text-green-500" />,
      },
      {
        id: 4,
        title: "Single Page Applications (SPA) Development",
        description:
          "Building fast and dynamic single-page applications with React and Tailwind CSS.",
        icon: <AiOutlineLaptop size={60} className="text-purple-500" />,
      },
      {
        id: 5,
        title: "JavaScript Development",
        description:
          "Implementing dynamic features and interactivity through JavaScript and modern frameworks like React.js.",
        icon: <SiJavascript size={60} className="text-yellow-500" />,
      },
      {
        id: 6,
        title: "Software Training",
        description:
          "I provide comprehensive software training tailored to all experience levels, from beginners to advanced users.",
        icon: <FaChalkboardTeacher size={60} className="text-pink-500" />,
      },
    ],
    blogs: {
      JavaScript: [
        {
          id: 1,
          title: "Introduction to JavaScript",
          image: "../Introduction_to_javascript.PNG",
          description:
            "JavaScript is a powerful programming language used to create dynamic, interactive web content and handle both client-side and server-side development.",
          link: "https://medium.com/@rajhansmanoj77/introduction-to-javascript-the-language-of-the-web-86234a70e226",
        },
        {
          id: 2,
          title: "JavaScript Functions",
          image: "../javascript_function.PNG",
          description:
            "Mastering JavaScript functions empowers you to write reusable, efficient code that drives logic across applications. Functions are the core of JavaScript, enabling structured and modular programming.",
          link: "https://medium.com/@rajhansmanoj77/mastering-javascript-functions-a-comprehensive-guide-7fcf67d81bb9",
        },
        {
          id: 3,
          title: "ProtoType Inheritance in JavaScript",
          image: "../blog1.PNG",
          description:
            "Prototype inheritance in JavaScript allows objects to inherit properties and methods from a prototype object, enabling shared functionality and code reuse across instances.",
          link: "https://medium.com/@rajhansmanoj77/unraveling-prototypes-prototypal-inheritance-and-prototype-chaining-in-javascript-3dc865123aba",
        },
      ],
      React: [
        {
          id: 1,
          title: "Introduction to React",
          description: "Learn the basics of React and how it works.",
        },
        {
          id: 2,
          title: "React Hooks",
          image: "../blog1.PNG",
          description:
            "Understand the power of React Hooks like useState and useEffect.",
        },
      ],
      Tailwind: [
        {
          id: 1,
          title: "Getting Started with Tailwind CSS",
          description:
            "A quick start guide to using Tailwind CSS in your projects.",
        },
        {
          id: 2,
          title: "Responsive Design with Tailwind",
          description:
            "Learn how to create responsive designs using Tailwind’s utilities.",
        },
      ],
    },
    about:
      "I am a frontend developer with a focus on React JS and modern web development technologies. With over 12 years of experience in training and 1 year as a React JS developer, I am passionate about delivering high-quality web applications.",
  });

  return (
    <PortfolioContext.Provider value={{ portfolioData }}>
      {children}
    </PortfolioContext.Provider>
  );
};
// PropTypes validation for PortfolioProvider
PortfolioProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};
