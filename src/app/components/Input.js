import { InputAdornment, TextField } from "@mui/material";
import React from "react";

function Input(props) {
  let { label, defaultValue, icon, marginTop } = props;
  return (
    <div>
      <TextField
        required
        sx={{ marginTop: { marginTop } }}
        id="outlined-required"
        label={label}
        defaultValue={defaultValue}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/* <PersonIcon/> */}
              {icon}
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default Input;
