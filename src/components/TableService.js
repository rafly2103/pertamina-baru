import { Box, Grid, Button } from "@mui/material";
import "../../src/App.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PrintIcon from "@mui/icons-material/Print";
import Paper from "@mui/material/Paper";

export default function TableService() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
  ];

  const tableHTML = (
    <table style={{ width: "100%" }}>
      <tbody>
        <TableRow>
          <th style={{ width: 49 }} rowSpan={2}>
            No
          </th>
          <th style={{ width: 48 }} rowSpan={2}>
            Bagian yang diperiksa
          </th>
          <th style={{ width: 49 }} rowSpan={2}>
            Komponen yang diperiksa
          </th>
          <th style={{ width: 246 }} colSpan={5}>
            Hasil pemeriksaan
          </th>
          <th style={{ width: 50 }} rowSpan={2}>
            Rekomendasi
          </th>
        </TableRow>

        {/*Komponen 1*/}

        <TableRow>
          <th style={{ width: 49 }}>R</th>
          <th style={{ width: 51 }}>G</th>
          <th style={{ width: 48 }}>P</th>
          <th style={{ width: 49 }}>V</th>
          <th style={{ width: 49 }}>X</th>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }} rowSpan={5}>
            1.
          </TableCell>
          <TableCell style={{ width: 48 }} rowSpan={5}>
            SISI KANAN DEPAN
          </TableCell>
          <TableCell style={{ width: 49 }}>1. KONDISI FISIK KABIN</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 50 }}>&nbsp; </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            2. KEKENCANGAN BAUT PENGIKAT RODA / WHEEL NUTS
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 51 }}>3. KONDISI FISIK BAN</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 50 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>4. KONDISI MINYAK REM</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 50 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 50 }}>&nbsp;</TableCell>
        </TableRow>

        {/*Komponen 2*/}

        <TableRow>
          <TableCell style={{ width: 49 }} rowSpan={5}>
            2.
          </TableCell>
          <TableCell style={{ width: 48 }} rowSpan={5}>
            SISI DEPAN KENDARAN
          </TableCell>
          <TableCell style={{ width: 49 }}>1. KONDISI FISIK KABIN</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 50 }}>&nbsp; </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>2. KONDISI LAMPU UTAMA</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 51 }}>3. KEBOCORAN OLI STEERING</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 50 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>4. KONDISI PEGAS</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 50 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 50 }}>&nbsp;</TableCell>
        </TableRow>

        {/*Komponen 3*/}

        <TableRow>
          <TableCell style={{ width: 49 }} rowSpan={8}>
            3.
          </TableCell>
          <TableCell style={{ width: 48 }} rowSpan={8}>
            SISI KIRI DEPAN
          </TableCell>
          <TableCell style={{ width: 49 }}>
            1. KONDISI FISIK KABIN / CABIN
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 50 }}>&nbsp; </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            2. KONDISI KACA PINTU / WINDOW GLASS
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 51 }}>
            3. KONDISI KACA SPION / MIRROR
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 50 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            4. KONDISI FISIK BAN / TIRES CONDITION
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            5. KEKENCANGAN BAUT PENGIKAT RODA / WHEEL NUTS
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            6. KONDISI PENGUNCI KABIN / CABIN LOCK CONDITION
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            7. KETINGGIAN OLI POWER STEERING / POWER STEERING OIL LEVEL
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}></TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        {/*Komponen 4*/}

        <TableRow>
          <TableCell style={{ width: 49 }} rowSpan={2}>
            4.
          </TableCell>
          <TableCell style={{ width: 48 }} rowSpan={2}>
            SISI KIRI TENGAH
          </TableCell>
          <TableCell style={{ width: 49 }}>
            1. KONDISI KOMPARTEMEN BATERAI / BATTERY CONDITION
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 50 }}>&nbsp; </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}></TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        {/* Komponen 5*/}
        <TableRow>
          <TableCell style={{ width: 49 }} rowSpan={4}>
            5.
          </TableCell>
          <TableCell style={{ width: 48 }} rowSpan={4}>
            SISI KIRI BELAKANG
          </TableCell>
          <TableCell style={{ width: 49 }}>
            1. KONDISI FISIK BAN / TIRES CONDITION
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 50 }}>&nbsp; </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            2. KEKENCANGAN BAUT PENGIKAT RODA / WHEEL NUTS
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 51 }}>
            3. KONDISI PEGAS / SPRINGS
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 50 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}></TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        {/* Komponen 6 */}
        <TableRow>
          <TableCell style={{ width: 49 }} rowSpan={2}>
            6.
          </TableCell>
          <TableCell style={{ width: 48 }} rowSpan={2}>
            SISI BELAKANG
          </TableCell>
          <TableCell style={{ width: 49 }}>1. KONDISI LAMPU</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 50 }}>&nbsp; </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}></TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        {/* Komponen 7 */}
        <TableRow>
          <TableCell style={{ width: 49 }} rowSpan={3}>
            7.
          </TableCell>
          <TableCell style={{ width: 48 }} rowSpan={3}>
            SISI KANAN BELAKANG
          </TableCell>
          <TableCell style={{ width: 49 }}>
            1. KEKENCANGAN BAUT PENGIKAT RODA / WHEEL NUTS
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 50 }}>&nbsp; </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            4. KONDISI PEGAS / SPRINGS
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}></TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        {/* Komponen 8 */}
        <TableRow>
          <TableCell style={{ width: 49 }} rowSpan={3}>
            8.
          </TableCell>
          <TableCell style={{ width: 48 }} rowSpan={3}>
            SISI KANAN BAWAH
          </TableCell>
          <TableCell style={{ width: 49 }}>1. SELANG BAHAN BAKAR</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 50 }}>&nbsp; </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            2. KONDISI TANGKI BAHAN BAKAR
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}></TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        {/* Komponen 9 */}
        <TableRow>
          <TableCell style={{ width: 49 }} rowSpan={18}>
            9.
          </TableCell>
          <TableCell style={{ width: 48 }} rowSpan={18}>
            SISI BAWAH
          </TableCell>
          <TableCell style={{ width: 49 }}>
            1. KONDISI SISTEM KEMUDI / STEERING CONDITION
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 50 }}>&nbsp; </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            <ul>
              <li>KEBOCORAN OLI</li>
            </ul>
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            <ul>
              <li>TIE ROD</li>
            </ul>
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            <ul>
              <li>DRAG LINK</li>
            </ul>
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            <ul>
              <li>STEERING KNUCLE</li>
            </ul>
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            <ul>
              <li>KING PIN</li>
            </ul>
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}></TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            2. KONDISI REM UTAMA DAN REM PARKIR / SERVICE BRAKE & PARKING BRAKE
            CONDITION
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            <ul>
              <li>PIPA HYDRAULIC</li>
            </ul>
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            <ul>
              <li>PIPA HYDRAULIC</li>
            </ul>
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            <ul>
              <li>KETEBALAN KAMPAS REM</li>
            </ul>
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            <ul>
              <li>WHEEL SYLINDER</li>
            </ul>
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}></TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            3. KONDIS SISTEM KOPLING / CLUTCH SYSTEM CONDITION
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            <ul>
              <li>PIPA DAN SELANG MINYAK KOPLING</li>
            </ul>
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}></TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            4. KONDIS SUMBU DEPAN DAN DAN SUSPENSI / FRON AXLE DAN SUSPENSION
            CONDITION
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            5. KONDISI SUMBU BELAKANG DAN SUSPENSI / REAL AXLE DAN SUSPENSION
            CONDITION
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        {/* Komponen 10 */}
        <TableRow>
          <TableCell style={{ width: 49 }} rowSpan={23}>
            10.
          </TableCell>
          <TableCell style={{ width: 48 }} rowSpan={23}>
            SISI DALAM KENDARAAN
          </TableCell>
          <TableCell style={{ width: 49 }}>
            KUNCI KONTAK POSISI “OFF” / IGNATION KEY "OFF"
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 50 }}>&nbsp; </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            1. SPELING PEDAL KOPLING / CLUTCH PEDAL SPELING
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            2. SPELING PEDAL REM / BRAKE PEDAL SPELING
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            3. SPELING RODA KEMUDI / STEERING WHEEL SPELING
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            4. SABUK PENGAMAN / SAFETY BEL{" "}
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            5. PERALATAN KENDARAAN LAINNYA / OTHERS EQUIPMENT
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            <ul>
              <li>APAR (Alat Pemadam Api Ringan)</li>
            </ul>
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            <ul>
              <li>Kotak P3K</li>
            </ul>
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            <ul>
              <li>SEGITIGA PENGAMAN</li>
            </ul>
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}></TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            KUNCI KONTAK POSISI “ON”/ IGNATION KEY "ON"
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            1. FUNGSI SWITCH ELEKTRIK / ELECTRICAL SWITCH FUNCTION
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            2. LAMPU INDIKATOR / INDICATOR LAMPS ON INSTRUMENT PANEL
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}></TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            SAAT MESIN HIDUP / ENGINE ON
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            1. LAMPU INDIKATOR / INDICATOR LAMPS ON INSTRUMENT PANEL
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            2. TEKANAN POMPA VACUUM / VACUUM PUMP
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            3. FUNGSI REM GAS BUANG / EXHAUST BRAKE FUNCTION
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            4. FUNGSI REM KAKI / SERVICE BRAKE FUNCTION
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            5. FUNGSI REM PARKIR / PARKING BRAKE FUNCTION
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            6. FUNGSI KLAKSON / HORN FUNCTION
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>
            7. FUNGSI LAMPU-LAMPU / LIGHTS FUNCTION
          </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 51 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 48 }}>&nbsp; </TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 51 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 48 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 49 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 50 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 50 }}>&nbsp;</TableCell>
          <TableCell style={{ width: 50 }}>&nbsp;</TableCell>
        </TableRow>
      </tbody>
    </table>
  );

  const tableMUI = (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" rowSpan={2}>
              No
            </TableCell>
            <TableCell align="center" rowSpan={2}>
              Bagian yang diperiksa
            </TableCell>
            <TableCell align="center" rowSpan={2}>
              Komponen yang diperiksa
            </TableCell>
            <TableCell align="center" colSpan={5}>
              Fat&nbsp;(g)
            </TableCell>
            <TableCell align="center" rowSpan={2}>
              Rekomendasi
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ border: "1px solid grey" }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const datas = [
    {
      no: 1,
      name: "SISI KANAN DEPAN",
      components: [
        {
          name: "KONDISI FISIK KABIN",
          hasilPemeriksaan: ["", "", "✓", "", ""],
          rekomendasi: "Nice Overall",
        },
        {
          name: "KEKENCANGAN BAUT PENGIKAT RODA / WHEEL NUTS",
          hasilPemeriksaan: ["", "", "", "✓", ""],
          rekomendasi: "",
        },
        {
          name: "KONDISI FISIK BAN",
          hasilPemeriksaan: ["", "", "", "", "✓"],
          rekomendasi: "BOCOR",
        },
        {
          name: "KONDISI MINYAK REM",
          hasilPemeriksaan: ["", "", "", "✓", ""],
          rekomendasi: "LUMAYAN",
        },
      ],
    },
    {
      no: 2,
      name: "SISI DEPAN KENDARAN",
      components: [
        {
          name: "KONDISI FISIK KABIN",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "Nice Overall",
        },
        {
          name: "KONDISI LAMPU UTAMA",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "KEBOCORAN OLI STEERING",
          hasilPemeriksaan: ["", "", "", "✓", ""],
          rekomendasi: "KONDISI PEGAS",
        },
      ],
    },
    {
      no: 3,
      name: "SISI KIRI DEPAN",
      components: [
        {
          name: "1. KONDISI FISIK KABIN",
          hasilPemeriksaan: ["", "", "✓", "", ""],
          rekomendasi: "",
        },
        {
          name: "2. KONDISI KACA PINTU",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "3. KONDISI KACA SPION",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "4. KONDISI FISIK BAN",
          hasilPemeriksaan: ["", "✓", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "5. KEKENCANGAN BAUT PENGIKAT RODA",
          hasilPemeriksaan: ["", "", "", "", "✓"],
          rekomendasi: "",
        },
        {
          name: "6. KONDISI PENGUNCI KABIN",
          hasilPemeriksaan: ["", "✓", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "7. KETINGGIAN OLI POWER STEERING",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "",
        },
      ],
    },
    {
      no: 4,
      name: "SISI KIRI TENGAH",
      components: [
        {
          name: "1. KONDISI KOMPARTEMEN BATERAI ",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "",
        },
      ],
    },
    {
      no: 5,
      name: "SISI KIRI BELAKANG",
      components: [
        {
          name: "1. KONDISI FISIK BAN / TIRES CONDITION",
          hasilPemeriksaan: ["", "✓", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "2. KEKENCANGAN BAUT PENGIKAT RODA / WHEEL NUTS",
          hasilPemeriksaan: ["", "", "", "", "✓"],
          rekomendasi: "",
        },
        {
          name: "3. KONDISI PEGAS / SPRINGS",
          hasilPemeriksaan: ["", "", "", "✓", ""],
          rekomendasi: "",
        },
      ],
    },
    {
      no: 6,
      name: "SISI BELAKANG",
      components: [
        {
          name: "1. KONDISI LAMPU",
          hasilPemeriksaan: ["", "✓", "", "", ""],
          rekomendasi: "",
        },
      ],
    },
    {
      no: 7,
      name: "SISI KANAN BELAKANG",
      components: [
        {
          name: "1. KEKENCANGAN BAUT PENGIKAT RODA / WHEEL NUTS",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "2. KONDISI PEGAS / SPRINGS",
          hasilPemeriksaan: ["", "✓", "", "", ""],
          rekomendasi: "",
        },
      ],
    },
    {
      no: 8,
      name: "SISI KANAN TENGAH",
      components: [
        {
          name: "1. SELANG BAHAN BAKAR",
          hasilPemeriksaan: ["", "✓", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "2. KONDISI TANGKI BAHAN BAKAR",
          hasilPemeriksaan: ["", "", "✓", "", ""],
          rekomendasi: "",
        },
      ],
    },
    {
      no: 9,
      name: "SISI BAWAH",
      components: [
        {
          name: "1. KONDISI SISTEM KEMUDI / STEERING CONDITION",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "● KEBOCORAN OLI LEAK",
          hasilPemeriksaan: ["", "", "", "✓", ""],
          rekomendasi: "",
        },
        {
          name: "● TIE ROD",
          hasilPemeriksaan: ["", "", "", "", "✓"],
          rekomendasi: "",
        },
        {
          name: "● DRAG LINK",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "● STEERING KNUCKLE",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "● KING PIN",
          hasilPemeriksaan: ["", "", "", "", "✓"],
          rekomendasi: "",
        },
        {
          name: "",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "2. KONDISI REM UTAMA DAN REM PARKIR / SERVICE BRAKE & PARKING BRAKE CONDITION",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "● PIPA HYDRAULIC",
          hasilPemeriksaan: ["", "✓", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "● KETEBALAN KAMPAS REM",
          hasilPemeriksaan: ["", "✓", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "● WHEEL SYLINDER",
          hasilPemeriksaan: ["", "", "✓", "", ""],
          rekomendasi: "",
        },
        {
          name: "",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "3. KONDISI SISTEM KOPLING / CLUTCH SYSTEM CONDITION",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "● PIPA DAN SELANG MINYAK KOPLING",
          hasilPemeriksaan: ["", "", "", "", "✓"],
          rekomendasi: "",
        },
        {
          name: "",
          hasilPemeriksaan: ["", "", "✓", "", ""],
          rekomendasi: "",
        },
        {
          name: "4. KONDISI SUMBU DEPAN DAN DAN SUSPENSI / FRON AXLE DAN SUSPENSION CONDITION",
          hasilPemeriksaan: ["", "", "✓", "", ""],
          rekomendasi: "",
        },
        {
          name: "5. KONDISI SUMBU BELAKANG DAN SUSPENSI / REAL AXLE DAN SUSPENSION CONDITION",
          hasilPemeriksaan: ["", "", "✓", "", ""],
          rekomendasi: "",
        },
        {
          name: "",
          hasilPemeriksaan: ["", "✓", "", "", ""],
          rekomendasi: "",
        },
      ],
    },
    {
      no: 10,
      name: "SISI DALAM KENDARAAN",
      components: [
        {
          name: "KUNCI KONTAK POSISI “OFF” / IGNATION KEY OFF",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "1. SPELING PEDAL KOPLING / CLUTCH PEDAL SPELING",
          hasilPemeriksaan: ["", "", "", "✓", ""],
          rekomendasi: "",
        },
        {
          name: "2. SPELING PEDAL REM / BRAKE PEDAL SPELING",
          hasilPemeriksaan: ["", "✓", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "3. SPELING RODA KEMUDI / STEERING WHEEL SPELING",
          hasilPemeriksaan: ["", "✓", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "4. SABUK PENGAMAN / SAFETY BELT",
          hasilPemeriksaan: ["", "", "✓", "", ""],
          rekomendasi: "",
        },
        {
          name: "5. PERALATAN KENDARAAN LAINNYA / OTHERS EQUIPMENT",
          hasilPemeriksaan: ["", "✓", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "● APAR (alat pemadam api ringan",
          hasilPemeriksaan: ["", "", "", "✓", ""],
          rekomendasi: "",
        },
        {
          name: "● KOTAK P3K",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "● SEGITIGA PENGAMAN",
          hasilPemeriksaan: ["", "", "✓", "", ""],
          rekomendasi: "",
        },
        {
          name: "",
          hasilPemeriksaan: ["", "", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "KUNCI KONTAK POSISI “ON”/  IGNATION KEY ON",
          hasilPemeriksaan: ["", "", "✓", "", ""],
          rekomendasi: "",
        },
        {
          name: "1. FUNGSI SWITCH ELEKTRIK / ELECTRICAL SWITCH FUNCTION",
          hasilPemeriksaan: ["", "", "", "✓", ""],
          rekomendasi: "",
        },
        {
          name: "2. LAMPU INDIKATOR / INDICATOR LAMPS ON INSTRUMENT PANEL",
          hasilPemeriksaan: ["", "", "", "✓", ""],
          rekomendasi: "",
        },
        {
          name: "",
          hasilPemeriksaan: ["", "", "", "", "✓"],
          rekomendasi: "",
        },
        {
          name: "SAAT MESIN HIDUP / ENGINE ON",
          hasilPemeriksaan: ["", "", "", "", "✓"],
          rekomendasi: "",
        },
        {
          name: "1. LAMPU INDIKATOR / INDICATOR LAMPS ON INSTRUMENT PANEL",
          hasilPemeriksaan: ["", "✓", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "2. TEKANAN POMPA VACUUM / VACUUM PUMP",
          hasilPemeriksaan: ["", "", "✓", "", ""],
          rekomendasi: "",
        },
        {
          name: "3. FUNGSI REM GAS BUANG / EXHAUST BRAKE FUNCTION",
          hasilPemeriksaan: ["", "", "✓", "", ""],
          rekomendasi: "",
        },
        {
          name: "4. FUNGSI REM KAKI / SERVICE BRAKE FUNCTION",
          hasilPemeriksaan: ["✓", "", "", "", ""],
          rekomendasi: "",
        },
        {
          name: "5. FUNGSI REM PARKIR / PARKING BRAKE FUNCTION",
          hasilPemeriksaan: ["", "", "", "✓", ""],
          rekomendasi: "",
        },
        {
          name: "6. FUNGSI KLAKSON / HORN FUNCTION",
          hasilPemeriksaan: ["", "", "", "✓", ""],
          rekomendasi: "",
        },
        {
          name: "7. FUNGSI LAMPU-LAMPU / LIGHTS FUNCTION",
          hasilPemeriksaan: ["", "", "", "✓", ""],
          rekomendasi: "",
        },
      ],
    },
  ];

  return (
    <Box>
      <Grid container mb={3} mt={5}>
        <Grid item md={12} display="flex" justifyContent="end">
          <Button variant="contained" endIcon={<PrintIcon />}>
            EXPORT TO PDF
          </Button>
        </Grid>
      </Grid>

      <TableContainer sx={{ textAlign: "center" }}>
        <Table sx={{ minWidth: 650 }}>
          <TableBody>
            <TableRow>
              <th style={{ width: 49 }} rowSpan={2}>
                No
              </th>
              <th style={{ width: 48 }} rowSpan={2}>
                Bagian yang diperiksa
              </th>
              <th style={{ width: 49 }} rowSpan={2}>
                Komponen yang diperiksa
              </th>
              <th style={{ width: 246 }} colSpan={5}>
                Hasil pemeriksaan
              </th>
              <th style={{ width: 50 }} rowSpan={2}>
                Rekomendasi
              </th>
            </TableRow>

            {/*Komponen 1*/}

            <TableRow>
              <th style={{ width: 49 }}>R</th>
              <th style={{ width: 51 }}>G</th>
              <th style={{ width: 48 }}>P</th>
              <th style={{ width: 49 }}>V</th>
              <th style={{ width: 49 }}>X</th>
            </TableRow>

            {datas.map((data, index) => {
              return (
                <>
                  <TableRow>
                    <TableCell rowspan={data.components.length + 1}>
                      {data.no}
                    </TableCell>
                    <TableCell rowspan={data.components.length + 1}>
                      {data.name}
                    </TableCell>

                    {data.components[0] == true && (
                      <>
                        {data.components[0].hasilPemeriksaan.map(
                          (hasil, index) => {
                            return (
                              <>
                                <TableCell
                                  style={{ width: 49, textAlign: "center" }}
                                >
                                  {hasil}
                                </TableCell>
                              </>
                            );
                          }
                        )}
                      </>
                    )}
                  </TableRow>

                  {data.components[0] != true && (
                    <>
                      {data.components.map((component, index) => {
                        return (
                          <>
                            <TableRow>
                              <TableCell>{component.name}</TableCell>

                              {component.hasilPemeriksaan.map(
                                (hasil, index) => {
                                  return (
                                    <>
                                      <TableCell>{hasil}</TableCell>
                                    </>
                                  );
                                }
                              )}

                              <TableCell>{component.rekomendasi}</TableCell>
                            </TableRow>
                          </>
                        );
                      })}
                    </>
                  )}
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
