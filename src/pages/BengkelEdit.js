import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Home from "./Home";
import CardTruck from "../components/CardTruck";
const DUMMY_LIST_TRUCK = [
  {
    id: 1,
    name: "HINO 300 Series",
    perusahaan: "PT SINAR MATAHARI",
    driver: "Syams Syair",
    contract: "Contract/abcd/234cf",
    phone: "082523952352",
    status: true,
  },
];
export default function ServiceForm() {
  return (
    <Box>
      <Home>
        <Navbar link={`Perusahaan`} name={`Edit`} />
        <Box backgroundColor={"rgb(244, 244, 244)"} minHeight={`100vh`}>
          <Box p={3}>
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Typography variant={"h4"} mt={2} ml={2}>
                      BENGKEL ASTRA TIGA RIBU
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                  </Grid>
                  <Grid xs={12} md={5} ml={2}>
                  <Box mt={2}>
                    <form>
                    <Grid
                        container
                        alignItems="center"
                        display="flex"
                        marginBottom={2}
                      >
                        <Grid md={4}>
                          <label for="kontrak">No. Kontrak :</label>
                        </Grid>
                        <Grid ml={2}>
                        <label for="kontrak">Contract/abcd/234cf</label>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        display="flex"
                        marginBottom={2}
                      >
                        <Grid md={4}>
                          <label for="lahir">Alamat :</label>
                        </Grid>
                        <Grid ml={2}>
                        <label for="lahir">Jl.Kemang Timur Tengah no 10</label>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        display="flex"
                        marginBottom={2}
                      >
                        <Grid md={4}>
                          <label for="hp">Email :</label>
                        </Grid>
                        <Grid ml={2}>
                        <label for="hp">astra@tigaribu.com</label>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        display="flex"
                        marginBottom={2}
                      >
                        <Grid md={4}>
                          <label for="hp">No Handphone :</label>
                        </Grid>
                        <Grid ml={2}>
                        <label for="hp">082523952352</label>
                        </Grid>
                      </Grid>
                    </form>
                  </Box>
                  </Grid>
                  <Grid container padding={0} spacing={3} mt={2} mb={2}>
                    {DUMMY_LIST_TRUCK.map((list, index) => {
                      return (
                        <>
                          <Grid item md={4}>
                            <CardTruck
                              key={index}
                              id={list.id}
                              name={list.name}
                              perusahaan={list.perusahaan}
                              driver={list.driver}
                              contract={list.contract}
                              phone={list.phone}
                              status={list.status}
                            />
                          </Grid>
                        </>
                      );
                    })}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Home>
    </Box>
  );
}
