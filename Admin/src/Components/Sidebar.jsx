import { assets } from "../assets/assets";
export const Sidebar = ({ setOperation }) => {
  return (
    <div>
      <div className="min-h-[60px] w-full border-b-2   border-black flex items-center justify-start ">
        <a href="">
          <img
            src={assets.logo}
            className=" w-[180px] sm:w-[150px] lg:pl-6 pl-0"
            alt=""
          />
        </a>
      </div>

      <div className="flex  items-center flex-col">
        <div
          onClick={() => setOperation("add")}
          className="w-[80%] mt-2 cursor-pointer border border-white rounded-sm flex items-center px-3 py-3  gap-2   hover:bg-white/10 duration-700 justify-center md:justify-start">
          <img src={assets.add_icon} className="w-6" alt="" />
          <h6 className="text-white font-bold hidden md:block">Add project</h6>
        </div>
        <div
          onClick={() => setOperation("list")}
          className="w-[80%] mt-2 cursor-pointer border border-white bg-black rounded-sm flex items-center px-3  py-2  gap-2  hover:bg-white/10 duration-700 justify-center md:justify-start">
          <img src={assets.list_icon} className="w-6" alt="" />
          <h6 className="text-white font-bold hidden md:block">List project</h6>
        </div>
        <div
          onClick={() => setOperation("update")}
          className="w-[80%] mt-2 cursor-pointer border border-white bg-black rounded-sm flex items-center px-3 py-2  gap-2 hover:bg-white/10 duration-700 justify-center md:justify-start">
          <img src={assets.update_icon} className="w-6" alt="" />
          <h6 className="text-white font-bold  hidden md:block">
            Update project
          </h6>
        </div>
        <div
          onClick={() => setOperation("message")}
          className="w-[80%] mt-2 cursor-pointer border border-white bg-black rounded-sm flex items-center px-3 py-2  gap-2 hover:bg-white/10 duration-700 justify-center md:justify-start">
          <img src={assets.msg_icon} className="w-6" alt="" />
          <h6 className="text-white font-bold  hidden md:block">Message</h6>
        </div>
      </div>
    </div>
  );
};
