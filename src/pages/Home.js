import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "./../components/Sidebar";
import BarSide from "./BarSide";

export default function Home({ children }) {
  return (
    <>
      <Box>
        <Grid container>
          <Grid xs={2} md={2} lg={2}>
            <Sidebar/>
          </Grid>
          <Grid xs={10} md={10} lg={10}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
