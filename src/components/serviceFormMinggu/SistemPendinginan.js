import { Box, TextField, Grid, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export default function SisiKananBelakang() {
  return (
<Box>
<Box mb={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            1. Ketinggian Air dalam Radiator & Reservbar (Cadangan)
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
            2. Daya Lengket Kipas (Berat Ringan)
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
            3. Kebocoran Air (pada Mesin, Selang, Radiator & Waterpump)
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
