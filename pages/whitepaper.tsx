import { Box } from "@mui/material";
import * as React from "react";
import { IComponent } from "../components/utilities/Interfaces";

const Whitepaper: React.FC<IComponent> = (props) => {
  return (
    <Box sx={{ width: "70%", display: "flex", alignItems: "center" }}>
      White paper here
    </Box>
  );
};

export default Whitepaper;
