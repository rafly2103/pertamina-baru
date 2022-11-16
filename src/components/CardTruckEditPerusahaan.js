import {  Button,
  CardContent,
  Typography,
  Box,
  Divider,
  Avatar,
} from "@mui/material";
import Card from "@mui/material/Card";

import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";

export default function CardPerusahaan({ name, contract, phone,email,image, status, id }) {
  return (
    <>
      <Card sx={{ minWidth: 310, border: "1px solid rgb(217 218 219)" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 10, fontWeight: "bolder" }}
            color="text.secondary"
            mb={1}
          >
            PERUSAHAAN
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
                  to={`/perusahaan/edit/${id}`}
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

              <Typography variant="body2">{contract}</Typography>

              <Typography variant="body2">{phone}</Typography>
              <Typography variant="body2">{email}</Typography>
            </Box>

            <Box>
              <Avatar sx={{ height: 80, width: 80 }} src={image}/>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
