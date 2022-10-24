import { Box, Paper } from "@mui/material";
import * as React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import useDidMountEffect from "@lib/hooks/useDidMountHook";
import { useTheme } from "@lib/ThemeContext";
import { DarkTheme, LightTheme } from "@styles/theme";

const ThemeToggle: React.FC = () => {
  const {theme, setTheme} = useTheme();
  const [animate, setAnimate] = React.useState<boolean>(false);
  useDidMountEffect(() => {
    setAnimate(true);
  }, [theme]);
  const backgroundStyle = {width: "50%", display: 'flex', alignItems: "center", justifyContent: 'center'}
  return (
    <>
      <Box sx={{ position: "relative", height: "2rem", width: '4rem', mr: '.5rem' }}>
        <Box
          sx={{
            position: "absolute",
            top: "0",
            right: "5%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            borderRadius: "1rem",
            border: 1,
            borderColor: "border.main",
            fontSize: ".8rem",
            backgroundColor: "primary.lightOpacity",
            color: "text.main",
            p: ".25rem",
            cursor: "pointer",
          }}
        >
          <Box
            sx={backgroundStyle}
            onClick={() => setTheme(LightTheme)}
          >
            <WbSunnyIcon
                sx={{ fontSize: "1rem" }}
                className={animate ? "theme-icon" : ""}
              />
          </Box>
          <Box
            sx={backgroundStyle}
            onClick={() => setTheme(DarkTheme)}
          >
            <Brightness2Icon
                sx={{ fontSize: "1rem" }}
              />
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Paper
            elevation={4}
            sx={{
              height: "1.75rem",
              fontSize: ".9rem",
              width: "55%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "backgroundColor.main",
              borderRadius: "1rem",
              zIndex: 111,
              border: 1,

              borderColor: "border.main",
              ml: theme === LightTheme ? "-.25rem" : "auto",
              mr: theme === LightTheme ? "auto" : "0",
            }}
            className={
              animate
                ? `w3-animate-${theme === LightTheme ? "right" : "left"}`
                : ""
            }
          >
            {theme === LightTheme ? (
              <WbSunnyIcon
                sx={{ fontSize: "1rem" }}
                className={animate ? "theme-icon" : ""}
              />
            ) : (
              <Brightness2Icon
                sx={{ fontSize: "1rem", transform: "rotate(0)" }}
                className={animate ? "theme-icon" : ""}
              />
            )}
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default ThemeToggle;