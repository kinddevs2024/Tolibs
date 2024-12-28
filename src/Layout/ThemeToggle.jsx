import React, { useState, useEffect } from "react";
 
const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
 
  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);
 
  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-[url('public/moon.png')]  mt-1 mr-2  duration-500 h-6 w-6 dark:bg-[url('public/sun.png')] bg-no-repeat bg-contain bg-center text-gray-800 dark:text-gray-200  rounded-lg"
    >
      {theme === "dark" ? "" : ""}
    </button>
  );
};
 
export default ThemeToggle;