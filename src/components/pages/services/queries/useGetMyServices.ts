import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../../../services/api.ts";

export const GET_MY_SERVICES_QUERY = "createServiceQuery";

export const useGetMyServices = () => {
  return useQuery({
    queryKey: [GET_MY_SERVICES_QUERY],
    staleTime: 60 * 1000,
    queryFn: getServices,
  });
};
