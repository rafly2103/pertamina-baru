import React from "react";
import Box from "@mui/material/Box";
import Home from "./Home";
import Navbar from "../components/Navbar";
import {
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import CardBengkel from "../components/CardBengkel";

const DUMMY_LIST_BENGKEL = [
  {
    id: 1,
    name: "BENGKEL ASTRA TIGA RIBU",
    contract: "Contact",
    phone: "082523952352",
    alamat: "Jl.Kemang Timur Tengah no 10",
    status: true,
  },
  {
    id: 2,
    name: "BENGKEL PASAR MINGGU",
    contract: "Contact",
    phone: "08235235",
    alamat: "Jl.Karsa Barat Timur no 21",
    status: false,
  },
  {
    id: 3,
    name: "BENGKEL INDAH PERMATA",
    contract: "Contact",
    phone: "08982948294",
    alamat: "Jl.Bintang Tengah no 9",
    status: true,
  },
  {
    id: 4,
    name: "BENGKEL TAMBAL BAN",
    contract: "Contact",
    phone: "087878909097",
    alamat: "Jl.Tambal Depan no 83",
    status: false,
  },
];

export default function BengkelList() {
  return (
    <Box>
      <Home>
        <Navbar link={`Bengkel`} name={`List`} />
        <Box backgroundColor={"rgb(244, 244, 244)"}>
          <Box p={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={"bolder"}>
                  Cari Bengkel
                </Typography>
                <Grid container spacing={2} padding={0} marginTop={1} p={0}>
                  <Grid item md={4}>
                    <TextField size="small" fullWidth={true} />
                  </Grid>

                  <Grid item md={2}>
                    <Button variant="contained">Cari</Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>

          <Box p={3} pt={0}>
            <Grid container padding={0} spacing={3}>
              {DUMMY_LIST_BENGKEL.map((list, index) => {
                return (
                  <>
                    <Grid item md={4}>
                      <CardBengkel
                        key={index}
                        id={list.id}
                        name={list.name}
                        contract={list.contract}
                        phone={list.phone}
                        alamat={list.alamat}
                        status={list.status}
                      />
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Home>
    </Box>
  );
}
