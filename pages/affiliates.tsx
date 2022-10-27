import { Box } from "@mui/material";
import * as React from "react";
import { Header } from "../components/utilities/Headers";
import { IComponent } from "../components/utilities/Interfaces";

const Affiliates: React.FC<IComponent> = (props) => {
  return (
    <Box sx={{ width: "70%", display: "flex", alignItems: "center" }}>
      <Header
        title="Earn rewards"
        subtitle="Provide a platform for your users via Sprealdy and earn rewards for the revenu you generate."
      />
    </Box>
  );
};

export default Affiliates;
