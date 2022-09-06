import { AppBar, Box, useScrollTrigger } from "@mui/material";
import * as React from "react";
import AbstractButton from "../utilities/Button";

export const navBarHeight = "3.5rem";

const TopNav: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `${
          trigger
            ? "linear-gradient(130.4deg, rgba(7, 10, 17, 0.6) 14.89%, rgba(7, 10, 17, 0.3) 87.67%)"
            : ""
        }`,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "70%" }}>
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
        <Box sx={{ ml: "auto" }}>
          <AbstractButton>Coming Soon</AbstractButton>
        </Box>
      </Box>
    </AppBar>
  );
};

export default TopNav;
