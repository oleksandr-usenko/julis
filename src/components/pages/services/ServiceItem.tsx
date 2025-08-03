import { TService } from "./types.ts";
import { Card, CardContent, CardMedia } from "@mui/material";
import Carousel from "react-material-ui-carousel";

type Props = {
  service: TService;
};

export const ServiceItem = ({ service }: Props) => {
  let image = "src/assets/service-placeholder.jpg";
  if (service.media_urls && service.media_urls.length > 0) {
    image = service.media_urls[0];
  }
  return (
    <Card sx={{ width: "300px", borderRadius: "16px" }} variant="outlined">
      {service.media_urls && service.media_urls.length > 1 ? (
        <Carousel autoPlay={false}>
          {service.media_urls.map((media) => (
            <CardMedia
              key={media}
              component="img"
              alt="service illustration"
              width="300px"
              image={media}
              sx={{
                height: "200px",
              }}
            />
          ))}
        </Carousel>
      ) : (
        <CardMedia
          component="img"
          alt="service illustration"
          width="300px"
          image={image}
          sx={{
            height: "200px",
          }}
        />
      )}
      <CardContent>
        <p>{service.name}</p>
        {service.description && <p>{service.description}</p>}
        <p>{service.duration}</p>
        <p>{service.price}</p>
      </CardContent>
    </Card>
  );
};
