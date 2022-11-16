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
    headerName: 'Nama Bengkel',
    width: 220,
    editable: true,
  },
  {
    field: 'kontrak',
    headerName: 'No Kontrak',
    width: 200,
    editable: true,
  },
  {
    field: 'alamat',
    headerName: 'Alamat',
    editable: true,
    width: 240,
  },
  {
    field: 'email',
    headerName: 'Email',
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
  { id: 1, nama: 'BENGKEL ASTRA TIGA RIBU', kontrak: "Contract/abcd/234cf", alamat: "Jl.Kemang Timur Tengah no 10",email:"astra@tigaribu.com" },
  { id: 2, nama: 'BENGKEL PASAR MINGGU', kontrak: "Contract/efhwf/webweb", alamat: "Jl.Karsa Barat Timur no 21",email:"minggu@pasar.com" },
  { id: 3, nama: 'BENGKEL INDAH PERMATA', kontrak: "Contract/ewkgl/2wvwe", alamat: "Jl.Bintang Tengah no 9",email:"permata@indah.com" },
  { id: 4, nama: 'BENGKEL TAMBAL BAN', kontrak: "Contract/wefwe/239829ch", alamat: "Jl.Tambal Depan no 83",email:"ban@tambal.com" },

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

export default function DataGridTruck() {
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
