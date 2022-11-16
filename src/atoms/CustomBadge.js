import { Box } from "@mui/material";
export default function CustomBadge({ kode }) {
  let kodeBaru = "";
  switch (kode) {
    case "R":
      kodeBaru = "red";
      break;
    case "G":
      kodeBaru = "blue";
      break;
    case "P":
      kodeBaru = "orange";
      break;
    default:
      kodeBaru = "black";
      break;
  }

  return (
    <Box>
      <Box
        sx={{
          height: "15px",
          width: "25px",
          backgroundColor: kodeBaru,
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontWeight: "bolder",
          fontSize: "10px",
        }}
        component="span"
      >
        {kode}
      </Box>
    </Box>
  );
}
