import { Box, TextField, Grid, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function Kamera(props) {
  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto");
  }

  return (
    <Camera
      onTakePhoto={(dataUri) => {
        handleTakePhoto(dataUri);
      }}
      idealFacingMode={FACING_MODES.ENVIRONMENT}
    />
  );
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function SisiKananDepan() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Fungsi Rem Kanan:
          </FormLabel>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            1. Head Truck Sumbu I
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        </Box>
        <Grid   container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  spacing={2}>
          <Grid item md={7}>
        <TextField fullWidth placeholder="Keterangan" />
        </Grid>
        <Grid item md={4}>
        <Button variant="contained" onClick={handleClickOpen}>
            <CameraAltIcon />
          </Button>
          </Grid>
          </Grid>
        <Box flexDirection={`column`} mb={2}>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Kamera
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Kamera />
            </DialogContent>
          </BootstrapDialog>
        </Box>
      <Box mt={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            2. Head Truck Sumbu II
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Grid   container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  spacing={2}>
          <Grid item md={7}>
        <TextField fullWidth placeholder="Keterangan" />
        </Grid>
        <Grid item md={4}>
        <Button variant="contained" onClick={handleClickOpen}>
            <CameraAltIcon />
          </Button>
          </Grid>
          </Grid>
        <Box flexDirection={`column`} mb={2}>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Kamera
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Kamera />
            </DialogContent>
          </BootstrapDialog>
        </Box>
      <Box mt={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            3. Head Truck Sumbu III
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Grid   container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  spacing={2}>
          <Grid item md={7}>
        <TextField fullWidth placeholder="Keterangan" />
        </Grid>
        <Grid item md={4}>
        <Button variant="contained" onClick={handleClickOpen}>
            <CameraAltIcon />
          </Button>
          </Grid>
          </Grid>
        <Box flexDirection={`column`} mb={2}>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Kamera
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Kamera />
            </DialogContent>
          </BootstrapDialog>
        </Box>
      <Box mt={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            4. Tangki Trailer I
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Grid   container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  spacing={2}>
          <Grid item md={7}>
        <TextField fullWidth placeholder="Keterangan" />
        </Grid>
        <Grid item md={4}>
        <Button variant="contained" onClick={handleClickOpen}>
            <CameraAltIcon />
          </Button>
          </Grid>
          </Grid>
        <Box flexDirection={`column`} mb={2}>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Kamera
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Kamera />
            </DialogContent>
          </BootstrapDialog>
        </Box>
      <Box mt={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            5. Tangki Trailer II
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Grid   container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  spacing={2}>
          <Grid item md={7}>
        <TextField fullWidth placeholder="Keterangan" />
        </Grid>
        <Grid item md={4}>
        <Button variant="contained" onClick={handleClickOpen}>
            <CameraAltIcon />
          </Button>
          </Grid>
          </Grid>
        <Box flexDirection={`column`} mb={2}>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Kamera
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Kamera />
            </DialogContent>
          </BootstrapDialog>
        </Box>
      <Box mt={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            6. Tangki Trailer III
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Grid   container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  spacing={2}>
          <Grid item md={7}>
        <TextField fullWidth placeholder="Keterangan" />
        </Grid>
        <Grid item md={4}>
        <Button variant="contained" onClick={handleClickOpen}>
            <CameraAltIcon />
          </Button>
          </Grid>
          </Grid>
        <Box flexDirection={`column`} mb={2}>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Kamera
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Kamera />
            </DialogContent>
          </BootstrapDialog>
        </Box>
      <Box mt={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Fungsi Rem Kiri :
          </FormLabel>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            1. Head Truck Sumbu I
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <Grid   container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  spacing={2}>
          <Grid item md={7}>
        <TextField fullWidth placeholder="Keterangan" />
        </Grid>
        <Grid item md={4}>
        <Button variant="contained" onClick={handleClickOpen}>
            <CameraAltIcon />
          </Button>
          </Grid>
          </Grid>
        <Box flexDirection={`column`} mb={2}>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Kamera
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Kamera />
            </DialogContent>
          </BootstrapDialog>
        </Box>
      </Box>
      <Box mt={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            2. Head Truck Sumbu II
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
        <Grid   container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  spacing={2}>
          <Grid item md={7}>
        <TextField fullWidth placeholder="Keterangan" />
        </Grid>
        <Grid item md={4}>
        <Button variant="contained" onClick={handleClickOpen}>
            <CameraAltIcon />
          </Button>
          </Grid>
          </Grid>
        <Box flexDirection={`column`} mb={2}>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Kamera
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Kamera />
            </DialogContent>
          </BootstrapDialog>
        </Box>
      </Box>
      <Box mt={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            3. Head Truck Sumbu III
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Grid   container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  spacing={2}>
          <Grid item md={7}>
        <TextField fullWidth placeholder="Keterangan" />
        </Grid>
        <Grid item md={4}>
        <Button variant="contained" onClick={handleClickOpen}>
            <CameraAltIcon />
          </Button>
          </Grid>
          </Grid>
        <Box flexDirection={`column`} mb={2}>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Kamera
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Kamera />
            </DialogContent>
          </BootstrapDialog>
        </Box>
      <Box mt={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            4. Tangki Trailer I
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Grid   container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  spacing={2}>
          <Grid item md={7}>
        <TextField fullWidth placeholder="Keterangan" />
        </Grid>
        <Grid item md={4}>
        <Button variant="contained" onClick={handleClickOpen}>
            <CameraAltIcon />
          </Button>
          </Grid>
          </Grid>
        <Box flexDirection={`column`} mb={2}>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Kamera
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Kamera />
            </DialogContent>
          </BootstrapDialog>
        </Box>
      <Box mt={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            5. Tangki Trailer II
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Grid   container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  spacing={2}>
          <Grid item md={7}>
        <TextField fullWidth placeholder="Keterangan" />
        </Grid>
        <Grid item md={4}>
        <Button variant="contained" onClick={handleClickOpen}>
            <CameraAltIcon />
          </Button>
          </Grid>
          </Grid>
        <Box flexDirection={`column`} mb={2}>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Kamera
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Kamera />
            </DialogContent>
          </BootstrapDialog>
        </Box>
      <Box mt={4} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" mt={2}>
            6. Tangki Trailer III
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Baik" control={<Radio />} label="Baik" />
            <FormControlLabel value="Tidak" control={<Radio />} label="Tidak" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Grid   container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
  spacing={2}>
          <Grid item md={7}>
        <TextField fullWidth placeholder="Keterangan" />
        </Grid>
        <Grid item md={4}>
        <Button variant="contained" onClick={handleClickOpen}>
            <CameraAltIcon />
          </Button>
          </Grid>
          </Grid>
        <Box flexDirection={`column`} mb={2}>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              Kamera
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Kamera />
            </DialogContent>
          </BootstrapDialog>
        </Box>
    </Box>
  );
}
