import express from "express";
import {
  addProject,
  authentication,
  deleteProject,
  getProject,
  getProjectOne,
  updateProject,
} from "../Controllers/ProjectController.js";
import uploads from "../multercon.js";

const projectRouter = express.Router();

projectRouter.post("/project", uploads.single("image"), addProject);
projectRouter.get("/project", getProject);
projectRouter.get("/project/:id", getProjectOne);
projectRouter.delete("/project/:_id", deleteProject);
projectRouter.patch("/project/:id", uploads.single("image"), updateProject);
projectRouter.post("/auth", authentication);

export default projectRouter;
