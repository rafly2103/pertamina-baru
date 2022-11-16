import {
  Grid,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from "@mui/material";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import { Box } from "@mui/system";

import React, { useState } from "react";

export default function DriveDaftarSatuan() {
  const [kelamin, setKelamin] = useState("Laki-laki");

  const handleChange = (e) => {
    setKelamin(e.target.value);
  };

  const blue = {
    100: "#DAECFF",
    200: "#80BFFF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E7EBF0",
    200: "#E0E3E7",
    300: "#CDD2D7",
    400: "#B2BAC2",
    500: "#A0AAB4",
    600: "#6F7E8C",
    700: "#3E5060",
    800: "#2D3843",
    900: "#1A2027",
  };

  const StyledInputElement = styled("input")(
    ({ theme }) => `
    width: 240px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      outline: 3px solid ${
        theme.palette.mode === "dark" ? blue[500] : blue[200]
      };
    }
  `
  );

  const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
      <InputUnstyled
        slots={{ input: StyledInputElement }}
        {...props}
        ref={ref}
      />
    );
  });
  return (
    <Box mt={2}>
      <form>
        <Grid container alignItems="center" display="flex" mb={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="nama">Nama Lengkap</label>
          </Grid>
          <Grid xs="10" md="10" lg="10" display="flex">
            <CustomInput id="nama" placeholder="Nama Lengkap.." />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" mb={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="lahir">Tanggal Lahir</label>
          </Grid>
          <Grid xs="10" md="10" lg="10" display="flex">
            <CustomInput type="date" id="lahir" />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" mb={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="mor">Jenis Kelamin</label>
          </Grid>
          <Grid xs="10" md="10" lg="10" display="flex">
            <RadioGroup row>
              <FormControlLabel
                value="Laki-laki"
                control={<Radio />}
                label="Laki-laki"
                checked={kelamin === "Laki-laki"}
                onChange={handleChange}
              />
              <FormControlLabel
                value="Perempuan"
                control={<Radio />}
                label="Perempuan"
                onChange={handleChange}
                checked={kelamin === "Perempuan"}
              />
            </RadioGroup>
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" mb={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="email">Email</label>
          </Grid>
          <Grid xs="10" md="10" lg="10" display="flex">
            <CustomInput id="email" placeholder="E-Mail.." />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" mb={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="hp">Nomor Handphone</label>
          </Grid>
          <Grid xs="10" md="10" lg="10" display="flex">
            <CustomInput id="hp" placeholder="Nomor Handphone.." />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" mb={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="foto">Foto</label>
          </Grid>
          <Grid xs="10" md="10" lg="10" display="flex">
            <CustomInput type="file" id="foto" />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" mb={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="ktp">KTP</label>
          </Grid>
          <Grid xs="10" md="10" lg="10" display="flex">
            <CustomInput id="ktp" type="file" />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" mb={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="kontrak">Kontrak</label>
          </Grid>
          <Grid xs="10" md="10" lg="10" display="flex">
            <CustomInput id="kontrak" type="file" />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
