import { assets } from "../../assets/assets";
import { motion } from "motion/react";

export const Header = ({ isDarkMode }) => {
  return (
    <div
      className="w-11/12 max-w-3xl h-auto  mx-auto flex items-center justify-center flex-col gap-3 py-5"
      id="home">
      <motion.div
        className=" mt-[6rem] w-40 h-40 rounded-full overflow-hidden "
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}>
        <img
          src={assets.profile_img}
          alt=""
          className="w-[70rem] h-full bg-center"
        />
      </motion.div>
      <motion.h3
        className="text-xl md:text-2xl flex items-center gap-1  mb-4"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}>
        Hi ! I'm Ramakrishnan Gunasekaran{" "}
        <img src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        className="text-3xl sm:text-2xl lg:text-[55px] text-center lg:mb-5  "
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}>
        mern stack developer based in
      </motion.h1>
      <motion.h3
        className="text-3xl sm:text-2xl lg:text-[55px] text-center "
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}>
        tamilnadu
      </motion.h3>
      <motion.p
        className="max-w-2xl mx-auto text-center"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}>
        I design and develop responsive, user-friendly web applications with a
        focus on delivering exceptional user experiences.
      </motion.p>

      <div className="flex flex-col md:flex-row gap-4">
        <motion.a
          href="#contact"
          className={`flex items-center gap-3 ${
            isDarkMode
              ? "bg-transparent border border-whiteBorder"
              : "bg-black text-white "
          }  px-10 py-3 rounded-full`}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}>
          {" "}
          Contact me{" "}
          <img src={assets.right_arrow_white} className="w-6" alt="" />
        </motion.a>
        <motion.a
          href="/myresume.pdf"
          download
          className="flex items-center gap-3 px-10 py-3 rounded-full border-2 dark:bg-white dark:text-darkTheme border-gray-500 "
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}>
          {" "}
          my resume <img src={assets.download_icon} className="w-6" alt="" />
        </motion.a>
      </div>
    </div>
  );
};
