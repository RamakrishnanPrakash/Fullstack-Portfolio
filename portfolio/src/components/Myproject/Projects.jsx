import { Link } from "react-router-dom";
import { assets, BACKEND_URL, myProjects } from "../../assets/assets";
import { useState } from "react";
import { motion } from "motion/react";

export const Projects = ({ isDarkMode, project }) => {
  const [loade, setLoaded] = useState({});
  const handleImageLoade = (index) => {
    setLoaded((prev) => ({ ...prev, [index]: true }));
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="w-full px-[3%] py-10 scroll-mt-28"
      id="mywork">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-center  text-lg mb-2">
        My projects
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center text-5xl">
        {" "}
        My Latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-center mb-12 mt-5 max-w-2xl mx-auto">
        Welcome to my portfolio! Explore a collection of projects that showcase
        my expertise in web application development.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="my-5 w-full flex items-center justify-center gap-8 flex-wrap ">
        {project.map((item, index) => (
          <motion.div
            initial={{ y: -5 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            key={item._id}
            className="max-w-[250px] cursor-pointer  border border-gray-400 dark:border-white py-4 px-5 rounded-md shadow shadow-white/60 
          hover:bg-lightHover hover:-translate-y-1 duration-500 
             hover:shadow-black dark:hover:bg-darkHover/50 dark:hover:shadow-white ">
            <div className="flex flex-col">
              <div className="w-full h-[160px] overflow-hidden relative">
                <Link to={`/project/${item._id}`}>
                  {!loade[index] && (
                    <div className="absolute inset-0 dark:bg-white/70 bg-gray-600 animate-pulse"></div>
                  )}

                  <img
                    src={`${BACKEND_URL}/uploads/${item.image}`}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      loade[index] ? "opacity-100" : "opacity-0"
                    }`}
                    alt=""
                    onLoad={() => handleImageLoade(index)}
                  />
                </Link>
              </div>

              <h2 className="mt-3 mb-1 text-lg">
                {item.title.length > 20
                  ? `${item.title.slice(0, 20)}...`
                  : item.title}
              </h2>
              <p className="text-sm   leading-7 ">
                {item.description.length > 50
                  ? `${item.description.slice(0, 50)}...`
                  : item.description}
              </p>
              <Link to={`/project/${item._id}`}>
                <button className="py-1 px-2 border border-gray-400 dark:border-white/70 rounded-lg mt-2 ">
                  Explore Project
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export const ExploreProject = ({ isDarkMode }) => {
  return (
    <div className="w-[100%] h-screen fixed top-0 left-0 z-50 dark:bg-darkTheme">
      <div className="relative w-[100%] h-full ">
        {/* <div className="  absolute top-0 right z-40 w-11/12   -translate-y-80">
          <img src={assets.header_bg_color} alt="" className="w-full" />
        </div> */}
        <div
          className="w-[100%] h-full"
          style={
            isDarkMode
              ? { backgroundImage: "none" }
              : {
                  backgroundImage: `url(${assets.header_bg_color})`, // ✅ Correct format
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
          }>
          <img
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-48 "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
