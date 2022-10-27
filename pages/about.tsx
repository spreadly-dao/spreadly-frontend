import { Box } from "@mui/material";
import * as React from "react";
import { Header } from "../components/utilities/Headers";
import { IComponent } from "../components/utilities/Interfaces";

const About: React.FC<IComponent> = (props) => {
  return (
    <Box sx={{ width: "70%", display: "flex", alignItems: "center" }}>
      <Header
        title="Isn't Spreadly great?"
        subtitle="Provide a platform for your users via Spreadly and earn rewards for the revenue you generate"
      />
    </Box>
  );
};

export default About;
