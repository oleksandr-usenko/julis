import { forwardRef, ReactNode } from "react";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";

type UIInputExtras = {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

export type TextFieldWrapperProps = {
  helperText?: string;
  errorMessage?: string | null;
  pattern?: string;
} & TextFieldProps &
  UIInputExtras;

export const UIInput = forwardRef<HTMLInputElement, TextFieldWrapperProps>(
  (
    {
      errorMessage,
      helperText,
      InputProps,
      startAdornment,
      endAdornment,
      ...rest
    },
    ref,
  ) => {
    const isError = Boolean(errorMessage || rest.error);
    return (
      <TextField
        {...rest}
        InputProps={{
          ...InputProps,
          startAdornment: startAdornment ? (
            <InputAdornment
              sx={{
                color: "inherit",
              }}
              position="start"
            >
              {startAdornment}
            </InputAdornment>
          ) : (
            InputProps?.startAdornment
          ),
          endAdornment: endAdornment ? (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ) : (
            InputProps?.endAdornment
          ),
        }}
        inputRef={ref}
        error={isError}
        helperText={errorMessage ?? helperText}
        fullWidth
        sx={{
          ".MuiOutlinedInput-root": {
            borderRadius: "16px",
            background: "#fefaf7",
          },
          ".MuiInputLabel-root": {
            color: "#d9775780",
            "&.Mui-focused, &.MuiFormLabel-filled": {
              color: "#d97757",
            },
          },
          "& .MuiOutlinedInput-root.Mui-focused": {},
        }}
      />
    );
  },
);
