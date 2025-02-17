import { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets.js";
export const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className=" dark:hidden fixed top-0 right-0 -z-10 w-11/12 -translate-y-80">
        <img src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full flex items-center justify-between py-2 px-4 lg:px-8 fixed top-0 left-0 z-30
         ${
           isScroll ? " bg-opacity-20 backdrop-blur-lg shadow-sm border-b" : ""
         } ${isDarkMode ? " border-whiteBorder" : "border-none"}`}>
        <a href="" className="ml-4">
          <img
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt=""
            className="w-48 "
          />
        </a>

        <ul
          className={`hidden md:flex gap-5 rounded-full ${
            isScroll ? "" : "bg-[#ffffff5d]"
          } px-5 py-3`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#mywork">My work</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="flex gap-6 md:gap-4 items-center ">
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
            className="hidden md:flex items-center gap-3 border-2 rounded-full  border-gray-500 dark:border-whiteBorder px-4 py-1">
            Contact{" "}
            <img
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </a>
          <button className="flex items-center md:hidden" onClick={openMenu}>
            <img
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6 "
            />
          </button>
        </div>

        {/* mobile menu */}
        <div
          className={`w-64 h-screen ${
            isDarkMode ? "bg-darkHover" : "bg-rose-300"
          } fixed top-0 -right-64 z-50 md:hidden duration-500`}
          ref={sideMenuRef}>
          <button className="  absolute top-6 right-6 z-50" onClick={closeMenu}>
            <img
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 "
            />
          </button>
          <ul className="flex gap-5  items-center justify-center flex-col px-5 py-3 my-10">
            <li onClick={closeMenu}>
              <a href="/">Home</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#about">About me</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#services">Services</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#mywork">My work</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
