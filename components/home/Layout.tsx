import { Box } from "@mui/material";
import * as React from "react";
import { IComponent } from "../utilities/Interfaces";
import TopNav, { navBarHeight } from "./TopNav";

const Layout: React.FC<IComponent> = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default",
      }}
    >
      <TopNav />
      <Box sx={{ mt: navBarHeight }}>{props.children}</Box>
    </Box>
  );
};

export default Layout;
