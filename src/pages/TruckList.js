import Box from "@mui/material/Box";import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Home from "./Home";
import CardTruck from "../components/CardTruck";
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

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
    perusahaan: "PT GERHANA",
    driver: "Reska",
    contract: "Contract/efhwf/webweb",
    phone: "08235235",
    status: false,
  },
  {
    id: 3,
    name: "HINO 300 Series",
    perusahaan: "PT INDAH PERKASA",
    driver: "Navira",
    contract: "Contract/ewkgl/2wvwe",
    phone: "08982948294",
    status: true,
  },
  {
    id: 4,
    name: "HINO 500 Series",
    perusahaan: "PT AXXC",
    driver: "Faris Muhammad",
    contract: "Contract/wefwe/239829ch",
    phone: "087878909097",
    status: false,
  },
];
const FilterTruck = [
  { title: 'PT Sinar Matahari'},
  { title: 'PT Gerhana'},
  { title: 'PT Indah Perkasa'},
  { title: 'PT AXXC'},
];
export default function TruckList() {
  return (
    <Box>
      <Home>
        <Navbar link="Truck" name="List" />
        <Box backgroundColor={"rgb(244, 244, 244)"} minHeight={"90vh"}>
          <Box p={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={"bolder"}>
                  Cari Truck
                </Typography>
                <Grid container spacing={2} padding={0} marginTop={1} p={0}>
                <Stack spacing={3} sx={{ width: 400 }} ml={2}>
                <Autocomplete
        multiple
        id="tags-outlined"
        options={FilterTruck}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Cari Truck"
            placeholder="Cari..."
          />
        )}
      />
      </Stack>
                </Grid>
              </CardContent>
            </Card>
          </Box>

          <Box p={3} pt={0}>
            <Grid container padding={0} spacing={3}>
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
                        image={list.image}
                        phone={list.phone}
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
