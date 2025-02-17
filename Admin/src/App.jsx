import React, { useEffect, useState } from "react";
import { Admin } from "./Components/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginPage } from "./Components/LoginPage";

const App = () => {
  const [route, setRoute] = useState(window.location.pathname);
  useEffect(() => {
    const handleRoute = () => {
      setRoute(window.location.pathname);
    };
    window.addEventListener("popstate", handleRoute);
    return () => window.removeEventListener("popstate", handleRoute);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setRoute(path);
  };
  return (
    <>
      <ToastContainer
        position="bottom-right" // Change to "bottom-left" or "bottom-center" if needed
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {route == "/" && <LoginPage />}
      {route == "/admin" && <Admin />}
    </>
  );
};

export default App;
