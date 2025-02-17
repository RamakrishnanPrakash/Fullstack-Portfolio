import { useState, useEffect } from "react";
import { assets, myProjects, BACKEND_URL } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";

export const UpdateProject = () => {
  const [searchBox, setSearchBox] = useState(false);
  const [project, setProject] = useState([]);
  const [input, setInputs] = useState("Choose your project");
  const [_id, set_Id] = useState(null);
  const [filterProject, setFilterProject] = useState([]);

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
  }, [filterProject]);

  const optionClickHandler = (title, _id) => {
    setInputs(title);
    setSearchBox(false);
    set_Id(_id);
    updateCard(_id);
  };

  const updateCard = (_id) => {
    const filterpro = project.filter((p) => String(p._id) === String(_id));

    console.log(filterpro);
    setFilterProject([...filterpro]);
  };

  console.log(filterProject);
  return (
    <div className="pl-10">
      <h1 className="text-xl font-bold mt-3">Collection of project</h1>
      <div className="my-2  md:shadow-sm shadow-gray-800 w-full   mx-auto pl-0  pt-6">
        <div className=" w-[300px] md:w-[400px]  shadow-md shadow-black relative">
          <div className=" flex items-center rounded-md cursor-pointer">
            <h6
              className="flex-1 py-2 px-3 text-xl font-bold"
              onClick={() => setSearchBox(!searchBox)}>
              {input}
            </h6>
            <div
              className="bg-black py-2 px-2 cursor-pointer flex items-center justify-center "
              onClick={() => setSearchBox(!searchBox)}>
              <img src={assets.down_arrow} className="w-6" alt="" />
            </div>
          </div>
          <div
            className={
              searchBox
                ? "absolute border-t border-black w-[300px] md:w-[400px]  -bottom-[130px] shadow-md shadow-black left-0 bg-white max-h-56 overflow-y-scroll"
                : "hidden"
            }>
            {project.map((item) => (
              <p
                onClick={() => optionClickHandler(item.title, item._id)}
                key={item._id}
                className="py-2 px-3 cursor-pointer hover:bg-black/70 hover:text-white text-lg font-bold">
                {item.title}
              </p>
            ))}
          </div>
        </div>
      </div>

      {filterProject.length > 0 ? (
        <div className="mt-10 shadow-md shadow-gray-900 w-[80%] py-2 ">
          <div
            className=" w-full flex flex-row gap-1 py-1  justify-around items-center mt-4"
            key={filterProject[0]._id}>
            <div className=" shrink-0 max-w-[60px] h-[60px] overflow-hidden">
              <img
                src={`${BACKEND_URL}/uploads/${filterProject[0].image}`}
                alt=""
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div className="flex-1 max-w-[150px] text-center md:text-left font-semibold text-gray-800 ">
              <a href="" target="_blank" rel="noopener noreferrer">
                {filterProject[0].title.length > 12
                  ? `${filterProject[0].title.slice(0, 12)}...`
                  : filterProject[0].title}
              </a>
            </div>
            <div className="hidden lg:block w-[300px]  text-left overflow-hidden truncate">
              {filterProject[0].description.length > 50
                ? `${filterProject[0].description.slice(0, 50)}...`
                : filterProject[0].description}
            </div>
            <div className="">
              <button className="py-1 px-3 bg-gray-900 text-white rounded-md text-center">
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {filterProject.length > 0 ? (
        <AddProject
          filterProject={filterProject}
          setFilterProject={setFilterProject}
          setInputs={setInputs}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export const AddProject = ({ filterProject, setFilterProject, setInputs }) => {
  const [newCategory, setNewCategorie] = useState("");
  const [technologies, setTechnologies] = useState(
    filterProject[0].added_technology
  );

  const [image, setImage] = useState(false);

  const [input, setInput] = useState({
    title: filterProject[0].title,
    image: `${BACKEND_URL}/uploads/${filterProject[0].image}`,
    description: filterProject[0].description,
    github_link: filterProject[0].github_link,
    website_link: filterProject[0].website_link,
  });

  useEffect(() => {
    setInput({
      title: filterProject[0].title,
      image: `${BACKEND_URL}/uploads/${filterProject[0].image}`,
      description: filterProject[0].description,
      github_link: filterProject[0].github_link,
      website_link: filterProject[0].website_link,
    });
    setTechnologies(filterProject[0].added_technology);
    setImage(`${BACKEND_URL}/uploads/${filterProject[0].image}`);
  }, [filterProject]); // Re-runs when `filterProject` changes

  const [menuState, setMenuState] = useState(-1);

  const [newTechnologies, setNewTechnologies] = useState({});
  const [categoryIndex, setCategoryIndex] = useState(-1);
  const [technologyScreen, setTechnologyScreen] = useState(false);

  const addNewCategories = (e) => {
    e.preventDefault();
    if (newCategory.length == 0) {
      toast.error("Please add categories");
      return;
    }
    setTechnologies([
      ...technologies,
      { category: newCategory, technologies: [] },
    ]);
    toast.success("New category added");
    setNewCategorie("");
  };

  const removeCategory = (cateIndex) => {
    setMenuState(-1);
    setTechnologies(technologies.filter((_, i) => i !== cateIndex));
    toast.success("Category removed");
  };

  const addNewTechnology = (e, cateIndex) => {
    e.preventDefault();
    if (newTechnologies[cateIndex].length == 0) {
      toast.error("Please add technology");
      return;
    }

    setTechnologies((prev) =>
      prev.map((tech, index) =>
        index === cateIndex
          ? {
              ...tech,
              technologies: [...tech.technologies, newTechnologies[cateIndex]],
            }
          : tech
      )
    );

    setNewTechnologies("");
    toast.success("new technology added");
  };

  const removeNewTechnology = (e, cateIndex, techIndex) => {
    e.preventDefault(); // Prevents any unwanted page reload

    setTechnologies((prev) =>
      prev.map((tech, index) =>
        index === cateIndex
          ? {
              ...tech,
              technologies: tech.technologies.filter((_, i) => i !== techIndex), // No need to spread
            }
          : tech
      )
    );
  };

  const inputHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  // console.log(input);
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", input.title);
    form.append("image", image);
    console.log(typeof image);
    form.append("description", input.description);
    form.append("github_link", input.github_link);
    form.append("website_link", input.website_link);
    form.append("_id", filterProject[0]._id);
    form.append("added_technology", JSON.stringify(technologies)); // Convert array to JSON

    // console.log(...form);

    try {
      console.log(
        `${BACKEND_URL}/api/v0/portfolio/project/${filterProject[0]._id}`
      );
      const response = await axios.patch(
        `${BACKEND_URL}/api/v0/portfolio/project/${filterProject[0]._id}`,
        form,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.success) {
        setFilterProject(response.data.updatedProject);
        setInputs("Choose your project");
      }
      toast.success(response.data.message || "Project Updated successfully!");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  const menuHandler = (cateIndex) => {
    console.log(typeof cateIndex);
    setMenuState(cateIndex);
  };
  const showtechnologyScreen = (e, cateIndex) => {
    e.preventDefault();
    setCategoryIndex(cateIndex);
    setTechnologyScreen(true);
  };

  const hiddenTechnologyScreen = (e) => {
    e.preventDefault();
    setCategoryIndex(-1);
    setTechnologyScreen(false);
  };
  const RenderViewComponent = () => {
    return <></>;
  };

  return (
    <div className="w-full    mt-1    ">
      <div className="  ">
        <form
          className=""
          onSubmit={(e) => formSubmitHandler(e, filterProject[0]._id)}>
          <label htmlFor="image">
            <p className="text-xl my-2 font-bold ">Update thumbnail</p>
            <img
              src={
                image instanceof File || image instanceof Blob
                  ? URL.createObjectURL(image)
                  : `${BACKEND_URL}/uploads/${filterProject[0].image}`
              }
              alt=""
              className="w-[150px] shadow-md shadow-black"
            />
          </label>
          <input
            type="file"
            hidden
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <label>
            <p className="text-xl my-2 font-bold ">Project title</p>
            <input
              name="title"
              value={input.title}
              onChange={(e) => inputHandleChange(e)}
              type="text"
              placeholder="Blog title here..."
              className="w-[90%] md:w-[70%] outline-none text-lg py-1 px-2 text-gray-900   shadow-md shadow-black rounded-sm"
            />
          </label>

          <label>
            <p className="text-xl my-2 font-bold ">Project description</p>
            <textarea
              value={input.description}
              name="description"
              onChange={(e) => inputHandleChange(e)}
              id="description"
              className="w-[90%] md:w-[70%] outline-0  leading-8 text-gray-900  shadow-md shadow-black rounded-sm py-1 px-2"
              placeholder="Comments bellow"
              rows={6}></textarea>
          </label>

          <label>
            <p className="text-xl my-2 font-bold">Git repository</p>
            <input
              value={input.github_link}
              name="github_link"
              onChange={(e) => inputHandleChange(e)}
              type="text"
              placeholder="Link here..."
              className="w-[90%] md:w-[70%] outline-none text-lg py-1 px-2 shadow-md shadow-black rounded-sm"
            />
          </label>
          <label>
            <p className="text-xl my-2 font-bold ">Project Link</p>
            <input
              value={input.website_link}
              name="website_link"
              type="text"
              placeholder="Link here..."
              onChange={(e) => inputHandleChange(e)}
              className="w-[90%] md:w-[70%] outline-none text-lg py-1 px-2 shadow-md text-gray-900 shadow-black rounded-sm"
            />
          </label>

          <h1 className="text-xl my-2 font-bold">Categories</h1>
          <div className="w-[90%] md:w-[70%] mt-3 flex flex-col  justify-between shadow-md shadow-black rounded-sm ">
            <div className="flex">
              <input
                type="text"
                className="outline-none w-full text-lg  py-1 px-2 text-gray-900"
                placeholder="add category"
                value={newCategory}
                onChange={(e) => setNewCategorie(e.target.value)}
              />
              <button
                className="py-1 px-2 bg-black/90 text-white"
                onClick={(e) => addNewCategories(e)}>
                Add
              </button>
            </div>

            <div className="w-full ">
              <div className="shadow-md shadow-black ">
                {technologies.length > 0 &&
                  technologies.map(({ category, technologies }, cateIndex) => (
                    <div
                      className=" flex-1  px-4 relative "
                      key={cateIndex}
                      tabIndex={0}
                      onBlur={() => setMenuState(-1)}>
                      <div
                        className={
                          cateIndex == menuState
                            ? "absolute w-28 h-[100px] bg-white shadow-sm shadow-black rounded-lg overflow-hidden top-8 z-10 right-3 md:-right-[110px]"
                            : "hidden"
                        }>
                        <div className="flex flex-col  items-center justify-center h-full gap-2">
                          <a
                            onClick={(e) => showtechnologyScreen(e, cateIndex)}
                            className="text-sm font-bold hover:bg-black/90 py-1 text-center hover:text-white  w-full">
                            View
                          </a>
                          <a
                            onClick={() => removeCategory(cateIndex)}
                            className="text-sm font-bold hover:bg-black/90 py-1 text-center hover:text-white  w-full">
                            Delete
                          </a>
                          <a
                            onClick={() => setMenuState(-1)}
                            className="text-sm font-bold hover:bg-black/90 py-1 text-center hover:text-white  w-full">
                            Quit
                          </a>
                        </div>
                      </div>

                      <div className="flex justify-between items-center ">
                        <p className="text-lg font-medium my-1 cursor-pointer">
                          {category}
                        </p>
                        <p
                          className="text-lg font-medium my-1 cursor-pointer"
                          onClick={() => menuHandler(cateIndex)}>
                          ...
                          {/*   */}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div
              className={
                technologyScreen
                  ? `fixed z-50 w-screen  h-screen top-0 left-0`
                  : `hidden`
              }>
              <div className="w-full h-full flex items-center justify-end lg:justify-center">
                <div className="relative w-[70%] mr-10 lg:mr-0 lg:w-[550px]  min-h-[400px] bg-[#000000ee] rounded-lg pl-10 py-2 ">
                  <a
                    onClick={(e) => hiddenTechnologyScreen(e)}
                    className=" absolute top-3 right-3 z-50 text-white font-bold cursor-pointer text-xl">
                    X
                  </a>
                  <h6 className="text-white text-2xl my-3 font-bold  ">
                    {(technologies[categoryIndex] &&
                      technologies[categoryIndex].category) ||
                      ""}
                  </h6>

                  <input
                    type="text"
                    name=""
                    id=""
                    value={newTechnologies[categoryIndex] || ""}
                    onChange={(e) =>
                      setNewTechnologies({
                        ...newTechnologies,
                        [categoryIndex]: e.target.value,
                      })
                    }
                    className="w-[80%] mx-auto py-2   font-medium outline-0 bg-transparent border-b-4 border-white/90
                     cursor-pointer text-white text-lg"
                    placeholder="Added used technology"
                  />
                  <br />
                  <button
                    onClick={(e) => addNewTechnology(e, categoryIndex)}
                    className="py-1 px-5 rounded-lg  mt-4 mb-3 bg-pink-700 text-white font-bold  ">
                    ADD
                  </button>
                  <div className="w-[90%] h-auto flex flex-wrap gap-4 text-white font-bold">
                    {technologies[categoryIndex] &&
                      technologies[categoryIndex].technologies.map(
                        (tech, techIndex) => (
                          <p
                            key={techIndex}
                            className="py-2 px-3 text-lg rounded-lg shadow-sm shadow-white/70 bg-black mt-2 ">
                            {tech}{" "}
                            <span
                              onClick={(e) =>
                                removeNewTechnology(e, categoryIndex, techIndex)
                              }
                              className=" cursor-pointer ml-1">
                              X
                            </span>
                          </p>
                        )
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <button
            onClick={(e) => formSubmitHandler(e)}
            type="submit"
            className="bg-black my-2  py-2 font-bold px-5 text-center text-white">
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};
