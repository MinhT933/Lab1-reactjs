import { Avatar } from "@mui/material";
import React from "react";

function HeaderAvatar(props) {
  let { src, width, height } = props;
  return (
    <Avatar
      alt="Remy Sharp"
      src={src}
      sx={{ width: { width }, height: { height }, zIndex: 2 }}
    />
  );
}

export default HeaderAvatar;
