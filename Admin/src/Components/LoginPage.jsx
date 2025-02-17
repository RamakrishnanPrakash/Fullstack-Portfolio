import { useState } from "react";
import { assets, BACKEND_URL } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

export const LoginPage = () => {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v0/portfolio/auth`,
        input,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Login Successful:", response);
      if (response.data.success) {
        toast.success(response.data.message || "Login Successful");

        // Redirect to admin dashboard
        setTimeout(() => {
          window.location.href = "/admin";
        }, 2000);
      }
    } catch (error) {
      toast.error(
        "Incorrect username or password. Only admin can log in.",
        error.response?.data.message || error.message
      );
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
      return;
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target; // Destructure for cleaner code
    setInput((prevInput) => ({ ...prevInput, [name]: value })); // Ensure state updates correctly
  };
  return (
    <div className="h-screen w-full bg-[#030303]">
      <div
        className=" relative h-full w-full "
        // style={{ backgroundImage: `url(${assets.bg})` }}
      >
        <div className="w-full  sticky top-0 right-0">
          <div className="min-h-[60px] w-full flex items-center justify-between px-5 border-b shadow-md bg-transparent">
            <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
            <img
              src={assets.profile_img}
              className="w-10 h-10 cursor-pointer shadow-md rounded-full"
              alt="Profile"
            />
          </div>
        </div>

        <div className="w-full mt-[7rem] flex items-center justify-center">
          <div className="w-[350px] sm:w-[500px] py-2 px-2 shadow-md shadow-white/30 bg-[#ebe9e913] backdrop-blur-xl rounded-sm">
            <h1 className="text-xl font-bold text-center text-white my-1">
              ADMIN
            </h1>

            <form onSubmit={(e) => onSubmitHandler(e)}>
              <div className=" flex flex-col gap-2 px-2 py-2">
                <p className="text-lg text-white">User name</p>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  className="outline-0  bg-[#ffffff18] border border-white/60 text-white font-bold tracking-wider py-2 rounded-lg font-lg px-3"
                  placeholder="Admin name"
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
              <div className=" flex flex-col gap-2 px-2 py-2">
                <p className="text-lg text-white">Password</p>
                <input
                  type="password"
                  value={input.password}
                  name="password"
                  className="outline-0 bg-[#ffffff18] border text-white font-bold tracking-wider border-white/60 py-2 rounded-lg font-lg px-3"
                  placeholder="Enter password"
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
              <div className="flex items-center justify-center px-2 py-2">
                <button
                  type="submit"
                  className="bg-white/40 text-white py-2 px-3 rounded-md">
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
