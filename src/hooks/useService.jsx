import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useService = () => {
  const { data: services = [], refetch } = useQuery({
    queryKey: ["service"],
    queryFn: async () => {
      const res = await axios.get("nursing_services.json");
      console.log(res);
      return res.data;
    },
  });
  return { services, refetch };
};

export default useService;
