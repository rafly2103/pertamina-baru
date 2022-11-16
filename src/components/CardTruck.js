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

export default function CardTruck({ name, perusahaan, driver, contract, phone,image, status, id }) {
  return (
    <>
      <Card sx={{ minWidth: 275, border: "1px solid rgb(217 218 219)" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 12, fontWeight: "bolder" }}
            color="text.secondary"
            mb={1}
          >
            D 514{id} HNO
          </Typography>
          <Divider />
          <Box mb={1} />
          <Box
            mb={1}
            display={`flex`}
            alignItems={`center`}
            justifyContent={`space-between`}
          >
            <Box>
            <Link
                  to={`/truck/edit/${id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
              <Typography
                variant="h6"
                component="div"
                fontWeight={"bolder"}
              >
                {name}
              </Typography>
              </Link>
              <Link
                  to={`/perusahaan/edit/${id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
              <Typography variant="h7" fontWeight={"bolder"}>{perusahaan}</Typography><br/></Link>
              <Typography variant="body2">{contract}</Typography>
              <Typography variant="body2">{phone}</Typography>
            </Box>

            <Box>
              <Avatar sx={{ height: 80, width: 80 }} src={image} />
            </Box>
          </Box>
          <Divider mt={2} />
          <Typography
            sx={{ fontSize: 14, fontWeight: "bolder" }}
            mt={1}
          >
            {driver}
          </Typography>
        </CardContent>
        <CardActions>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            padding={1}
          >
            <Box
              borderRadius={10}
              backgroundColor={status ? "green" : "grey"}
              color={"white"}
              fontSize={10}
              fontWeight={"bolder"}
              padding={1}
            >
              {status ? "LAYAK" : "TIDAK LAYAK"}
            </Box>

            <Box display={"flex"} justifyContent={"space-around"}>
              <Box marginRight={1}>
                <Link
                  to={`/Truck/edit/${id}`}
                  style={{ textDecoration: "none", fontWeight: "bolder" }}
                >
                  <a>Edit</a>
                </Link>
              </Box>
              <Box>|</Box>
              <Box marginLeft={1}>
                <Link
                  to={`/Truck/edit/${id}`}
                  style={{ textDecoration: "none", fontWeight: "bolder" }}
                >
                  <a>Delete</a>
                </Link>
              </Box>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
