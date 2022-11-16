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
                      PT SINAR MENTARI
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
                          <label for="nama">Nama Lengkap :</label>
                        </Grid>
                        <Grid ml={2}>
                        <label for="nama">Syams Syair</label>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        display="flex"
                        marginBottom={2}
                      >
                        <Grid md={4}>
                          <label for="lahir">Tanggal Lahir :</label>
                        </Grid>
                        <Grid ml={2}>
                        <label for="lahir">29 Februari 1997</label>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        display="flex"
                        marginBottom={2}
                      >
                        <Grid md={4}>
                          <label for="jk">Jenis Kelamin :</label>
                        </Grid>
                        <Grid ml={2}>
                        <label for="jk">Laki-Laki</label>
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
                      <Grid
                        container
                        alignItems="center"
                        display="flex"
                        marginBottom={2}
                      >
                        <Grid md={4}>
                          <label for="foto">Foto :</label>
                        </Grid>
                        <Grid ml={2}>
                        <label for="hp">-</label>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        display="flex"
                        marginBottom={2}
                      >
                        <Grid md={4}>
                          <label for="ktp">Foto KTP :</label>
                        </Grid>
                        <Grid ml={2}>
                        <label for="hp">-</label>
                        </Grid>
                      </Grid>
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
