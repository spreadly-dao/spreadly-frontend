import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { isHomeComponent } from "../lib/HomeRouter";
import Layout from "../components/home/Layout";
import { ThemeContext } from "@emotion/react";
import React from "react";
import { DarkTheme, LightTheme } from "../styles/theme";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState(DarkTheme);

  const router = useRouter();

  React.useEffect(() => {
    setTheme(localStorage.getItem("theme") === "dark" ? DarkTheme : LightTheme);
  }, []);

  React.useEffect(() => {
    let temp = theme === LightTheme ? "light" : "dark";
    localStorage.setItem("theme", temp);
  }, [theme]);

  const variants = {
    hidden: { opacity: 0, x: 0, y: -200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <AnimatePresence exitBeforeEnter>
          <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear" }}
            className=""
            key={router.route}
          >
            {isHomeComponent(Component) ? (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            ) : (
              <>...</>
            )}
          </motion.main>
        </AnimatePresence>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
