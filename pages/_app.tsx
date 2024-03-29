import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { isHomeComponent } from "../lib/HomeRouter";
import Layout from "../components/home/Layout";
import { ThemeContext } from "@emotion/react";
import React from "react";
import { DarkTheme, LightTheme } from "../styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { CustomThemeProvider } from "../lib/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 200, y: 0 },
  };

  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Layout>
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
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
      </Layout>
    </CustomThemeProvider>
  );
}

export default MyApp;
