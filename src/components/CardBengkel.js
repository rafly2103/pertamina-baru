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

export default function CardBengkel({ name, contract, phone,alamat, status, id }) {
  return (
    <>
      <Card sx={{ minWidth: 275, border: "1px solid rgb(217 218 219)" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 10, fontWeight: "bolder" }}
            color="text.secondary"
            mb={1}
          >
            BENGKEL {id}
          </Typography>
          <Divider />
          <Box mb={1} />
          <Box
            display={`flex`}
            alignItems={`center`}
            justifyContent={`space-between`}
          >
            <Box>
              <Typography
                variant="h7"
                component="div"
                fontWeight={"bolder"}
                marginBottom={1}
              >
                {name}
              </Typography>

              <Typography variant="body2">{contract}</Typography>

              <Typography variant="body2">{phone}</Typography>
              <Typography variant="body2">{alamat}</Typography>
            </Box>

            <Box>
              <Avatar sx={{ height: 80, width: 80 }} />
            </Box>
          </Box>
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
              {status ? "BUKA" : "TUTUP"}
            </Box>

            <Box display={"flex"} justifyContent={"space-around"}>
              <Box marginRight={1}>
                <Link
                  to={`/Bengkel/edit/${id}`}
                  style={{ textDecoration: "none", fontWeight: "bolder" }}
                >
                  <a>Edit</a>
                </Link>
              </Box>
              <Box>|</Box>
              <Box marginLeft={1}>
                <Link
                  to={`/Bengkel/edit/${id}`}
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
