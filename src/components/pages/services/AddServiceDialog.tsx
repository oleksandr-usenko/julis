import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { createService } from "../../../services/api.ts";
import { UIDropzone } from "../../UI/UIDropzone.tsx";
import { UIInput } from "../../UI/UIInput.tsx";
import { UIButton } from "../../UI/UIButton.tsx";
import { Schedule } from "@mui/icons-material";
import { TService } from "./types.ts";

interface DialogProps {
  open: boolean;
  onSave: (value: any) => void;
  onClose: () => void;
  service?: TService;
}

export const AddServiceDialog = (props: DialogProps) => {
  const { onSave, onClose, open } = props;
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    if (props.service) {
      setName(props.service.name);
      setDescription(props.service.description || "");
      setDuration(`${props.service.duration}`);
      setPrice(`${props.service.price}`);
    }
  }, [open]);

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
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        ".MuiDialog-paper.MuiPaper-rounded": {
          borderRadius: "16px",
        },
      }}
    >
      <DialogTitle>{t("services.add.header")}</DialogTitle>
      <DialogContent>
        <form className="flex flex-col gap-4 pt-2" onSubmit={handleSave}>
          <UIInput
            variant="outlined"
            margin="none"
            className="w-full"
            type="text"
            label={t("services.add.title")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <UIInput
            variant="outlined"
            margin="none"
            className="w-full"
            type="text"
            label={t("services.add.description")}
            multiline
            maxRows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex gap-4">
            <UIInput
              variant="outlined"
              margin="none"
              className="w-full"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              label={t("services.add.duration")}
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              startAdornment={<Schedule />}
            />
            <UIInput
              variant="outlined"
              margin="none"
              className="w-full"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              label={t("services.add.price")}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <UIDropzone handleFiles={handleFileChange} />
          <UIButton variant="contained" color="primary" type="submit">
            {t("services.add.saveBtn")}
          </UIButton>
        </form>
      </DialogContent>
    </Dialog>
  );
};
