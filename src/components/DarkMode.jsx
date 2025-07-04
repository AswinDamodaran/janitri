"use client";
import { useEffect, useState } from "react";

export default function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
<button
  onClick={toggleTheme}
  className="relative  w-16 h-8 flex items-center justify-between bg-text rounded-full px-2 transition-colors duration-300 "
>
 
  <span className="text-yellow-800 text-sm z-10 pb-1">☀️</span>

 
  <span className="text-blue-200 text-sm z-10 pb-1">🌙</span>

  
  <div
    className={`absolute top-1 left-1 w-6 h-6 rounded-full  bg-text transform transition-transform duration-300 ${
      isDark ? "translate-x-8" : "translate-x-0"
    }`}
  ></div>
</button>

  );
}
