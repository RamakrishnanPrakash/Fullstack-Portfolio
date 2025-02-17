import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String }, // Image filename
  description: { type: String, required: true },
  added_technology: [
    {
      category: { type: String, required: true }, // Example: "Frontend", "Backend"
      technologies: { type: [String], required: true }, // Example: ["React.js", "Tailwind"]
    },
  ],
  github_link: { type: String },
  website_link: { type: String },
  date: { type: Date, default: Date.now },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;

//   {
//     title: "Mahal Booking System",
//     image: mahal_project_img,
//     description:
//       "Developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js), it incorporates e-commerce capabilities, enabling users to effortlessly choose venues and purchase additional services in a single, unified system. This project provides a wealth of knowledge, helping me to learn and apply concepts in full-stack development, database management, e-commerce integration, and user-centric design.",
//     added_technology: [
//       { Frondend: ["React.js", "Tailwind CSS", "ToastContainer", "axios"] },
//       { Backend: ["Express.js ", " Node.js", "MongoDB"] },
//       { Security_Authentication: ["bcrypt", "JSON Web Token (JWT)"] },
//       { Utilities: ["Moment.js for date and time formatting"] },
//     ],
//     github_link:
//       "https://github.com/RamakrishnanPrakash/Wedding-Venue-Booking-System",
//     website_link:
//       "https://github.com/RamakrishnanPrakash/Wedding-Venue-Booking-System",
//   },
