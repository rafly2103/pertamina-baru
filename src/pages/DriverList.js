import Home from "./Home";import Navbar from "../components/Navbar";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import Box from "@mui/material/Box";

import CardPerusahaan from "../components/CardPerusahaan";
import CardDriver from "../components/CardDriver";

const DUMMY_LIST_PERUSAHAAN = [
  {
    id: 1,
    name: "Syams Syair R",
    jenisKelamin: "Laki-laki",
    email: "thesyams.rebel8@gmail.com",
    phone: "082523952352",
    image: "https://i.pravatar.cc/150?img=57",
    status: true,
  },
  {
    id: 2,
    name: "Reska",
    jenisKelamin: "Laki-laki",
    email: "screamparad0x@gmail.com",
    phone: "082523952352",
    image: "https://i.pravatar.cc/150?img=17",
    status: false,
  },
  {
    id: 3,
    name: "Navira",
    jenisKelamin: "Perempuan",
    email: "tzz@gmail.com",
    phone: "0835952352",
    image: "https://i.pravatar.cc/150?img=1",
    status: true,
  },
  {
    id: 4,
    name: "Faris Muhammad",
    jenisKelamin: "Laki-laki",
    email: "mfarissetiawan91@gmail.com",
    phone: "082523952352",
    image: "https://i.pravatar.cc/150?img=60",
    status: false,
  },
];

export default function DriverList() {
  return (
    <Box>
      <Home>
        <Navbar link={`Driver`} name={`List`} />
        <Box backgroundColor={"rgb(244, 244, 244)"} minHeight={"90vh"}>
          <Box p={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={"bolder"}>
                  Cari Driver
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
              {DUMMY_LIST_PERUSAHAAN.map((list, index) => {
                return (
                  <>
                    <Grid item md={4}>
                      <CardDriver
                        key={index}
                        id={list.id}
                        name={list.name}
                        jenisKelamin={list.jenisKelamin}
                        email={list.email}
                        phone={list.phone}
                        image={list.image}
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
