import React from "react";
import { Grid } from "@mui/material";

interface propsType {
  children: JSX.Element[] | JSX.Element;
  direction: "row" | "column";
  gap: number;
}

const Organism = ({ children, direction, gap }: propsType) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      p="0 5%"
      gap={gap}
      flexDirection={direction}
    >
      {React.Children.map(children, (child) => (
        <Grid item>{child}</Grid>
      ))}
    </Grid>
  );
};

export default Organism;
