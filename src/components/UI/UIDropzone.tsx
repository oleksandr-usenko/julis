import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Typography, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

type Props = {
  handleFiles: (f: File[]) => void;
};

export const UIDropzone = ({ handleFiles }: Props) => {
  const { t } = useTranslation();
  const onDrop = useCallback((acceptedFiles: File[]) => {
    handleFiles(acceptedFiles); // Handle files here
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Paper
      {...getRootProps()}
      elevation={3}
      sx={{
        p: 4,
        textAlign: "center",
        border: "2px dashed #ccc",
        backgroundColor: isDragActive ? "#f0f0f0" : "inherit",
        cursor: "pointer",
      }}
    >
      <input {...getInputProps()} />
      <Typography variant="body1">
        {isDragActive ? t("ui.dropzone.hover") : t("ui.dropzone.label")}
      </Typography>
    </Paper>
  );
};
