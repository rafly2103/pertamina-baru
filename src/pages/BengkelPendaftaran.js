import React, { useState } from "react";import Box from "@mui/material/Box";
import Home from "./Home";

//TABS
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BengkelDaftarSatuan from "../components/BengkelDaftarSatuan";
import Navbar from "../components/Navbar";
import { Card, CardContent } from "@mui/material";
import BengkelBatch from "../components/BengkelBatch";

export default function BengkelPendaftaran() {
  const [valueTabs, setValueTabs] = useState("satuan");

  const handleChange = (event, newValue) => {
    setValueTabs(newValue);
  };

  return (
    <Box>
      <Home>
        <Navbar link={`Bengkel`} name="Pendaftaran" />
        <Box backgroundColor={"rgb(244, 244, 244)"} minHeight={"90vh"}>
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
                    <BengkelDaftarSatuan />
                  </>
                ) : (
                  <BengkelBatch/>
                )}
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Home>
    </Box>
  );
}
