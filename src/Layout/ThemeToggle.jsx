import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

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
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };


  return (
    <button
      onClick={toggleTheme}
      className="bg-[url('https://img.icons8.com/?size=100&id=18518&format=png&color=000000')] active:animate-spin  duration-300 h-8 max-w-5  active:blur-md  dark:bg-[url('https://img.icons8.com/?size=100&id=8EUmYhfLPTCF&format=png&color=000000')] bg-no-repeat bg-contain bg-center text-gray-800 dark:text-gray-200 px-5 py-5  rounded-lg"
    >
      {theme === "dark" ? "" : ""}
    </button>
  );
};

export default ThemeToggle;