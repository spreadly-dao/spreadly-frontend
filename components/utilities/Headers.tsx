import { useTheme } from "@lib/ThemeContext";
import { Box, Typography } from "@mui/material";
import { DarkTheme } from "@styles/theme";
import * as React from "react";
import AbstractButton from "./Button";

interface IHeader {
  title: string;
  subtitle?: string;
  button?: string;
}

export const Header: React.FC<IHeader> = (props) => {
  return (
    <Box>
      <h2>{props.title}</h2>
      {props.subtitle && <h5>{props.subtitle}</h5>}
      {props.button && <AbstractButton>{props.button}</AbstractButton>}
    </Box>
  );
};

interface IHighlightedHeader {
  before: string;
  highlighted: string;
  after: string;
  subtitle?: string;
}

export const HighlightedHeader: React.FC<IHighlightedHeader> = (props) => {
  const { theme } = useTheme();
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h1" sx={{ fontFamily: "IBM Plex Mono" }}>
          {props.before + " "}{" "}
          <Box
            sx={{
              display: "inline",
              backgroundColor: "primary.main",
              color: theme === DarkTheme ? "background.default" : "black",
              p: ".35rem",
            }}
          >
            {props.highlighted}
          </Box>{" "}
          {" " + props.after}
        </Typography>
      </Box>
      {props.subtitle && <Typography variant="h5">{props.subtitle}</Typography>}
    </>
  );
};
