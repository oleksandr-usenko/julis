import { forwardRef } from "react";
import { TextField, TextFieldProps } from "@mui/material";

export type TextFieldWrapperProps = {
  helperText?: string;
  errorMessage?: string | null;
} & TextFieldProps;

export const UIInput = forwardRef<HTMLInputElement, TextFieldWrapperProps>(
  ({ errorMessage, helperText, ...rest }, ref) => {
    const isError = Boolean(errorMessage || rest.error);
    return (
      <TextField
        {...rest}
        inputRef={ref}
        error={isError}
        helperText={errorMessage ?? helperText}
        fullWidth
        sx={{
          ".MuiOutlinedInput-root": {
            borderRadius: "16px",
            background: "#fff",
          },
          "& .MuiOutlinedInput-root.Mui-focused": {
            background: "#e8b4a0",
          },
        }}
      />
    );
  },
);
