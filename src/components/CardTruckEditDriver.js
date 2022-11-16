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

export default function CardDriver({
  name,
  phone,
  jenisKelamin,
  id,
  image,
  status,
  email,
}) {
  return (
    <>
      <Card sx={{ minWidth: 200, border: "1px solid rgb(217 218 219)"}}>
        <CardContent>
          <Typography
            sx={{ fontSize: 10, fontWeight: "bolder" }}
            color="text.secondary"
            mb={1}
          >
            DRIVER
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
