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
  {
    id: 2,
    name: "HINO 500 Series",
    perusahaan: "PT SINAR MATAHARI",
    driver: "Syams Syair",
    contract: "Contract/abcd/234cf",
    phone: "082523952352",
    status: true,
  },
  {
    id: 3,
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
                  <Grid item md={6}>
                    <Typography variant={"h4"} mt={2} ml={2}>
                      PT SINAR MENTARI
                    </Typography>
                  </Grid>
                  <Grid item md={6}></Grid>
                  <Grid md={5}>
                    <Box mt={2}>
                      <form>
                        <Grid
                          container
                          alignItems="center"
                          display="flex"
                          marginBottom={2}
                        >
                          <Grid md={4}>
                            <label for="induk">Induk Perusahaan :</label>
                          </Grid>
                          <Grid ml={2}>
                            <label for="induk">PT. Galaksi Bima Sakti</label>
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
                            <label for="kontrak">23 /du/skd/ppi/xi/2019</label>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          alignItems="center"
                          display="flex"
                          marginBottom={2}
                        >
                          <Grid md={4}>
                            <label for="mor">M.O.R :</label>
                          </Grid>
                          <Grid ml={2}>
                            <label for="mor">01. DKI Jakarta</label>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          alignItems="center"
                          display="flex"
                          marginBottom={2}
                        >
                          <Grid md={4}>
                            <label for="site">Site Perusahaan :</label>
                          </Grid>
                          <Grid ml={2}>
                            <label for="site">Headquarter</label>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          alignItems="center"
                          display="flex"
                          marginBottom={2}
                        >
                          <Grid md={4}>
                            <label for="type">Tipe Perusahaan :</label>
                          </Grid>
                          <Grid ml={2}>
                            <label for="type">Business to Business</label>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          alignItems="center"
                          display="flex"
                          marginBottom={2}
                        >
                          <Grid md={4}>
                            <label for="industri">Industri :</label>
                          </Grid>
                          <Grid ml={2}>
                            <label for="industri">Logistik</label>
                          </Grid>
                        </Grid>
                        <Grid container alignItems="center" display="flex">
                          <Grid xs="2" md="2" lg="2">
                            {/* */}
                          </Grid>
                          <Grid
                            xs="10"
                            md="10"
                            lg="4"
                            display={"Flex"}
                            justifyContent={"center"}
                            ml={1}
                            mt={1}
                          ></Grid>
                        </Grid>
                      </form>
                    </Box>
                  </Grid>
                  <Grid md={5} mt={2}>
                    <Box sx={{ display: { xs: 'block' } }}>
                      <Grid
                        container
                        alignItems="center"
                        display="flex"
                        marginBottom={2}
                      >
                        <Grid md={3}>
                          <label for="phone">Phone :</label>
                        </Grid>
                        <Grid ml={2}>
                          <label for="phone">+628111522222</label>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        display="flex"
                        marginBottom={2}
                      >
                        <Grid md={3}>
                          <label for="fax">Fax :</label>
                        </Grid>
                        <Grid ml={2}>
                          <label for="fax">+628111522222</label>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        display="flex"
                        marginBottom={2}
                      >
                        <Grid md={3}>
                          <label for="website">Website :</label>
                        </Grid>
                        <Grid ml={2}>
                          <label for="website">www.sinarmentari.com</label>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        display="flex"
                        marginBottom={2}
                      >
                        <Grid md={3}>
                          <label for="owner">Ownership :</label>
                        </Grid>
                        <Grid ml={2}>
                          <label for="owner">Private</label>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        display="flex"
                        marginBottom={2}
                      >
                        <Grid md={3}>
                          <label for="employees">Employees :</label>
                        </Grid>
                        <Grid ml={2}>
                          <label for="employees">250</label>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        alignItems="center"
                        display="flex"
                        marginBottom={2}
                      >
                        <Grid md={3}>
                          <label for="sic">SIC Code :</label>
                        </Grid>
                        <Grid ml={2}>
                          <label for="sic">0004</label>
                        </Grid>
                      </Grid>
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
