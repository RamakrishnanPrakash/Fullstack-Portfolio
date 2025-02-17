import projects from "../models/ProjectModel.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BACKEND_URL = "http://localhost:3000";

export const addProject = async (req, res) => {
  try {
    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image has not been uploaded",
      });
    }

    const { title, description, github_link, website_link } = req.body;

    const added_technology = JSON.parse(req.body.added_technology);

    const newProject = new projects({
      title,
      image: req.file.filename, // Store image filename
      description,
      added_technology, // Store as an array
      github_link,
      website_link,
      date: Date.now(),
    });

    // Save to database
    await newProject.save();

    res.status(201).json({
      success: true,
      message: "Project added successfully!",
      project: newProject,
    });
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Could not add project.",
      error: error.message,
    });
  }
};

export const getProject = async (req, res) => {
  const project = await projects.find({});
  res.status(200).json({
    success: true,
    message: "Project data fetched successfully",
    projects: project,
  });
  try {
  } catch (error) {
    console.error("Error getting project:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Could not add project.",
      error: error.message,
    });
  }
};

export const getProjectOne = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Project id is missing",
      });
    }
    const project = await projects.findById(id);
    res.status(200).json({
      success: true,
      message: "Project data fettched successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Server error. Could not get project ${error.message}`,
      error: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { _id } = req.params;

    const deletedProject = await projects.findByIdAndDelete(_id);

    if (!deletedProject) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }

    res.json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { title, description, github_link, website_link } = req.body;
    const { id } = req.params;

    // ✅ Convert added_technology safely
    let added_technology = [];
    try {
      added_technology = JSON.parse(req.body.added_technology);
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid technology format" });
    }

    // ✅ Find existing project
    const oldProjectData = await projects.findById(id);
    if (!oldProjectData) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }

    let updatedImage = oldProjectData.image; // Default to existing image

    // ✅ If image is a string (no new file uploaded), just update the data
    if (
      typeof req.body.image === "string" &&
      req.body.image ===
        `${process.env.BACKEND_URL}/uploads/${oldProjectData.image}`
    ) {
      const updatedProject = await projects.findByIdAndUpdate(
        id,
        {
          title,
          image: updatedImage,
          description,
          added_technology,
          github_link,
          website_link,
          date: Date.now(),
        },
        { new: true }
      );
      return res
        .status(200)
        .json({ success: true, message: "Project updated", updatedProject });
    }

    // ✅ If a new file is uploaded, delete the old image and update
    if (req.file) {
      const oldImagePath = path.resolve(
        __dirname,
        "../uploads",
        oldProjectData.image
      );
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath); // Delete old image
      }
      updatedImage = req.file.filename; // Save new image
    }

    // ✅ Update project data with new image if uploaded
    const updatedProject = await projects.findByIdAndUpdate(
      id,
      {
        title,
        image: updatedImage,
        description,
        added_technology,
        github_link,
        website_link,
        date: Date.now(),
      },
      { new: true }
    );

    return res
      .status(200)
      .json({ success: true, message: "Project updated", updatedProject });
  } catch (error) {
    console.error("❌ Error updating project:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error });
  }
};

export const authentication = async (req, res) => {
  try {
    const { name, password } = req.body;

    // Check if credentials exist in env
    if (!process.env.NAME || !process.env.PASS) {
      return res.status(500).json({
        success: false,
        message: "Server error: Admin credentials not set",
      });
    }

    // Verify username & password
    const isMatch = await bcrypt.compare(password, process.env.PASS);
    if (name === process.env.NAME && isMatch) {
      return res.status(200).json({
        success: true,
        message: "Login Successful",
        page: "/admin",
      });
    }

    return res.status(401).json({
      success: false,
      message: "Incorrect username or password. Only admin can log in.",
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
