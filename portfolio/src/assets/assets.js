import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import footer_img from "./footer-bg-color.png";
import tailwind_icon from "./tailwind.png";
import json_icon from "./json.png";
import api_icon from "./api.png";

import mahal_project_img from "./mahal_img.png";
import portfolio_project_img from "./portfolio_img.png";
import crud_project_img from "./crud_img.png";
import mobile_project_img from "./mobile_img.png";
import web_white_img from "./web_white.png";
import web_dark_img from "./web_dark.png";
import git_white_img from "./git_white.png";
import git_dark_img from "./git_dark.png";
import react_img from "./react.png";
import js_img from "./js.png";

import video1_gif from "./video1.gif";
import video2_gif from "./video2.gif";

export const otherTechnology = [tailwind_icon, json_icon, api_icon];

// {
//   title: "",
//   image: "",
//   description: "",
//   added_technology: "",
//   github_link: "",
//   website_link: "",
// },

export const BACKEND_URL = "https://fullstack-portfolio-jiwm.onrender.com";

export const tools = {
  react_img,
  js_img,
  tailwind_icon,
  vscode,
  firebase,
  mongodb,
};
export const myProjects = [
  {
    title: "Mahal Booking System",
    image: mahal_project_img,
    description:
      "Developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js), it incorporates e-commerce capabilities, enabling users to effortlessly choose venues and purchase additional services in a single, unified system. This project provides a wealth of knowledge, helping me to learn and apply concepts in full-stack development, database management, e-commerce integration, and user-centric design.",
    added_technology: [
      { Frondend: ["React.js", "Tailwind CSS", "ToastContainer", "axios"] },
      { Backend: ["Express.js ", " Node.js", "MongoDB"] },
      { Security_Authentication: ["bcrypt", "JSON Web Token (JWT)"] },
      { Utilities: ["Moment.js for date and time formatting"] },
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
        Frontend: [
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
  // {
  //   title: "My Portfolio website",
  //   image: portfolio_project_img,
  //   description: `This project is a modern portfolio website built using React.js and styled with Tailwind CSS,
  //      featuring a dynamic light/dark mode toggle. The website provides an elegant and user-friendly interface to
  //      showcase my skills, projects, and achievements while offering
  //      a personalized experience for users through the light and dark theme options.
  //       The clean, minimal design adapts to different environments and preferences, enhancing accessibility
  //        and user satisfaction.`,
  //   added_technology: [
  //     {
  //       Frontend: [
  //         "React.js",
  //         "Tailwind CSS",
  //         "React Router",
  //         "React State Management",
  //       ],
  //     },
  //   ],
  //   github_link:
  //     "https://github.com/RamakrishnanPrakash/Wedding-Venue-Booking-System",
  //   website_link: "ss",
  // },
  {
    title: "Add to Cart Functionality",
    image: mobile_project_img,
    description: `This project focuses on building the "Add to Cart" functionality for an e-commerce
      website using HTML, CSS, and JavaScript (DOM manipulation). The system fetches product data from a
      JSON file and dynamically updates the cart when users add items to it.
       The project aims to provide a smooth user experience for browsing products and managing the cart.`,
    added_technology: [
      { Frondend: ["HTML", "CSS", "JavaScript (DOM Manipulation)", "Json"] },
    ],
    github_link:
      "https://github.com/RamakrishnanPrakash/Wedding-Venue-Booking-System",
    website_link:
      "https://shoppingkart-60028913586.development.catalystserverless.in/app/index.html",
  },
  {
    title: "CRUD Application ",
    image: crud_project_img,
    description: `This project is a full-stack CRUD (Create, Read, Update, Delete) application built with Node.js,
       Express.js, MongoDB, and EJS Template Engine. The application allows users to perform CRUD operations
        on data stored in a MongoDB database. It features an intuitive user interface
       and handles requests efficiently using Express.js, providing a seamless experience for managing data.`,
    added_technology: [
      { Frontend: ["EJS", "Template", "Engine HTML & CSS"] },
      { Backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"] },
    ],

    github_link:
      "https://github.com/RamakrishnanPrakash/Wedding-Venue-Booking-System",
    website_link:
      "https://github.com/RamakrishnanPrakash/Wedding-Venue-Booking-System",
  },
];

export const assets = {
  video1_gif,

  video2_gif,
  web_white_img,
  web_dark_img,
  git_white_img,
  git_dark_img,
  footer_img,

  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work-1.png",
  },
  {
    title: "Geo based app",
    description: "Mobile App",
    bgImage: "/work-2.png",
  },
  {
    title: "Photography site",
    description: "Web Design",
    bgImage: "/work-3.png",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "MERN Stack Development",
    description:
      "Build full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Responsive Web Design",
    description:
      "Create mobile-friendly, fully responsive websites that look great on all devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience.Create designs that align with client goals",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js ,Node Js, C,Python",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Diploma in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
