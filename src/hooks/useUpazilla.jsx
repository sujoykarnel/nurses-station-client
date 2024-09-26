import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUpazilla = (district) => {
  const { refetch, data: upazillas = [] } = useQuery({
    queryKey: ["upazilla"],
    queryFn: async () => {
      const res = await axios.get(
        `https://bdapis.com/api/v1.2/district/${district}`
      );
      return res.data.data.upazillas;
    },
  });
  console.log(district, upazillas);
  return { upazillas, refetch };
};

export default useUpazilla;
