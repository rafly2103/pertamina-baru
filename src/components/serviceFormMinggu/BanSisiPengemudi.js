import { Box, TextField, Grid, Typography } from "@mui/material";import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export default function SisiKiriTengah() {
  return (
<Box>
<Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            1. Kondisi Ban
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
            2. Ketebalan Ban
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
            3. Kondisi Chasing Ban
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
            4. Tekanan Angin Ban
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
            5. Mur dan Baut Roda
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
            6. Jumlah Mur dan Baut Roda lengkap
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
            7. Kekencangan Mur & Baut Roda
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
            8. Kondisi Ban Cadangan
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
