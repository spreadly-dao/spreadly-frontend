import { NextComponentType } from "next";
import Home from "../pages";
import About from "../pages/about";
import Affiliates from "../pages/affiliates";
import Blog from "../pages/blog";
import Education from "../pages/education";
import Ido from "../pages/ido";
import TermsAndConditions from "../pages/termsAndConditions";
import Whitepaper from "../pages/whitepaper";
import Yellowpaper from "../pages/yellowpaper";
import FAQ from "../pages/faq";


export const isHomeComponent = (component: NextComponentType): boolean => {
  return component === Home || component === About || component === Affiliates || component === Ido || component === Education || component === Blog || component === TermsAndConditions
  || component === Whitepaper || component === Yellowpaper || component === FAQ;
};
