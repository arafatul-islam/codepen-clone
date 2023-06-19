import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [html, setHtml] = useState("html");
  const [css, setCss] = useState("css");
  const [js, setJs] = useState("js");

  return (
    <DataContext.Provider value={{ html, setHtml, css, setCss, js, setJs }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
