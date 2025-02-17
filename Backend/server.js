import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import projectRouter from "./routes/projectRoutes.js";
import mongoose from "mongoose";
import path from "path";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    msg: "welcome my api page 🥰👨‍💻",
  });
});
app.use("/uploads", express.static(path.resolve("uploads")));
app.use("/api/v0/portfolio", projectRouter);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("✅ Database connected successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1); // Exit the process if DB connection fails
  }
};
connectDB();
