import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { createService } from "../../../services/api.ts";
import { UIDropzone } from "../../UI/UIDropzone.tsx";

interface DialogProps {
  open: boolean;
  onSave: (value: any) => void;
  onClose: () => void;
}

export const AddServiceDialog = (props: DialogProps) => {
  const { onSave, onClose, open } = props;
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (eventFiles: File[]) => {
    if (eventFiles.length > 0)
      setFiles((oldFiles) => [...oldFiles, ...Array.from(eventFiles)]);
  };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("duration", duration);
    formData.append("description", description);
    formData.append("price", price);
    files.forEach((file) => formData.append("media", file));

    createService(formData).then((res) => {
      console.log(res);
      onSave(name);
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{t("services.add.header")}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSave}>
          <TextField
            variant="outlined"
            margin="normal"
            className="w-full"
            type="text"
            label={t("services.add.title")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            className="w-full"
            type="text"
            label={t("services.add.description")}
            multiline
            maxRows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            className="w-full"
            type="number"
            label={t("services.add.duration")}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            className="w-full"
            type="number"
            label={t("services.add.price")}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <UIDropzone handleFiles={handleFileChange} />
          <Button variant="contained" color="primary" type="submit">
            {t("services.add.saveBtn")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
