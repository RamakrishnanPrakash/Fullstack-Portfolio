import logo from "./logo.png";
import add_icon from "./add_icon.png";
import right_arrow from "./right-arrow.png";
import list_icon from "./list_icon.png";
import profile_img from "./profile-img.png";
import msg_icon from "./msg_icon.png";
import upload_area from "./upload_area.png";
import update_icon from "./update_icon.png";
import down_arrow from "./down_arrow.png";
import bg from "./bg.jfif";
export const assets = {
  logo,
  add_icon,
  right_arrow,
  list_icon,
  profile_img,
  msg_icon,
  upload_area,
  update_icon,
  down_arrow,
  bg,
};

import mahal_project_img from "./mahal_img.png";
import portfolio_project_img from "./portfolio_img.png";
import crud_project_img from "./crud_img.png";
import mobile_project_img from "./mobile_img.png";

export const myProjects = [
  {
    title: "Mahal Booking System",
    image: mahal_project_img,
    description:
      "Developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js), it incorporates e-commerce capabilities, enabling users to effortlessly choose venues and purchase additional services in a single, unified system. This project provides a wealth of knowledge, helping me to learn and apply concepts in full-stack development, database management, e-commerce integration, and user-centric design.",
    added_technology: [
      {
        categories: "Frondend",
        technologies: ["React.js", "Tailwind CSS", "ToastContainer", "axios"],
      },
      {
        categories: "Backend",
        technologies: ["Express.js ", " Node.js", "MongoDB"],
      },
      {
        categories: "Security_Authentication",
        technologies: ["bcrypt", "JSON Web Token (JWT)"],
      },
      {
        categories: "Utilities",
        technologies: ["Moment.js for date and time formatting"],
      },
    ],
    github_link:
      "https://github.com/RamakrishnanPrakash/Wedding-Venue-Booking-System",
    website_link:
      "https://github.com/RamakrishnanPrakash/Wedding-Venue-Booking-System",
  },
  {
    title: "My Portfolio website",
    image: portfolio_project_img,
    description: `This project is a modern portfolio website built using React.js and styled with Tailwind CSS,
       featuring a dynamic light/dark mode toggle. The website provides an elegant and user-friendly interface to
       showcase my skills, projects, and achievements while offering
       a personalized experience for users through the light and dark theme options.
        The clean, minimal design adapts to different environments and preferences, enhancing accessibility
         and user satisfaction.`,
    added_technology: [
      {
        categories: "Frontend",
        technologies: [
          "React.js",
          "Tailwind CSS",
          "React Router",
          "React State Management",
        ],
      },
    ],
    github_link:
      "https://github.com/RamakrishnanPrakash/Wedding-Venue-Booking-System",
    website_link: "https://ramkrishnanportfolio.netlify.app/",
  },

  {
    title: "Add to Cart Functionality",
    image: mobile_project_img,
    description: `This project focuses on building the "Add to Cart" functionality for an e-commerce
      website using HTML, CSS, and JavaScript (DOM manipulation). The system fetches product data from a
      JSON file and dynamically updates the cart when users add items to it.
       The project aims to provide a smooth user experience for browsing products and managing the cart.`,
    added_technology: [
      {
        categories: "Frondend",
        technologies: ["HTML", "CSS", "JavaScript (DOM Manipulation)", "Json"],
      },
    ],
    github_link:
      "https://github.com/RamakrishnanPrakash/Wedding-Venue-Booking-System",
    website_link:
      "https://shoppingkart-60028913586.development.catalystserverless.in/app/index.html",
  },
  {
    title: "CRUD Application",
    image: crud_project_img,
    description: `This project is a full-stack CRUD (Create, Read, Update, Delete) application built with Node.js,
       Express.js, MongoDB, and EJS Template Engine. The application allows users to perform CRUD operations
        on data stored in a MongoDB database. It features an intuitive user interface
       and handles requests efficiently using Express.js, providing a seamless experience for managing data.`,
    added_technology: [
      {
        categories: "Frontend",
        technologies: ["EJS", "Template", "Engine HTML & CSS"],
      },
      {
        categories: "Backend",
        technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      },
    ],

    github_link:
      "https://github.com/RamakrishnanPrakash/Wedding-Venue-Booking-System",
    website_link:
      "https://github.com/RamakrishnanPrakash/Wedding-Venue-Booking-System",
  },
];
export const BACKEND_URL = "https://fullstack-portfolio-jiwm.onrender.com";
