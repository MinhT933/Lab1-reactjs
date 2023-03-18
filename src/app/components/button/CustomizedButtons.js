import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#f1a54a",
  "&:hover": {
    backgroundColor: "#f7b255",
  },
}));

export default function CustomizedButtons(props) {
  let { button } = props;
  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained">{button}</ColorButton>
    </Stack>
  );
}
