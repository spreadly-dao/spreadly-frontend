import { Box, Button, Paper } from "@mui/material";
import * as React from "react";
import { IComponent } from "./Interfaces";

interface IAbstractButton extends IComponent {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
}

const AbstractButton: React.FC<IAbstractButton> = (props) => {
  const borderRadius = "1rem";
  return (
    <Box sx={{ backgroundColor: "white", pb: ".1rem", pr: '.12rem', borderRadius }}>
      <Box sx={{ backgroundColor: "black", pb: ".15rem", pr: '.15rem', mt: '-.1rem', borderRadius }}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          sx={{ borderRadius, mt: '-.25rem', ml: '-.2rem', fontWeight: 700 }}
        >
          {props.children}
        </Button>
      </Box>
    </Box>
  );
};

export default AbstractButton;
