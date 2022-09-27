import { Theme } from "@mui/material";
import * as React from "react";
import { IComponent } from "../components/utilities/Interfaces";
import { DarkTheme, LightTheme } from "../styles/theme";
import { ThemeProvider } from "@mui/material";

export interface ICustomThemeContext {
  theme: Theme;
  setTheme: Function;
}

export const CustomThemeContext = React.createContext(
  {} as ICustomThemeContext
);

export const CustomThemeProvider: React.FC<IComponent> = (props) => {
  const [theme, setTheme] = React.useState(LightTheme);

  React.useEffect(() => {
    setTheme(localStorage.getItem("theme") === "dark" ? DarkTheme : LightTheme);
  }, []);

  React.useEffect(() => {
    let temp = theme === LightTheme ? "light" : "dark";
    localStorage.setItem("theme", temp);
  }, [theme]);

  return (
    <CustomThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
export function useTheme(): ICustomThemeContext {
  const context = React.useContext(CustomThemeContext);
  return context;
}
