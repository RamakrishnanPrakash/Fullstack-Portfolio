import {
  assets,
  infoList,
  otherTechnology,
  toolsData,
} from "../../assets/assets";
import { motion } from "motion/react";

export const About = ({ isDarkMode }) => {
  return (
    <motion.div
      className="w-full px-[12%] py-10 scroll-mt-28 overflow-hidden mx-auto"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}>
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center  text-lg mb-2">
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}>
        About me
      </motion.h2>
      <div className="flex items-center justify-center lg:justify-normal gap-20 flex-col lg:flex-row my-10">
        <motion.div
          className="w-64 sm:w-80 rounded-xl max-w-none"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}>
          <motion.img
            src={assets.profile_img}
            alt=""
            className="w-full rounded-3xl"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}>
          <motion.p
            className="max-w-2xl mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}>
            Hi, I’m Ramakrishnan Gunasekaran! I completed my Diploma in Computer
            Engineering in 2024. As a fresher in MERN stack web development, I
            specialize in building fully responsive and customized web
            applications that prioritize user experience. I also have good
            experience in version control systems, UI/UX design, and developing
            REST APIs. I am eager to bring innovative solutions to the field of
            web development.
          </motion.p>

          <motion.ul
            className=" grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.7, delay: 1 }}>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
              hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                <img
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-4"
                />
                <h3 className="text-gray-700 dark:text-white font-semibold my-4">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </li>
            ))}
          </motion.ul>

          <h4 className="text-gray-700 font-semibold my-4 dark:text-white/80">
            Tools I use
          </h4>

          <motion.ul
            className="flex items-center gap-3 sm:gap-5"
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.7, delay: 0.5 }}>
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg
                 hover:-translate-y-1 duration-500 cursor-pointer">
                <img src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </motion.ul>
          <h4 className="text-gray-700 font-semibold my-4 dark:text-white/80">
            Know Other technology
          </h4>

          <motion.ul
            className="flex items-center gap-4 my-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.7, delay: 0.5 }}>
            {otherTechnology.map((tech, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg
              hover:-translate-y-1 duration-500 cursor-pointer overflow-hidden">
                <img src={tech} alt="" className="w-5 sm:w-7 scale-150" />
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
};
