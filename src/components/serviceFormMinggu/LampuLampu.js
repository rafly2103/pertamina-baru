import { Box, TextField, Grid, Typography } from "@mui/material";import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export default function SisiDepanKendaraan() {
  return (
    <Box>
            <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
        <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            LAMPU DEPAN
          </FormLabel>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Lampu Besar :
          </FormLabel>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            1. Berfungsi Jauh
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            2. Berfungsi Dekat
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            3. Kondisi Mika
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
        <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Lampu Kota :
          </FormLabel>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            1. Berfungsi
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            2. Kondisi Mika
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
        <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Lampu Sign :
          </FormLabel>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            1. Berfungsi
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            2. Kondisi Mika
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
        <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Lampu Rotan :
          </FormLabel>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            1. Berfungsi
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            2. Kondisi Mika
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
        <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            LAMPU BELAKANG
          </FormLabel>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Lampu Kota :
          </FormLabel>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
           1. Berfungsi
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            2. Kondisi Mika
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
        <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Lampu Sign :
          </FormLabel>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
           1. Berfungsi
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            2. Kondisi Mika
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
        <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Lampu Rem :
          </FormLabel>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            1. Berfungsi
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            2. Kondisi Mika
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
        <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Lampu Mundur :
          </FormLabel>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            1. Berfungsi
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            2. Kondisi Mika
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
        <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            LAMPU SAMPING
          </FormLabel>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Lampu Kota :
          </FormLabel>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            1. Berfungsi
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            2. Kondisi Mika
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
        <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Lampu Sign :
          </FormLabel>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            1. Berfungsi
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
      <Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            2. Kondisi Mika
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Keterangan" />
      </Box>
    </Box>
  );
}
