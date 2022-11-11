import { Box } from "@mui/material";
import * as React from "react";
import { IComponent } from "../components/utilities/Interfaces";

const FAQ: React.FC<IComponent> = (props) => {
  return (
    <Box sx={{ width: "70%", display: "flex", alignItems: "center" }}>
      FAQ here
    </Box>
  );
};

export default FAQ;
