import { useEffect, useState } from "react";
import { assets, BACKEND_URL, myProjects } from "../assets/assets.js";
import axios from "axios";
import { toast } from "react-toastify";

export const ListProject = () => {
  const [project, setProject] = useState([]);
  const fetchProject = async () => {
    try {
      const responce = await axios.get(
        `${BACKEND_URL}/api/v0/portfolio/project/`
      );
      if (responce.data.success) {
        setProject(responce.data.projects);
      }
    } catch (error) {
      toast.error("Data not fetched " + error.message);
    }
  };
  useEffect(() => {
    fetchProject();
  }, []);

  const removeProject = async (_id) => {
    const response = await axios.delete(
      `${BACKEND_URL}/api/v0/portfolio/project/${_id}`
    );
    if (response.data.success) {
      toast.success(response.data.message);
      await fetchProject();
    }
  };
  return (
    <div className="pl-10">
      <h1 className="text-xl font-bold mt-3">Collection of project</h1>
      <div className="w-full">
        <div className="mt-10 shadow-md shadow-gray-900 w-[80%] py-2 ">
          {project.map((item) => (
            <div
              className=" w-full flex flex-row gap-1 py-1  justify-around items-center mt-4"
              key={item._id}>
              <div className=" shrink-0 w-[60px] h-[60px] overflow-hidden">
                <img
                  src={`${BACKEND_URL}/uploads/${item.image}`}
                  alt=""
                  className="w-full h-full rounded-md "
                />
              </div>
              <div className="flex-1 max-w-[150px] text-center md:text-left font-semibold text-gray-800 ">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title.length > 12
                    ? `${item.title.slice(0, 12)}...`
                    : item.title}
                </a>
              </div>
              <div className="hidden lg:block w-[300px]  text-left overflow-hidden truncate">
                {item.description.length > 50
                  ? `${item.description.slice(0, 50)}...`
                  : item.description}
              </div>
              <div className="">
                <button
                  onClick={() => removeProject(item._id)}
                  className="py-1 px-3 bg-gray-900 text-white rounded-md text-center">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
