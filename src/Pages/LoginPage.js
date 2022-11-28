import { useContext, useEffect, useState } from "react";
import React from "react";
import Login2 from "../Components/Login2";

const LoginPage = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`${theme}`}>
      <Login2 />
    </div>
  );
};

export default LoginPage;
