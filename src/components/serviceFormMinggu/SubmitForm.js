import {
  Box,
  Typography,
  Divider,
  Grid,
  TextField,
  Badge,
  Button,
} from "@mui/material";
import CustomBadge from "../../atoms/CustomBadge";

export default function SubmitForm() {
  return (
    <Box>
      <Grid container>
        <Grid item md={6} p={2}>
          <Grid container display="flex" alignItems="end">
            <Grid item md={4}>
              <Typography sx={{ fontWeight: "bolder" }}>
                Nama Penguji
              </Typography>
              <Typography sx={{ fontStyle: "italic", color: "grey" }}>
                Inspector Name
              </Typography>
            </Grid>

            <Grid item md={8}>
              <TextField
                variant="standard"
                size="small"
                placeholder="Faris Setiawan"
                fullWidth="true"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={6} p={2}>
          <Grid container display="flex" alignItems="end">
            <Grid item md={5}>
              <Typography sx={{ fontWeight: "bolder" }}>
                Tanggal Pemeriksaan
              </Typography>
              <Typography sx={{ fontStyle: "italic", color: "grey" }}>
                Date Inspection{" "}
              </Typography>
            </Grid>

            <Grid item md={7}>
              <TextField
                variant="standard"
                size="small"
                value="27/10/2022"
                fullWidth="true"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container mb={3}>
        <Grid item md={6} p={2}>
          <Grid container display="flex" alignItems="end">
            <Grid item md={4}>
              <Typography sx={{ fontWeight: "bolder" }}>No Polisi</Typography>
              <Typography sx={{ fontStyle: "italic", color: "grey" }}>
                Police Number
              </Typography>
            </Grid>

            <Grid item md={8}>
              <TextField
                variant="standard"
                size="small"
                value="B 2432 AE"
                fullWidth="true"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={6} p={2}>
          <Grid container display="flex" alignItems="end">
            <Grid item md={5}>
              <Typography sx={{ fontWeight: "bolder" }}>
                No / Tipe Kendaraan
              </Typography>
              <Typography sx={{ fontStyle: "italic", color: "grey" }}>
                No / Type of Vehicle
              </Typography>
            </Grid>

            <Grid item md={7}>
              <TextField
                variant="standard"
                size="small"
                value="HINO2424"
                fullWidth="true"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container p={2}>
        <Grid item md={6}>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              UJI COBA REM
            </Typography>
            <Typography sx={{ fontWeight: "bolder" }}>
              Fungsi Rem kanan
            </Typography>
            <Box mt={1} mb={4}>
              <ul>
                <li>
                  <Typography>
                    Head Truck Sumbu I :
                    <Box component="span">&nbsp; Baik &nbsp;</Box>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Head Truck Sumbu II :
                    <Box component="span">&nbsp; Baik &nbsp;</Box>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Head Truck Sumbu III :
                    <Box component="span">&nbsp; &nbsp;</Box>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Tangki Trailer I :
                    <Box component="span">&nbsp; Baik &nbsp;</Box>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Tangki Trailer II :
                    <Box component="span">&nbsp; Baik &nbsp;</Box>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Tangki Trailer III :
                    <Box component="span">&nbsp; &nbsp;</Box>
                  </Typography>
                </li>
              </ul>
            </Box>
            <Typography sx={{ fontWeight: "bolder" }}>
              Fungsi Rem Kiri
            </Typography>
            <Box mt={1} mb={4}>
              <ul>
                <li>
                  <Typography>
                    Head Truck Sumbu I :
                    <Box component="span">&nbsp; Baik &nbsp;</Box>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Head Truck Sumbu II :
                    <Box component="span">&nbsp; Baik &nbsp;</Box>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Head Truck Sumbu III :
                    <Box component="span">&nbsp; &nbsp;</Box>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Tangki Trailer I :
                    <Box component="span">&nbsp; Baik &nbsp;</Box>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Tangki Trailer II :
                    <Box component="span">&nbsp; Baik &nbsp;</Box>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Tangki Trailer III :
                    <Box component="span">&nbsp; &nbsp;</Box>
                  </Typography>
                </li>
              </ul>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: "bolder", mb: 1 }}>
              LAMPU-LAMPU
            </Typography>
            <Typography sx={{ fontWeight: "bolder" }}>Lampu Depan</Typography>
            <Box mt={2} mb={4}>
              <ul>
                <li>
                  <Typography>Lampu Besar :</Typography>
                </li>
                <ul>
                  <li>
                    <Typography>
                      Berfungsi Jauh :
                      <Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Berfungsi Dekat :
                      <Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Kondisi Mika :
                      <Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                </ul>
                <li>
                  <Typography mt={2}>Lampu Kota :</Typography>
                </li>
                <ul>
                  <li>
                    <Typography>
                      Berfungsi :<Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Kondisi Mika :
                      <Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                </ul>
                <li>
                  <Typography mt={2}>Lampu Sign :</Typography>
                </li>
                <ul>
                  <li>
                    <Typography>
                      Berfungsi :<Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Kondisi Mika :
                      <Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                </ul>
                <li>
                  <Typography mt={2}>Lampu Rotan :</Typography>
                </li>
                <ul>
                  <li>
                    <Typography>
                      Berfungsi :<Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Kondisi Mika :
                      <Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                </ul>
              </ul>
            </Box>
            <Typography sx={{ fontWeight: "bolder" }}>
              Lampu Belakang
            </Typography>
            <Box mt={2} mb={4}>
              <ul>
                <li>
                  <Typography>Lampu Kota :</Typography>
                </li>
                <ul>
                  <li>
                    <Typography>
                      Berfungsi :<Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Kondisi Mika :
                      <Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                </ul>
                <li>
                  <Typography mt={2}>Lampu Sign :</Typography>
                </li>
                <ul>
                  <li>
                    <Typography>
                      Berfungsi :<Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Kondisi Mika :
                      <Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                </ul>
                <li>
                  <Typography mt={2}>Lampu Rem :</Typography>
                </li>
                <ul>
                  <li>
                    <Typography>
                      Berfungsi :<Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Kondisi Mika :
                      <Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                </ul>
                <li>
                  <Typography mt={2}>Lampu Mundur :</Typography>
                </li>
                <ul>
                  <li>
                    <Typography>
                      Berfungsi :<Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Kondisi Mika :
                      <Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                </ul>
              </ul>
            </Box>
            <Typography sx={{ fontWeight: "bolder" }}>Lampu Samping</Typography>
            <Box mt={2} mb={4}>
              <ul>
                <li>
                  <Typography>Lampu Kota :</Typography>
                </li>
                <ul>
                  <li>
                    <Typography>
                      Berfungsi :<Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Kondisi Mika :
                      <Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                </ul>
                <li>
                  <Typography mt={2}>Lampu Sign :</Typography>
                </li>
                <ul>
                  <li>
                    <Typography>
                      Berfungsi :<Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Kondisi Mika :
                      <Box component="span">&nbsp; Baik &nbsp;</Box>
                    </Typography>
                  </li>
                </ul>
              </ul>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              BAN SISI PENUMPANG (KIRI)
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Kondisi Ban :<Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Ketebalan Ban :<Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Kondisi Chasing Ban :<Box component="span">&nbsp; &nbsp;</Box>
              </Typography>

              <Typography>
                Tekanan Angin Ban :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Mur dan Baut Roda :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Jumlah Mur dan Baut Roda Lengkap :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Kekencangan Mur & Baut Roda :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              BAN SISI PENGEMUDI (KANAN)
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Kondisi Ban :<Box component="span">&nbsp; &nbsp;</Box>
              </Typography>

              <Typography>
                Ketebalan Ban :<Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Kondisi Chasing Ban :<Box component="span">&nbsp; &nbsp;</Box>
              </Typography>

              <Typography>
                Tekanan Angin Ban :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Mur dan Baut Roda :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Jumlah Mur dan Baut Roda Lengkap :
                <Box component="span">&nbsp; &nbsp;</Box>
              </Typography>

              <Typography>
                Kekencangan Mur & Baut Roda :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Kondisi Ban Cadangan :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              MARKING & PLACARDING
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Logo "P" dan Tulisan Pertamina :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Dilarang Menumpang :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Kapasitas Kompartemen :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Ketinggian Tangki :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Dilarang merokok :<Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                www.pertamina.com :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Awas Kendaraan Panjang & Lebar :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Interlok, Kotak, Alat, Split Kit :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Batas Kecepatan, No.Telp, Darurat Pengaduan :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Tanda Pemeriksaan APAR :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Bahan Bakar Mudah Terbakar :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              KEBOCORAN & KECUKUPAN PELUMAS
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Oli Mesin :<Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Minyak Rem :<Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Minyak Power Steering :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              SISTEM PENDINGINAN
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Ketinggian Air dalam Radiator & reservbar (Cadangan) :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Daya Lengket Kipas (Berat Ringan) :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Kebocoran Air (pada Mesin, Selang, Radiator & Waterpump) :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              DALAM KABIN
            </Typography>
            <Typography sx={{ fontWeight: "bolder" }}>
              Kondisi Kontak "Off"
            </Typography>
            <Box mt={1} mb={4}>
              <ul>
                <li>
                  <Typography>
                    Speling Pedal Kopling & Rem :
                    <Box component="span">&nbsp; Baik &nbsp;</Box>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Minyak Kopling :
                    <Box component="span">&nbsp; Baik &nbsp;</Box>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Speling Kemudi (Steer) :
                    <Box component="span">&nbsp; Baik &nbsp;</Box>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Posisi Kaca Spion :
                    <Box component="span">&nbsp; Baik &nbsp;</Box>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Fungsi Sabuk Pengaman :
                    <Box component="span">&nbsp; Baik &nbsp;</Box>
                  </Typography>
                </li>
              </ul>
            </Box>
            <Typography sx={{ fontWeight: "bolder" }}>
              Kondisi Kontak "On"
            </Typography>
            <Box mt={1} mb={4}>
              <ul>
                <li>
                  <Typography>
                    Fungsi Lampu Indikator :
                    <Box component="span">&nbsp; Baik &nbsp;</Box>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Fungsi Instrumen Pengukur :
                    <Box component="span">&nbsp; Baik &nbsp;</Box>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Fungsi Switch/Saklar (Lampu, Klakson dll) :
                    <Box component="span">&nbsp; Baik &nbsp;</Box>
                  </Typography>
                </li>
              </ul>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              SISTEM GAS BUANG (WARNA ASAP)
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Sistem Gas Buang :<Box component="span">&nbsp; &nbsp;</Box>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              POWER STEERING
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Power Steering :<Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              TANGKI SOLAR (OWN USE)
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Kebocoran Tangki :<Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Tutup Tangki :<Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item md={6}>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              ACCU
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Tutup Accu :<Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Kecukupan Air Accu :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Kepala dan Skun Accu :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              BRACKET KACA SPION
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Bracket Kaca Spion :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              KARET WIPER
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Karet Wiper :<Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              PIJAKAN PINTU KABIN
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Pijakan Pintu Kabin :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              APAR
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Jumlah DCP (2pcs @ 9kg) :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Jumlah CO2 (1pcs @ 2kg) :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Tekanan Indikator :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Selang APAR :<Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Masa Berlakunya APAR :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              KACA DEPAN
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Tidak Terdapat Shocker yang tidak Standar :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Kaca Film tidak menganggu Pandangan :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              PNEUMATIC
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Kebocoran Selang Angin :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Tombol Emergency :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              BOX BOTTOM LOADING
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Kebocoran Seal di packing Bottom Loading :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Hidrolic Box :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Karet Box :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Switch Vapour & Optic :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Switch Pneumatic Breaking :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Pengunci Box Bottom :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Kondisi Box :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Kebersihan Box :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              BOX PNEUMATIC
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Kecukupan di Pneumatic Airtech :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Kebocoran Seal :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Karet Box :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Switch Vapour & Optic :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Switch Pneumatic Breaking :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Pengunci Box Bottom :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Kondisi Box :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Kebersihan Box :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              SELANG LOOSING
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Kepala Selang :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Tidak Ada Kebocoran :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              KABEL ARDE
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                Kabel Massa :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Kabel (Minimal) :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }} mb={1}>
              PERLENGKAPAN
            </Typography>
            <Box mt={1} mb={4}>
              <Typography>
                API Gravity :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>

              <Typography>
                Jumlah Helmet :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Jas Hujan :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Baji (Roda) :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Kotak P3K :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Dongkrak :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Kunci Roda :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Traficone :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Pengikat Tidak Standart :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                TIdak ada pengikat diri :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Ijk BOUT :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Segel :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Katangan T2 :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Man Hole :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Kebocoran Packing :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Fungsi Engser Pengunci :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Las TDK :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Selang Vapour Valva :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Kabel Sensor :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Bounding :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
              <Typography>
                Segel Nominal :
                <Box component="span">&nbsp; Baik &nbsp;</Box>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container p={2}>
        <Grid item md={2}>
          <Typography sx={{ fontWeight: "bolder" }}>Catatan / Note</Typography>
        </Grid>
        <Grid item md={10}>
          <TextField
            multiline="true"
            rows={4}
            fullWidth
            placeholder="Tambahan keterangan..."
          />
        </Grid>
      </Grid>

      <Grid container p={2} display="flex" justifyContent="end">
        <Grid item>
          <Button variant="contained">Submit</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
