import React, {useMemo} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { DataGrid,GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import Dropzone from 'react-dropzone';
import {useDropzone} from 'react-dropzone';
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'nama',
    headerName: 'Nama Lengkap',
    width: 160,
    editable: true,
  },
  {
    field: 'tgllahir',
    headerName: 'Tanggal Lahir',
    width: 120,
    type: "date",
    editable: true,
  },
  {
    field: 'jk',
    headerName: 'Jenis Kelamin',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    editable: true,
    width: 220,
  },
  {
    field: 'hp',
    headerName: 'No Handphone',
    width: 140,
    editable: true,
  },
  {
    field: 'foto',
    headerName: 'Foto Diri',
    width: 110,
    editable: true,
  },
  {
    field: 'ktp',
    headerName: 'Identitas KTP',
    width: 190,
    editable: true,
  },
  {
    field: 'kontrak',
    headerName: 'Kontrak',
    width: 200,
    editable: true,
  },
];

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function StyledDropzone(props) {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: {'all/*': []}});

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Tarik dan Lepas File Disini, atau Klik untuk Memilih File</p>
        <ul>{files}</ul>
      </div>
    </div>
  );
}

const rows = [
  { id: 1, tgllahir: '16/10/1997', nama: 'Syams Syair', jk: "Laki-Laki", email: "thesyams.rebel8@gmail.com",hp:"082523952352", foto: "-", ktp: "32048294784000004", kontrak: "Contract/abcd/234cf" },
  { id: 2, tgllahir: '08/04/1998', nama: 'Reska', jk: "Laki-Laki", email: "screamparad0x@gmail.com",hp:"082523952352", foto: "-", ktp: "23849289234000002", kontrak: "Contract/wefwe/239829ch" },
  { id: 3, tgllahir: '21/08/2000', nama: 'Navira', jk: "Perempuan", email: "tzz@gmail.com",hp:"0835952352", foto: "-", ktp: "3294028490000002", kontrak: "Contract/ewkgl/2wvwe" },
  { id: 4, tgllahir: '01/01/2001', nama: 'Faris Muhammad', jk: "Laki-Laki", email: "mfarissetiawan91@gmail.com",hp:"082523952352", foto: "-", ktp: "32042821920300004", kontrak: "Contract/efhwf/webweb" },

];

const refreshPage = ()=>{
  window.location.reload();
}

function CustomToolbar() {
  return (
    <GridToolbarContainer>
     <GridToolbarExport printOptions={{ disableToolbarButton: true }} />
    </GridToolbarContainer>
  );
}

export default function DataGridDriver() {
  return (
    <Box mt={5}>
      
<Grid>
<StyledDropzone />
     </Grid>
     <Box mt={2}>
     <Button variant="contained" type="submit">
              Upload
            </Button>
            </Box>
    <Box sx={{ height: 400, width: '100%', mt: 3 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </Box>
    </Box>
  );
}
