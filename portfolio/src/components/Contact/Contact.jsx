import { useState } from "react";
import { assets } from "../../assets/assets";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "motion/react";

export const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d28f2514-be26-4a46-b98d-23140399022a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      toast.success("Form Submitted Successfully");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`w-full px-[12%] py-10 scroll-mt-28 bg-[url("${assets.footer_img}")]  bg-center bg-[length:90%_auto]`}
      id="contact">
      <ToastContainer />
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center mb-2 text-lg">
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center text-5xl">
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mb-12 mt-5 max-w-2xl mx-auto">
        I'd love to here form you! If you have any question,comments,or feedback
        please use the form below.
      </motion.p>

      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            className="flex-1 outline-none border-[0.5px] border-gray-400 bg-white  dark:bg-darkHover/50 dark:border-white  p-4 rounded-md"
          />
          <motion.input
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 outline-none border-[0.5px] border-gray-400 bg-white dark:bg-darkHover/50 dark:border-white p-4 rounded-md"
          />
        </div>
        <motion.textarea
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          name="message"
          id=""
          placeholder="Enter your message"
          required
          rows={6}
          className="w-full outline-none border-[0.5px] border-gray-400 bg-white  dark:bg-darkHover/50 dark:border-white p-4 rounded-md  mb-6"></motion.textarea>
        <motion.button
          initial={{ opacity: 0, y: -20, scale: 0.6 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          type="submit"
          className="py-3 px-8 w-max mx-auto flex items-center justify-center  gap-2  dark:bg-white dark:text-black bg-black/80 text-white rounded-full hover:bg-black dark:hover:bg-white/60">
          Submit Now{" "}
          <img
            src={isDarkMode ? assets.right_arrow_bold : assets.right_arrow_bold}
            alt="right-arrow"
            className="w-6"
          />
        </motion.button>
      </form>
    </motion.div>
  );
};
