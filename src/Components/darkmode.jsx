import React from "react";

const DarkMode = () => {

    const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = () =>{
    const isInicialMode = document.querySelector("body").getAttribute("data-theme") === "light";
    if(isInicialMode) setDarkMode();
    else setLightMode();
  };

  return (
    <button onClick={toggleTheme}> 
    Change Theme
    </button>
    );
};

export default DarkMode;