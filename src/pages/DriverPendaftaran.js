import React, { useState } from "react";
import { Box, Card, CardContent } from "@mui/material";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DriverDaftarSatuan from "../components/DriverDaftarSatuan";
import DriverBatch from "../components/DriverBatch";

export default function DriverPendaftaran() {
  const [valueTabs, setValueTabs] = useState("satuan");

  const handleChange = (event, newValue) => {
    setValueTabs(newValue);
  };

  return (
    <Box>
      <Home>
        <Navbar link={`Driver`} name={`Pendaftaran`} />
        <Box backgroundColor={"rgb(244, 244, 244)"} minHeight={`100vh`}>
          <Box p={3}>
            <Card>
              <CardContent>
                <Box sx={{ width: "100%" }}>
                  <Tabs
                    value={valueTabs}
                    onChange={handleChange}
                    aria-label="secondary tabs example"
                  >
                    <Tab value="satuan" label="Satuan" />
                    <Tab value="batch" label="Batch" />
                  </Tabs>
                </Box>

                {valueTabs === "satuan" ? (
                  <>
                    <DriverDaftarSatuan />
                  </>
                ) : (
                  <DriverBatch/>
                )}
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Home>
    </Box>
  );
}
