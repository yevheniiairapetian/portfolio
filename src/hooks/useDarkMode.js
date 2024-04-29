import { useEffect, useState } from "react";

export default () => {
  const key = "isDarkMode";
  const [isDark, setIsDark] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // JSON.parse converts from Sting to Boolean
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      // If error return false, i.e, light mode
      return false;
    }
  });

  // Check if user has any preference in the local storage.
  // If not then load the system preference

  const darkModeEnabled =
    typeof isDark !== "undefined"
      ? isDark
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  useEffect(() => {
    const className = "dark";
    if (darkModeEnabled) {
      window.document.body.classList.add(className);
      window.document.querySelector(".page-header").classList.add(className);
      window.document.querySelector(".main-footer").classList.add(className);
      window.document.querySelector(".footer-404").classList.add(className);
    } else {
      window.document.body.classList.remove(className);
      window.document.querySelector(".page-header").classList.remove(className);
      window.document.querySelector(".main-footer").classList.remove(className);
      window.document.querySelector(".footer-404").classList.remove(className);
    }
    try {
      window.localStorage.setItem(key, darkModeEnabled);
    } catch (e) {
      console.error("Error in setting preference");
    }
  }, [darkModeEnabled]);

  return [darkModeEnabled, setIsDark];
};