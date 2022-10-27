import { Box } from "@mui/material";
import * as React from "react";
import { useTheme } from "../../lib/ThemeContext";
import { IComponent } from "../utilities/Interfaces";
import TopNav, { navBarHeight } from "../nav/TopNav";
import Footer from "@components/nav/Footer";
import { deviceStruct } from "@styles/style";
import Image from "next/image";

const Layout: React.FC<IComponent> = (props) => {
  return (
    <>
    {/* <Box sx={{height: '100vh', width: '100vh', position: 'fixed'}}>
      <Image
          src={'/background/texture.png'}
          layout='fill'
          objectFit='cover'

          style={{
            backgroundRepeat: 'repeat',
            // position: 'absolute',
            mixBlendMode: 'soft-light'
          }}
        />
    </Box> */}
    
      
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "calc(100vh - 17rem)",
          }}
        >
          <Box
            sx={{
              width: deviceStruct("100%", "100%", "100%", "75%", "1500px"),
            }}
          >
            {props.children}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
    </>

  );
};

export default Layout;
