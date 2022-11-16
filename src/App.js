import * as React from "react";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import PerusahaanList from "./pages/PerusahaanList";
import PerusahaanPendaftaran from "./pages/PerusahaanPendaftaran";
import PerusahaanEdit from "./pages/PerusahaanEdit";
import TruckEdit from "./pages/TruckEdit";
import TruckPendaftaran from "./pages/TruckPendaftaran";
import DriverEdit from "./pages/DriverEdit";
import DriverList from "./pages/DriverList";
import Dashboard from "./pages/Dashboard";
import DriverPendaftaran from "./pages/DriverPendaftaran";
import TruckList from "./pages/TruckList";
import ServiceFormMinggu from "./pages/ServiceFormMinggu";
import BengkelPendaftaran from "./pages/BengkelPendaftaran";
import BengkelList from "./pages/BengkelList";
import BarSide from "./pages/BarSide";
import BengkelEdit from "./pages/BengkelEdit";
import Signin from "./signin";

export default function BasicGrid() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* PERUSAHAAN */}
          <Route path="perusahaan/list" element={<PerusahaanList />} />
          <Route
            path="perusahaan/pendaftaran"
            element={<PerusahaanPendaftaran />}
          />
          <Route path="perusahaan/edit/:id" element={<PerusahaanEdit />} />
          <Route path="truck/edit/:id" element={<TruckEdit />} />
          <Route path="driver/edit/:id" element={<DriverEdit />} />
          <Route path="bengkel/edit/:id" element={<BengkelEdit />} />
          {/* DRIVER */}
          <Route path="driver/list" element={<DriverList />} />
          <Route path="driver/pendaftaran" element={<DriverPendaftaran />} />

          {/* TRUCK */}
          <Route path="truck/list" element={<TruckList />} />
          <Route path="truck/pendaftaran" element={<TruckPendaftaran />} />
          <Route path="service/form" element={<ServiceFormMinggu />} />

         {/* BENGKEL */}
          <Route path="bengkel/list" element={<BengkelList />} />
          <Route path="bengkel/pendaftaran" element={<BengkelPendaftaran />} />

        </Routes>
      </BrowserRouter>
    </Box>
  );
}
