import React, { useState, useEffect } from "react";
import { Box, ListSubheader } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ListIcon from "@mui/icons-material/List";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { Link } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";

const NESTED_ITEMS_PERUSAHAAN = [
  {
    link: "/perusahaan/list",
    text: "List",
    icon: <ListIcon />,
  },
  {
    link: "/perusahaan/pendaftaran",
    text: "Pendaftaran",
    icon: <NoteAddIcon />,
  },
];

const NESTED_DRIVERS = [
  {
    link: "/driver/list",
    text: "List",
    icon: <ListIcon />,
  },
  {
    link: "/driver/pendaftaran",
    text: "Pendaftaran",
    icon: <NoteAddIcon />,
  },
];

const NESTED_ITEMS_TRUCK = [
  {
    link: "/truck/list",
    text: "List",
    icon: <ListIcon />,
  },
  {
    link: "/truck/pendaftaran",
    text: "Pendaftaran",
    icon: <NoteAddIcon />,
  },
];

const NESTED_ITEMS_SERVICE = [
  {
    link: "/service/form",
    text: "Form",
    icon: <ListIcon />,
  },
];

const NESTED_ITEMS_BENGKEL = [
  {
    link: "/bengkel/list",
    text: "List",
    icon: <ListIcon />,
  },
  {
    link: "/bengkel/pendaftaran",
    text: "Pendaftaran",
    icon: <NoteAddIcon />,
  },
];

export default function Sidebar() {
  const [nested1, setNested1] = useState(true);
  const [nested2, setNested2] = useState(true);
  const [nested3, setNested3] = useState(true);
  const [nested4, setNested4] = useState(true);
  const [nested5, setNested5] = useState(true);

  const handleClick = (index) => {
    if (index === 1) {
      setNested1(!nested1);
    } else if (index === 2) {
      setNested2(!nested2);
    } else if (index === 3) {
      setNested3(!nested3);
    } else if (index === 4) {
      setNested4(!nested4);
    }
    else if (index === 5) {
    setNested5(!nested5);
  }
  };

  return (
    <>
      <Box height={"100%"}>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              <Link
                to={`/`}
                style={{ textDecoration: "none", fontWeight: "bolder" }}
              >
                <a>TRUCK MAINTENANCE</a>
              </Link>
            </ListSubheader>
          }
        >
          <ListItemButton onClick={() => handleClick(1)}>
            <ListItemIcon>
              <ApartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Perusahaan" style={{ marginLeft: -10 }} />
            {nested1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={nested1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {NESTED_ITEMS_PERUSAHAAN.map((items, index) => {
                return (
                  <>
                    <Link
                      to={items.link}
                      key={index}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>{items.icon}</ListItemIcon>
                        <ListItemText primary={items.text} />
                      </ListItemButton>
                    </Link>
                  </>
                );
              })}
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleClick(2)}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Driver" style={{ marginLeft: -10 }} />
            {nested2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={nested2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {NESTED_DRIVERS.map((driver, index) => {
                return (
                  <>
                    <Link
                      to={driver.link}
                      key={index}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>{driver.icon}</ListItemIcon>
                        <ListItemText primary={driver.text} />
                      </ListItemButton>
                    </Link>
                  </>
                );
              })}
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleClick(3)}>
            <ListItemIcon>
              <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText primary="Truck" style={{ marginLeft: -10 }} />
            {nested3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={nested3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {NESTED_ITEMS_TRUCK.map((items, index) => {
                return (
                  <>
                    <Link
                      to={items.link}
                      key={index}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>{items.icon}</ListItemIcon>
                        <ListItemText primary={items.text} />
                      </ListItemButton>
                    </Link>
                  </>
                );
              })}
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleClick(4)}>
            <ListItemIcon>
              <MiscellaneousServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Service" style={{ marginLeft: -10 }} />
            {nested4 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={nested4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {NESTED_ITEMS_SERVICE.map((items, index) => {
                return (
                  <>
                    <Link
                      to={items.link}
                      key={index}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>{items.icon}</ListItemIcon>
                        <ListItemText primary={items.text} />
                      </ListItemButton>
                    </Link>
                  </>
                );
              })}
            </List>
          </Collapse>
          <ListItemButton onClick={() => handleClick(5)}>
            <ListItemIcon>
              <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText primary="Bengkel" style={{ marginLeft: -10 }} />
            {nested5 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={nested5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {NESTED_ITEMS_BENGKEL.map((items, index) => {
                return (
                  <>
                    <Link
                      to={items.link}
                      key={index}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>{items.icon}</ListItemIcon>
                        <ListItemText primary={items.text} />
                      </ListItemButton>
                    </Link>
                  </>
                );
              })}
            </List>
          </Collapse>
        </List>
      </Box>
    </>
  );
}
