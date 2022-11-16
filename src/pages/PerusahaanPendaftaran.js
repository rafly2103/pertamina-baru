import React, { useState, useEffect } from "react";import Box from "@mui/material/Box";
import Home from "./Home";

//TABS
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PerusahaanDaftarSatuan from "../components/PerusahaanDaftarSatuan";
import PerusahaanBatch from "../components/PerusahaanBatch";
import Navbar from "../components/Navbar";
import { Card, CardContent } from "@mui/material";

export default function PerusahaanPendaftaran() {
  const [valueTabs, setValueTabs] = useState("satuan");

  const handleChange = (event, newValue) => {
    setValueTabs(newValue);
  };

  return (
    <Box display={"inherit"}>
      <Home>
        <Navbar link={`Perusahaan`} name="Pendaftaran" />
        <Box backgroundColor={"rgb(244, 244, 244)"}>
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
                    <PerusahaanDaftarSatuan />
                  </>
                ) : (
                  <PerusahaanBatch/>
                )}
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Home>
    </Box>
  );
}
