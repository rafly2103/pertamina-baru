import React, { useState, useEffect } from "react";import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputUnstyled from '@mui/base/InputUnstyled';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';


export default function PerusahaanDaftarSatuan() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };

  const StyledInputElement = styled('input')(
    ({ theme }) => `
    width: 230px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  `,
  );
  
  const CustomButton = styled(ButtonUnstyled)(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${blue[500]};
    padding: 10px 24px;
    border-radius: 12px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[100]};
  
    &:hover {
      background-color: ${blue[600]};
    }
  
    &.${buttonUnstyledClasses.active} {
      background-color: ${blue[700]};
    }
  
    &.${buttonUnstyledClasses.focusVisible} {
      box-shadow: 0 3px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
    `,
  );

  const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
      <InputUnstyled slots={{ input: StyledInputElement }} {...props} ref={ref} />
    );
  });

  const StyledButton = styled('button')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    min-width: 258px;
    padding: 12px;
    border-radius: 8px;
    text-align: left;
    line-height: 1.5;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }
  
    &.${selectUnstyledClasses.focusVisible} {
      border-color: ${blue[400]};
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '▴';
      }
    }
  
    &::after {
      content: '▾';
      float: right;
    }
    `,
  );
  
  const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 320px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
    `,
  );
  
  const StyledOption = styled(OptionUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
  );
  
  const StyledPopper = styled(PopperUnstyled)`
    z-index: 1;
  `;
  
  const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
    const slots = {
      root: StyledButton,
      listbox: StyledListbox,
      popper: StyledPopper,
      ...props.slots,
    };
  
    return <SelectUnstyled {...props} ref={ref} slots={slots} />;
  });
  
  
  return (
    <Box mt={2}>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" display="flex" marginBottom={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="truck">Jenis Truck</label>
          </Grid>
          <Grid xs="3" md="3" lg="3">
          <CustomInput
          id="truck" 
          placeholder="Jenis Truck..." 
          />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" marginBottom={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="name">Nama PT</label>
          </Grid>
          <Grid xs="3" md="3" lg="3">
          <CustomInput
          id="name" 
          placeholder="Nama Perusahaan..." 
          />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" marginBottom={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="kontrak">No Kontrak</label>
          </Grid>
          <Grid xs="3" md="3" lg="3">
          <CustomInput
          id="kontrak" 
          placeholder="No Kontrak..." 
          />
          </Grid>
        </Grid>

        <Grid container alignItems="center" marginBottom={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="driver">Driver</label>
          </Grid>
          <Grid xs="3" md="3" lg="3">
          <CustomSelect defaultValue={10}>
      <StyledOption disabled value={10}>--Pilih Driver--</StyledOption>
      <StyledOption value={20}>Syam Syair</StyledOption>
      <StyledOption value={30}>Reska</StyledOption>
      <StyledOption value={40}>Navira</StyledOption>
      <StyledOption value={50}>Faris Muhamad</StyledOption>
    </CustomSelect>
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" marginBottom={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="plat">Plat Nomor</label>
          </Grid>
          <Grid xs="3" md="3" lg="3">
          <CustomInput
          id="plat" 
          placeholder="Plat Nomor..." 
          />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
