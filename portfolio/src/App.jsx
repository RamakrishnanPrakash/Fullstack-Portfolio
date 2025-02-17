import { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Fooder } from "./components/Fooder/Fooder";
import { Header } from "./components/Header/Header";
import { Project } from "./components/Myproject/Project";
import { Navbar } from "./components/Navbar/Navbar";
import { Service } from "./components/Services/Service";
import { Projects } from "./components/Myproject/Projects";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProjectPage } from "./components/Myproject/ProjectPage";
import { BACKEND_URL, myProjects } from "./assets/assets";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize dark mode based on localStorage or system preference
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // Update dark mode class and save preference to localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const [project, setProject] = useState([]);
  const fetchProject = async () => {
    const response = await fetch(`${BACKEND_URL}/api/v0/portfolio/project`);
    const data = await response.json();
    if (data.success) {
      setProject(data.projects);
    }
    if (!data.success) {
      setProject(myProjects);
    }
  };
  useEffect(() => {
    fetchProject();
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar
                key={"home"}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <Header key={"homes"} isDarkMode={isDarkMode} />
              <About key={"about"} isDarkMode={isDarkMode} />
              <Projects isDarkMode={isDarkMode} project={project} />
              {/* <Project key={"project"} isDarkMode={isDarkMode} /> */}
              <Service key={"service"} />
              <Contact key={"contact"} isDarkMode={isDarkMode} />
              <Fooder key={"footer"} isDarkMode={isDarkMode} />
            </>
          }></Route>
        <Route
          path="/project/:id"
          element={
            <ProjectPage
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
              project={project}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
