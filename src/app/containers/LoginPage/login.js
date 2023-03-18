import { Box } from "@mui/material";
import React from "react";
import HeaderAvatar from "../../components/avatar/HeaderAvatar";

import FormLogin from "../../components/card/FormLogin";
// import image from "../../../../public/img/cover.jpg";

export default function Login() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "43rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundSize: "cover",
        objectFit: "contain",
        backgroundImage: `url('https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg')`,
      }}
    >
      <Box sx={{ marginBottom: "-60px" }}>
        <HeaderAvatar
          src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
          width={123}
          height={123}
        />
      </Box>
      <Box>
        <FormLogin />
      </Box>
    </Box>
  );
}
