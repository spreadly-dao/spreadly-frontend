import { AppBar, Box, Typography, useScrollTrigger } from "@mui/material";
import * as React from "react";
import AbstractButton from "../utilities/Button";
import Link from "next/link";
import Resources from "../home/Resources";
import ThemeToggle from "./ThemeToggle";
import { useRouter } from "next/router";

export const navBarHeight = "3.5rem";

const isActiveRoute = (currentPath: string, value: string): boolean => {
  console.log(currentPath, value);
  return value === "/" ? currentPath === value : currentPath.includes(value);
};

const TopNav: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const MENU_LIST = [
    { text: "Home", path: "/" },
    { text: "Ido", path: "/ido" },
    { text: "About", path: "/about" },
    { text: "Education", path: "/education" },
    { text: "Affiliates", path: "/affiliates" },
    { text: "Blog", path: "/blog" },
  ];

  const router = useRouter();

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={trigger ? 4 : 0}
      sx={{
        zIndex: "24",
        height: navBarHeight,
        backdropFilter: `${trigger ? "blur(25px)" : ""}`,
        width: "100%",
        display: { sm: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "center",
        background: `${
          trigger
            ? "linear-gradient(130.4deg, rgba(7, 10, 17, 0.6) 14.89%, rgba(7, 10, 17, 0.3) 87.67%)"
            : ""
        }`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: { md: "98%", lg: "75%", xl: "1500px" },
        }}
      >
        <Box
          sx={{
            img: { width: "2rem", height: "2rem" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="/logo.png" />
        </Box>
        {MENU_LIST.map((menu, index) => {
          return (
            <Box sx={{ ml: "2rem" }} key={`menu-item-${index}`}>
              <Link href={menu.path}>
                <Typography
                  key={index}
                  sx={{
                    textTransform: "uppercase",
                    cursor: "pointer",
                    color: isActiveRoute(router.asPath, menu.path)
                      ? "primary.main"
                      : "text.primary",
                    textDecoration: isActiveRoute(router.asPath, menu.path)
                      ? "underline"
                      : "none",
                  }}
                >
                  {menu.text}
                </Typography>
              </Link>
            </Box>
          );
        })}
        <Resources />
        <Box sx={{ ml: "auto", display: "flex" }}>
          <ThemeToggle />
          <AbstractButton>Coming Soon</AbstractButton>
        </Box>
      </Box>
    </AppBar>
  );
};

export default TopNav;
