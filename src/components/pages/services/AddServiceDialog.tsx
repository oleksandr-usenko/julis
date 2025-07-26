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

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    createService({
      name,
      duration: +duration,
      description,
      price: +price,
    }).then((res) => {
      console.log(res);
      onSave(name);
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{t("services.header")}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSave}>
          <TextField
            variant="outlined"
            margin="normal"
            className="w-full"
            type="text"
            label={t("services.title")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            className="w-full"
            type="text"
            label={t("services.description")}
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
            label={t("services.duration")}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            className="w-full"
            type="number"
            label={t("services.price")}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <Button variant="contained" color="primary" type="submit">
            {t("services.saveBtn")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
