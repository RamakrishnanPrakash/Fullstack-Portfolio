import React from "react";
import { assets } from "../../assets/assets.js";

export const Fooder = ({ isDarkMode }) => {
  return (
    <div className="w-full py-4 px-5]">
      <div className="text-center">
        <img
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-48 mx-auto"
        />
      </div>
      <div className="w-max flex items-center gap-2 mx-auto">
        <img
          src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
          className="w-6"
          alt=""
        />{" "}
        <p className="text-gray-700    dark:text-white">
          ramakrishnanguna2003@gmail.com
        </p>
      </div>
      <div className="my-1 w-11/12 flex justify-center  md:justify-between items-center flex-wrap">
        <h3 className="text-lg text-gray-700  dark:text-white/90  p-2">
          © 2025 Ramakrishnan. All rights reserved
        </h3>
        <ul className="flex items-center justify-around  gap-4">
          <li>
            <a
              href="https://www.instagram.com/yuva_ram97?igsh=MXZlejZ6bThsZWJ3dA=="
              className="text-gray-400  dark:text-white/80">
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RamakrishnanPrakash"
              className="text-gray-400  dark:text-white/80 ">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ramakrishnangunasekaran
"
              className="text-gray-400  dark:text-white/80 ">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
