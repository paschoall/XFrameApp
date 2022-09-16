import TextField from '@mui/material/TextField';
import { Controller } from "react-hook-form";
import React from "react";

export const FormInputText = ({ required, name, control, label }) => {

  return (

    <Controller
      defaultValue=''
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          required={required}
          onChange={onChange}
          value={value}
          id={name}
          label={label}
          fullWidth
          variant="standard"
        />
      )}
    />
  )
}