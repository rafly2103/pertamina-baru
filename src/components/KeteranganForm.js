import { Box, Card, CardContent, Typography } from "@mui/material";
export default function KeteranganForm() {
  return (
    <Box>
      <Card style={{ minHeight: "50vh" }}>
        <CardContent>
          <Typography sx={{ fontWeight: "bolder" }}>Keterangan</Typography>

          <Typography>
            <Typography
              component="span"
              sx={{ color: "#e81a0c", fontWeight: "bolder" }}
            >
              {" "}
              R
            </Typography>{" "}
            = Rusak / Damage
          </Typography>

          <Typography>
            <Typography
              component="span"
              sx={{ color: "blue", fontWeight: "bolder" }}
            >
              {" "}
              G
            </Typography>{" "}
            = Ganti / Change
          </Typography>

          <Typography>
            <Typography
              component="span"
              sx={{ color: "yellow", fontWeight: "bolder" }}
            >
              {" "}
              P
            </Typography>{" "}
            = Periksa / Check
          </Typography>

          <Typography>
            <Typography
              component="span"
              sx={{ color: "green", fontWeight: "bolder" }}
            >
              {" "}
              V
            </Typography>{" "}
            = Layak Jalan / Permitted To Operate
          </Typography>

          <Typography>
            <Typography
              component="span"
              sx={{ color: "black", fontWeight: "bolder" }}
            >
              {" "}
              R
            </Typography>{" "}
            = Tidak Layak Jalan / Not Permitted To Operate
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
