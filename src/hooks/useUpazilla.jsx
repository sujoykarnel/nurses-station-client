import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUpazilla = (district) => {
  const { data: upazillas = [], refetch } = useQuery({
    queryKey: ["upazilla"],
    queryFn: async () => {
      const res = await axios.get(
        `https://bdapis.com/api/v1.2/district/git${district}`
      );
      console.log(res);
      return res.data.data.upazillas;
    },
  });
  return { upazillas, refetch };
};

export default useUpazilla;
