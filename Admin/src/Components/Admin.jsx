import { useState } from "react";
import { assets } from "../assets/assets";
import { AddProject } from "./AddProject";
import { Sidebar } from "./Sidebar";
import { ListProject } from "./ListProject";
import { UpdateProject } from "./UpdateProject";
import { Message } from "./Message";

export const Admin = () => {
  const [operation, setOperation] = useState("add");
  const RenderComponent = () => {
    switch (operation) {
      case "add":
        return <AddProject />;
      case "list":
        return <ListProject />;
      case "update":
        return <UpdateProject />;
      default:
        return <Message />;
    }
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[20%] h-screen bg-black sticky top-0 left-0 overflow-hidden">
        <Sidebar setOperation={setOperation} />
      </div>

      {/* Main Content */}
      <div className="w-[80%] h-screen overflow-auto">
        {/* Navbar */}
        <div className="w-[100%] sticky top-0 right-0">
          <div className="min-h-[60px] w-full flex items-center justify-between px-5 border-b shadow-md bg-white">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <img
              src={assets.profile_img}
              className="w-10 h-10 cursor-pointer shadow-md rounded-full"
              alt="Profile"
            />
          </div>
        </div>
        {/* Page Content */}
        {RenderComponent()}
      </div>
    </div>
  );
};
