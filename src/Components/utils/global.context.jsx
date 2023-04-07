import { createContext, useEffect } from "react";
import { useState } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [dentist, setDentist] =useState([]);
  // useEffect(()=> {
    const getDentists = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    };
    useEffect(() => {
      getDentists();
    },[])
  
  return (
    <ContextGlobal.Provider value={{dentist}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default GlobalContextProvider;