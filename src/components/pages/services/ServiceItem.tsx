import { TService } from "./types.ts";

type Props = {
  service: TService;
};

export const ServiceItem = ({ service }: Props) => {
  return (
    <div className="border border-solid border-px border-gray-800 p-4 rounded-md bg-green-200 shadow-sm w-[300px]">
      <p>{service.name}</p>
      {service.description && <p>{service.description}</p>}
      <p>{service.duration}</p>
      <p>{service.price}</p>
    </div>
  );
};
