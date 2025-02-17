import { assets, serviceData } from "../../assets/assets";
import { motion } from "motion/react";

export const Service = () => {
  return (
    <motion.div
      className="w-full px-[12%] py-10 scroll-mt-28"
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}>
      <motion.h4
        className="text-center  text-lg mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        What I offer
      </motion.h4>
      <motion.h2
        className="text-center text-5xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}>
        My Services
      </motion.h2>
      <motion.p
        className="text-center mb-12 mt-5 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}>
        Although I am a fresher, I bring solid experience in web development and
        freelancing. I am committed to delivering high-quality services tailored
        to meet your specific needs. Whether you require a responsive website, a
        custom web application, or assistance with UI/UX design, I ensure
        professional results that exceed expectations.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-3 my-4  gap-6 place-items-center ">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1 }}
            className="px-8 py-12  flex  justify-center flex-col border
             border-gray-400 rounded-lg w-[80%] lg:w-auto h-auto 
             lg:h-[340px] lg:py-0 cursor-pointer  hover:bg-lightHover hover:-translate-y-1 duration-500 
             hover:shadow-black dark:hover:bg-darkHover/50 dark:hover:shadow-white"
            key={index}>
            <img src={icon} alt="" className="w-10" />
            <h3 className="my-4 text-lg text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 px-4 pl-0 py-2">
              Read more <img src={assets.right_arrow} className="w-6" alt="" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
