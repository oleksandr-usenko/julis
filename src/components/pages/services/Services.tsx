import { Button, Typography } from "@mui/material";
import { AddServiceDialog } from "./AddServiceDialog.tsx";
import { useState } from "react";
import { useGetMyServices } from "./queries/useGetMyServices.ts";
import { ServiceItem } from "./ServiceItem.tsx";

export const Services = () => {
  const [dialogOpened, setDialogOpened] = useState<boolean>(false);
  const { data: services } = useGetMyServices();

  console.log(services);

  const handleSave = (data: any) => {
    console.log(data);
    setDialogOpened(false);
  };
  return (
    <div>
      <Typography variant="h4" component="div" gutterBottom>
        Services
      </Typography>
      <div className="flex flex-wrap gap-2">
        {services &&
          services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setDialogOpened(true)}
      >
        Add services
      </Button>
      <AddServiceDialog
        open={dialogOpened}
        onClose={() => setDialogOpened(false)}
        onSave={handleSave}
      />
    </div>
  );
};
