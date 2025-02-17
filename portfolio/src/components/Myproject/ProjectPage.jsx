import { useEffect, useState } from "react";
import { assets, BACKEND_URL, myProjects, tools } from "../../assets/assets";
import { Fooder } from "../Fooder/Fooder";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";

export const ProjectPage = ({ isDarkMode, setIsDarkMode, project }) => {
  const [isScroll, setIsScroll] = useState(false);
  const { id } = useParams();
  const [proj, setProj] = useState([]);

  const findProject = async () => {
    const response = await fetch(
      `${BACKEND_URL}/api/v0/portfolio/project/${id}`
    );
    const data = await response.json();
    setProj([data.project]);
  };

  console.log(id);

  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 1) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
    findProject();
  }, [id]);

  console.log(proj);
  console.log(typeof proj);
  console.log(proj.length);

  return (
    <div
      className={`dark:bg-darkTheme w-full min-h-screen  relative   top-0 left-0 z-50
        
      }`}>
      <div className=" dark:hidden fixed top-0 right-0 -z-10 w-11/12 -translate-y-80">
        <img src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`sticky top-0 left-0 w-full flex justify-between z-50 items-center h-[80px]
       ${isScroll ? "   backdrop-blur-xl shadow-sm border-b" : ""} 
        ${isDarkMode ? " border-whiteBorder" : "border-none"}`}>
        <a href="">
          <img
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt=""
            className="w-48 ml-5 "
          />
        </a>

        <div className="flex gap-6 md:gap-4 items-center mr-5 ">
          <button className="">
            {isDarkMode ? (
              <img
                src={assets.sun_icon}
                alt=""
                className="w-6"
                onClick={() => setIsDarkMode((prev) => !prev)}
              />
            ) : (
              <img
                src={assets.moon_icon}
                alt=""
                className="w-6"
                onClick={() => setIsDarkMode((prev) => !prev)}
              />
            )}
          </button>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-3  px-4 py-1">
            Contact{" "}
            <img
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </a>
          <div className="">
            <img
              src={assets.profile_img}
              className="w-[40px] h-[40px] shadow-md shadow-gray-800 dark:shadow-white/70  rounded-full "
              alt=""
            />
          </div>
        </div>
      </nav>

      <div className=" relative w-11/12  mx-auto px-10    flex flex-col items-center justify-center">
        {/* <motion.div
          className="absolute  flex items-center justify-center
            text-[rgb(40,206,137)] top-2 right-2 w-44 h-44 -z-10 
              drop-shadow-[2px_2px_18px_rgb(0,0,0)]    dark:drop-shadow-[2px_2px_18px_rgb(255,255,255)]">
          <img src={tools.react_img} className="w-full  " alt="" />
        </motion.div>
        <motion.div
          animate={{ y: [-5, 10, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="absolute  flex items-center justify-center
            text-[rgb(40,206,137)] bottom-7 left-2 w-44 h-44 -z-10 
              drop-shadow-[2px_2px_18px_rgb(0,0,0)]    dark:drop-shadow-[2px_2px_18px_rgb(255,255,255)]">
          <img src={tools.react_img} className="w-full  " alt="" />
        </motion.div>
        <motion.div
          animate={{ x: [-5, 10, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="absolute  flex items-center justify-center
            text-[rgb(40,206,137)] bottom-2 right-16 w-44 h-44 -z-10 
              drop-shadow-[2px_2px_18px_rgb(0,0,0)]    dark:drop-shadow-[2px_2px_18px_rgb(255,255,255)]">
          <img src={tools.js_img} className="w-full  " alt="" />
        </motion.div>

        <motion.div
          className="absolute  flex items-center justify-center
            text-[rgb(40,206,137)] top-40 right-2 w-44 h-44 -z-10 
              drop-shadow-[2px_2px_18px_rgb(0,0,0)]    dark:drop-shadow-[2px_2px_18px_rgb(255,255,255)]">
          <img src={tools.firebase} className="w-16  " alt="" />
        </motion.div>

        <motion.div
          className="absolute  flex items-center justify-center
            text-[rgb(40,206,137)] top-40 left-2 w-44 h-44 -z-10 
              drop-shadow-[2px_2px_18px_rgb(0,0,0)]    dark:drop-shadow-[2px_2px_18px_rgb(255,255,255)]">
          <img src={tools.tailwind_icon} className="w-28  " alt="" />
        </motion.div>

        <motion.div
          className="absolute  flex items-center justify-center
            text-[rgb(40,206,137)] -bottom-[30px] left-2 w-[350px] -z-10 
              drop-shadow-[2px_2px_18px_rgb(0,0,0)]  rounded-lg   dark:drop-shadow-[2px_2px_6px_rgb(255,255,255)]">
          <img src={assets.video1_gif} className="w-full  " alt="" />
        </motion.div> */}

        {/* */}
        <img
          loading="lazy"
          src={
            proj.length == 1
              ? `${BACKEND_URL}/uploads/${proj[0].image}`
              : myProjects[0].image
          }
          className="w-[150px] h-[150px] rounded-full my-3 shadow-md dark:shadow-white/70 shadow-gray-900"
          alt=""
        />
        <h1 className="text-5xl font-bold text-center">
          {proj.length == 1 && proj[0].title}
        </h1>
        <div className="mx-auto mt-5 ">
          <h3 className="max-w-[800px] text-center leading-8 ">
            {proj.length == 1 && proj[0].description}
          </h3>
        </div>

        <div className="mx-auto flex items-center my-3 gap-2 justify-center ">
          <Link
            to={` ${
              proj.length == 1 && proj.length == 1 && proj[0].github_link
            }`}>
            <button className="py-2 px-3 flex items-center gap-3 bg-black dark:bg-white  rounded-full">
              <p className="font-bold text-center text-white dark:text-darkTheme">
                Git Hub
              </p>
              <img
                src={isDarkMode ? assets.git_dark_img : assets.git_white_img}
                className="w-6"
                alt=""
              />
            </button>
          </Link>
          <Link to={proj.length == 1 && proj[0].website_link}>
            <button className="py-2 px-3 flex items-center gap-3 border border-darkTheme dark:border-gray-400 rounded-full">
              <p className="font-bold ">Live Demo</p>
              <img
                src={isDarkMode ? assets.web_white_img : assets.web_dark_img}
                className="w-6"
                alt=""
              />
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2 flex-wrap mt-3">
          <img
            src={assets.video1_gif}
            className="w-[370px] md:w-[500px] mb-10   drop-shadow-[2px_2px_18px_rgb(0,0,0)] rounded-lg    dark:drop-shadow-[2px_2px_18px_rgb(255,255,255)]"
            alt=""
          />
          <div className="relative w-[500px] mt-16">
            <motion.div
              animate={{ x: [-5, 10, -5, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="absolute  flex items-center justify-center
            text-[rgb(40,206,137)] bottom-2 right-16 w-44 h-44 -z-10 
              drop-shadow-[2px_2px_18px_rgb(0,0,0)]    dark:drop-shadow-[2px_2px_18px_rgb(255,255,255)]">
              <img src={tools.js_img} className="w-full  " alt="" />
            </motion.div>
            <motion.div
              animate={{ y: [-5, 10, -5, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="absolute  flex items-center justify-center
            text-[rgb(40,206,137)] bottom-7 left-2 w-44 h-44 -z-10 
              drop-shadow-[2px_2px_18px_rgb(0,0,0)]    dark:drop-shadow-[2px_2px_18px_rgb(255,255,255)]">
              <img src={tools.react_img} className="w-full  " alt="" />
            </motion.div>

            <motion.div
              animate={{ y: [-5, 10, -5, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="absolute  flex items-center justify-center
            text-[rgb(40,206,137)] bottom-0 left-40 w-12 h-44 -z-10 
              drop-shadow-[2px_2px_18px_rgb(0,0,0)]    dark:drop-shadow-[2px_2px_18px_rgb(255,255,255)]">
              <img src={tools.mongodb} className="w-full  " alt="" />
            </motion.div>

            <div className=" w-full">
              <img
                src={tools.firebase}
                className="mx-auto w-[100px]  drop-shadow-[2px_2px_18px_rgb(0,0,0)]    dark:drop-shadow-[2px_2px_18px_rgb(255,255,255)]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto flex items-center justify-evenly flex-wrap gap-24 py-10 ">
        <div className="w-[500px]">
          <h3 className="font-bold text-xl my-2 ">
            Added technology this project{" "}
          </h3>
          {proj.length == 1 &&
            proj[0].added_technology.map((item, index) => (
              <>
                <h2 className="font-bold text-lg my-2">{item.category}</h2>
                <div className="w-full flex gap-3 flex-wrap">
                  {item.technologies.map((tech, index) => (
                    <p className="text-sm py-1 px-3 rounded-lg bg-darkTheme text-white dark:bg-white dark:text-gray-900  text-center">
                      {tech}
                    </p>
                  ))}
                </div>
              </>
            ))}

          <div className=" flex flex-col gap-2 mt-4">
            <a
              className="text-sm  hover:text-blue-700"
              href={myProjects[2].github_link}>
              {myProjects[2].github_link}
            </a>
            <a
              className="text-sm  hover:text-blue-700"
              href={myProjects[2].website_link}>
              {myProjects[2].website_link}
            </a>
          </div>
        </div>
        <div className="">
          <img
            src={proj.length == 1 && `${BACKEND_URL}/uploads/${proj[0].image}`}
            className="w-[400px]"
            alt=""
          />
        </div>
      </div>
      <Fooder isDarkMode={isDarkMode} />
    </div>
  );
};
