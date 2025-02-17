import React, { useState } from "react";

const AddedTechnology = ({ onSubmit }) => {
  const [technologies, setTechnologies] = useState([
    { category: "", technologies: [""] },
  ]);

  // ✅ Handle Category Change
  const handleCategoryChange = (index, value) => {
    const updatedTech = [...technologies];
    updatedTech[index].category = value;
    setTechnologies(updatedTech);
  };

  // ✅ Handle Technology Change
  const handleTechnologyChange = (catIndex, techIndex, value) => {
    const updatedTech = [...technologies];
    updatedTech[catIndex].technologies[techIndex] = value;
    setTechnologies(updatedTech);
  };

  // ✅ Add New Category
  const addCategory = () => {
    setTechnologies([...technologies, { category: "", technologies: [""] }]);
  };

  // ✅ Add New Technology
  const addTechnology = (index) => {
    const updatedTech = [...technologies];
    updatedTech[index].technologies.push("");
    setTechnologies(updatedTech);
  };

  // ✅ Remove Category
  const removeCategory = (index) => {
    const updatedTech = technologies.filter((_, i) => i !== index);
    setTechnologies(updatedTech);
  };

  // ✅ Remove Technology
  const removeTechnology = (catIndex, techIndex) => {
    const updatedTech = [...technologies];
    updatedTech[catIndex].technologies.splice(techIndex, 1);
    setTechnologies(updatedTech);
  };

  // ✅ Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(technologies); // Send data to parent component or API
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Added Technologies</h2>
      <form onSubmit={handleSubmit}>
        {technologies.map((tech, catIndex) => (
          <div
            key={catIndex}
            className="mb-4 p-4 border rounded-lg bg-gray-100">
            <input
              type="text"
              placeholder="Category (e.g., Frontend, Backend)"
              value={tech.category}
              onChange={(e) => handleCategoryChange(catIndex, e.target.value)}
              className="w-full p-2 mb-2 border rounded"
            />

            {tech.technologies.map((techItem, techIndex) => (
              <div key={techIndex} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Technology (e.g., React.js, Node.js)"
                  value={techItem}
                  onChange={(e) =>
                    handleTechnologyChange(catIndex, techIndex, e.target.value)
                  }
                  className="p-2 border rounded w-full"
                />
                {tech.technologies.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeTechnology(catIndex, techIndex)}
                    className="px-3 py-1 bg-red-500 text-white rounded">
                    ❌
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => addTechnology(catIndex)}
              className="px-3 py-1 bg-blue-500 text-white rounded">
              ➕ Add Technology
            </button>

            {technologies.length > 1 && (
              <button
                type="button"
                onClick={() => removeCategory(catIndex)}
                className="ml-2 px-3 py-1 bg-red-500 text-white rounded">
                ❌ Remove Category
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addCategory}
          className="px-4 py-2 bg-green-500 text-white rounded mt-2">
          ➕ Add Category
        </button>

        <button
          type="submit"
          className="block w-full mt-4 px-4 py-2 bg-purple-500 text-white rounded">
          ✅ Submit
        </button>
      </form>
    </div>
  );
};

export default AddedTechnology;
