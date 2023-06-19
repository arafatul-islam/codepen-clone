import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const useData = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

  return { html, setHtml, css, setCss, js, setJs };
};
