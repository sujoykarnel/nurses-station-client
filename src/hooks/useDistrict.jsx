import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useDistrict = () => {
  const { data: districts = [], refetch } = useQuery({
    queryKey: ["district"],
    queryFn: async () => {
      const res = await axios.get("https://bdapis.com/api/v1.2/districts");
      return res.data.data.sort();
    },
  });
  return { districts, refetch };
};

export default useDistrict;
