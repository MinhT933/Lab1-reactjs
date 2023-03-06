import React from 'react';
import TextField from '@mui/material/TextFiel';

function Input(props) {
    let  {label,defaultValue} = props
    return (
        <div>
            <TextField
                required
                id="outlined-required"
                label={label}
                defaultValue={defaultValue}
            />
        </div>
    );
}

export default Input;