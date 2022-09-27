import { NextComponentType } from "next";
import Home from "../pages";
import About from "../pages/about";

export const isHomeComponent = (component: NextComponentType): boolean => {
  return component === Home || component === About;
};
