import { useState, useRef, useEffect } from "react";
import { assets, myProjects } from "../../assets/assets";
import { motion } from "motion/react";

export const Project = ({ isDarkMode }) => {
  const [projectData, setProjectData] = useState([myProjects[0]]);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const ExploreProjectContainerRef = useRef();

  const closeContainer = () => {
    setIsProjectOpen(false);
    console.log(ExploreProjectContainerRef.current);
  };

  const openContainer = (project) => {
    setProjectData([{ ...project }]);
    setIsProjectOpen(true);
  };
  console.log(projectData);

  const ExploreProject = ({ projectData, setProjectData }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        ref={ExploreProjectContainerRef}
        className={
          isProjectOpen
            ? ` w-[100vw] h-[130vh] md:h-screen fixed top-20 right-0 z-40 flex   justify-center overflow-hidden`
            : `hidden w-[100vw] h-[130vh] md:h-screen fixed top-20 right-0 -z-40   justify-center overflow-hidden`
        }>
        <div
          className={`w-full md:w-[95%] lg:w-[80%] md:mt-2 dark:bg-darkHover bg-white h-[150vh] md:h-[80vh] border-none 
          md:border  overflow-hidden rounded-lg relative shadow-gray_shadow dark:shadow-white border-gray-400`}>
          <div className="  absolute top-0 right-0  w-[100%] h-full  -translate-y-6 ">
            {isDarkMode ? (
              <div className="w-full h-full bg-darkHover"></div>
            ) : (
              <img
                src={assets.header_bg_color}
                alt=""
                className="w-full h-full"
              />
            )}
          </div>
          <div
            className="absolute top-6 right-6 z-40 cursor-pointer"
            onClick={closeContainer}>
            <img
              src={isDarkMode ? assets.close_white : assets.close_black}
              className="w-5 cursor-pointer"
              alt=""
            />
          </div>

          <div className="absolute top-0 left-0  z-30 w-[100%] h-full">
            <div className="w-full h-full  flex flex-col my-6 overflow-y-scroll md:flex-row md:overflow-y-hidden  gap-1 md:gap-7 ">
              <div className="w-full md:max-w-sm px-5 py-6 flex flex-col  justify-center items-center">
                <motion.img
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  src={projectData[0].image}
                  alt=""
                  className="w-[70%] md:w-96 mb-3 rounded-3xl shadow  dark:shadow-white shadow-darkTheme"
                />
                <div className="px-2 hidden md:block">
                  <h3 className=" text-center md:text-left   text-gray-700 dark:text-white text-lg font-semibold  my-1">
                    Project link:
                  </h3>
                  <motion.a
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    href={projectData[0].github_link}
                    className="text-center md:text-left text-gray-400 dark:text-white/80 text-sm">
                    {projectData[0].github_link}
                  </motion.a>
                </div>
                <div className="w-full flex items-center  justify-center md:justify-normal  gap-1 md:gap-2 mt-0 md:mt-2">
                  {projectData[0].website_link != "" ? (
                    <motion.a
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      href=""
                      className="max-w-none px-3 py-1 flex items-center justify-center gap-2 dark:bg-transparent dark:border dark:border-white bg-black rounded-full text-white">
                      Live{" "}
                      <img src={assets.web_white_img} alt="" className="w-7" />
                    </motion.a>
                  ) : (
                    ""
                  )}
                  {projectData[0].github_link != "" ? (
                    <motion.a
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      href=""
                      className="max-w-none px-3 py-1 flex items-center justify-center gap-2 border dark:text-black dark:border-white dark:bg-white border-gray-700 rounded-full">
                      project{" "}
                      <img src={assets.git_dark_img} alt="" className="w-6" />
                    </motion.a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="flex-0 h-auto md:flex-1  px-5 py-1 md:py-6 flex flex-col  justify-center">
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-sm lg:text-md leading-5 md:leading-8 px-2 py-1 dark:text-white/80 text-[#00000086]">
                  {projectData[0].description}
                </motion.p>
                <div className="my-1 px-2 ">
                  <h2 className="text-md lg:text-lg dark:text-white text-gray-700">
                    Used Technologies
                  </h2>
                  <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="list-disc pl-6 mt-0 md:mt-2 text-sm ">
                    {projectData[0].added_technology.map((techGroup, index) => {
                      const [category, technologies] =
                        Object.entries(techGroup)[0];
                      return (
                        <li key={index} className="mt-1">
                          <a className="text-gray-700 dark:text-white/90">
                            {category}:
                          </a>{" "}
                          <a className="text-gray-400 dark:text-white/80">
                            {" "}
                            {technologies.join(", ")}
                          </a>
                          <a className="text-gray-400 dark:text-white/80">.</a>
                        </li>
                      );
                    })}
                  </motion.ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };
  return (
    <motion.div
      className="w-full px-[3%] py-10 scroll-mt-28"
      id="mywork"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}>
      <motion.h4
        className="text-center  text-lg mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}>
        My Project
      </motion.h4>
      <ExploreProject
        projectData={projectData}
        setProjectData={setProjectData}
      />
      <motion.h2
        className="text-center text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}>
        My Latest work
      </motion.h2>
      <motion.p
        className="text-center mb-12 mt-5 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}>
        Welcome to my portfolio! Explore a collection of projects that showcase
        my expertise in web application development.
      </motion.p>

      <motion.div className="my-5 w-full flex items-center justify-center gap-8 flex-wrap ">
        {myProjects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" w-[70%] md:w-80 p-5 py-8  flex flex-col justify-center items-center border
             border-gray-400 dark:border-white overflow-hidden dark:hover:bg-darkHover/50 dark:hover:shadow-white rounded-3xl cursor-pointer  hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
            key={index}>
            <motion.div
              className="overflow-hidden w-56  mx-auto rounded-lg cursor-pointer "
              initial={{ y: -5 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}>
              <img
                src={project.image}
                alt=""
                className="w-full h-full scale-105"
              />
            </motion.div>
            <motion.h4
              className="mt-3 mb-1 text-lg md:text-xl text-gray-700 dark:text-white "
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}>
              {project.title}
            </motion.h4>
            <div className="py-2 w-full relative">
              {" "}
              <motion.p
                className="text-sm leading-8 text-center text-gray-500 dark:text-white/80 h-24 overflow-hidden"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}>
                {project.description} <a>Explore</a>
              </motion.p>
              {/* <button
                className=" absolute bottom-3 right-2 text-sm
                bg-white flex items-center gap-2 dark:bg-darkHover shadow-darkHover dark:text-white/80 text-gray-500 py-1 px-3 rounded-sm shadow-white_shadow cursor-pointer "
                onClick={() => {
                  openContainer(project);
                }}>
                EXPLORE{" "}
                <img src={assets.right_arrow_bold} alt="" className="w-4" />
              </button> */}
            </div>
            <motion.button
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-md my-1 rounded-full bg-black dark:bg-white dark:text-darkTheme text-white cursor-pointer px-3 py-1 border border-darkTheme flex gap-2 items-center "
              onClick={() => {
                openContainer(project);
              }}>
              EXPLORE{" "}
              <img
                src={
                  isDarkMode
                    ? assets.right_arrow_bold
                    : assets.right_arrow_white
                }
                alt=""
                className="w-6"
              />
            </motion.button>

            <div className="w-full flex justify-center items-center gap-2 mt-2">
              {project.website_link != "" ? (
                <motion.a
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  href={project.website_link}
                  className="max-w-none px-5 py-1 flex items-center justify-center gap-2  border dark:border-white border-gray-700 rounded-full ">
                  Live{" "}
                  <img
                    src={
                      isDarkMode ? assets.web_white_img : assets.web_dark_img
                    }
                    alt=""
                    className="w-6"
                  />
                </motion.a>
              ) : (
                ""
              )}
              {project.github_link != "" ? (
                <motion.a
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  href={project.github_link}
                  className="max-w-none px-3 py-1 flex items-center justify-center gap-2 border dark:border-white border-gray-700 rounded-full">
                  project{" "}
                  <img
                    src={
                      isDarkMode ? assets.git_white_img : assets.git_dark_img
                    }
                    alt=""
                    className="w-6"
                  />
                </motion.a>
              ) : (
                ""
              )}
            </div>
            {/* <ul className="list-disc pl-6 mt-2">
              {project.added_technology.map((techGroup, index) => {
                const [category, technologies] = Object.entries(techGroup)[0];
                return (
                  <li key={index} className="mt-1">
                    <strong>{category}:</strong> {technologies.join(", ")}
                  </li>
                );
              })}
            </ul> */}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
