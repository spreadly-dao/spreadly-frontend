import { Box, Button, Paper, Card, CardActions, CardContent, Typography } from "@mui/material";
import * as React from "react";
import { IComponent } from "./Interfaces";

interface IAbstractButton extends IComponent {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
  color?: string;
  mr?: number;
  variant?: string;
}

const AbstractButton: React.FC<IAbstractButton> = (props) => {
  const borderRadius = "1rem";
  return (
   
      <Card
        sx={{
          backgroundColor: "primary.main",
          pb: ".27813rem",
          pr: ".17063rem",
          borderRadius,
          mt: "1rem",
          mb: "1rem",
          mr: "1rem"
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 72 }} color="text.black" gutterBottom>
          34Mil
          </Typography>
          <Typography variant="h5" component="div">
          </Typography>
          <Typography sx={{ fontSize: 40, mb: 1.5 }} color="text.black">
          Developers
          </Typography>
          <Typography variant="body2">
          <br />
          {'"Instead of paying a third party provider, Spreadly offers a free and open market for affliates to onboard their users. No hidden fees, the only fee is on individual orders. "'}
          </Typography>
      </CardContent>
        <CardActions>
          <Button
            size="large"
            variant={props.variant}
            color="secondary"
            sx={{ borderRadius, ml: "21rem" ,mt: "-52rem", mr: "-2rem", fontWeight: 700}}
          >
            {props.children}
          </Button>
        </CardActions>
      </Card>
  );
};

AbstractButton.defaultProps = {
  color: "primary",
  variant: "contained"
}

export default AbstractButton;