import { NextComponentType } from "next";
import Home from "../pages";

export const isHomeComponent = (component: NextComponentType): boolean => {
  return component === Home;
};
