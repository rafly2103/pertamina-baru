import { TextField } from "@mui/material";
export default function CustomTextField() {
  return (
    <>
      <TextField
        size="small"
        id="mor"
        onChange={(e) => setMor(e.target.value)}
      />
    </>
  );
}
