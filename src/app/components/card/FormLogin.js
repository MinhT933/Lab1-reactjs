import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Card,
} from "@mui/material";
import * as React from "react";
import Input from "../Input";
import PersonIcon from "@mui/icons-material/Person";
import { Box } from "@mui/system";
import LockIcon from "@mui/icons-material/Lock";
import CustomizedButtons from "../button/CustomizedButtons";

export default function FormLogin() {
  return (
    <Card
      sx={{ width: "26rem", height: "25rem", opacity: "0.6", borderRadius: 6 }}
    >
      <CardMedia
        sx={{ height: 40 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent sx={{ display: "center", justifyContent: "center" }}>
        <Box>
          <h2>Login</h2>
          <Input icon={<PersonIcon fontSize="large" />} />
          <Input marginTop="0.5rem" icon={<LockIcon fontSize="large" />} />
        </Box>
      </CardContent>
      <CardActions sx={{ display: "center", justifyContent: "center" }}>
        <CustomizedButtons button="Đăng Nhập" />
      </CardActions>
      {/* <h1>hiho</h1> */}
    </Card>
  );
}
