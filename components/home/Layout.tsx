import { Box } from "@mui/material";
import * as React from "react";
import { useTheme } from "../../lib/ThemeContext";
import { IComponent } from "../utilities/Interfaces";
import TopNav, { navBarHeight } from "../nav/TopNav";
import Footer from "@components/nav/Footer";

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
      <Box sx={{ mt: navBarHeight }}>
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {props.children}
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Layout;
