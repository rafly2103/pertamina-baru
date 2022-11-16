import {
  Button,
  CardContent,
  Typography,
  Box,
  Avatar,
  Divider,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import Chip from '@mui/material/Chip';
import PropTypes from "prop-types";
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

export default function CardDriver({
  name,
  phone,
  jenisKelamin,
  id,
  image,
  status,
  email,
}) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
          <Box>
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
      <Card sx={{ minWidth: 200, border: "1px solid rgb(217 218 219)"}}>
        <CardContent>
          <Typography
            sx={{ fontSize: 10, fontWeight: "bolder" }}
            color="text.secondary"
            display={`flex`}
            alignItems={`center`}
            justifyContent={`space-between`}
            mb={1}
          >
            DRIVER
            <Chip size="small" label="Ganti Driver" variant="outlined" color="primary" onClick={handleClickOpen} />
          </Typography>
          <Typography>

          </Typography>
          <Divider />
          <Box mb={1} />
          <Box
            display={`flex`}
            alignItems={`center`}
            justifyContent={`space-between`}
          >
            <Box>
            <Link
                  to={`/driver/edit/${id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
              <Typography
                variant="h6"
                component="div"
                fontWeight={"bolder"}
                marginBottom={1}
              >
                {name}
              </Typography>
            </Link>
              <Typography variant="body2">{jenisKelamin}</Typography>

              <Typography variant="body2">{email}</Typography>
              <Typography variant="body2">{phone}</Typography>
            </Box>

            <Box>
              <Avatar sx={{ height: 80, width: 80 }} src={image} />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
