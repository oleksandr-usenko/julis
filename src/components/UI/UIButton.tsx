import { Button, ButtonProps } from "@mui/material";

export type ButtonWrapperProps = {
  helperText?: string;
  errorMessage?: string | null;
} & ButtonProps;

export const UIButton = ({ children, ...rest }: ButtonWrapperProps) => {
  return (
    <Button {...rest} sx={{ borderRadius: "16px" }}>
      {children}
    </Button>
  );
};
