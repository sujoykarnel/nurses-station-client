import { useEffect, useState } from "react";
import useDistrict from "../../../hooks/useDistrict";
import useUpazilla from "../../../hooks/useUpazilla";

const SearchByLocation = () => {
  const [district, setDistrict] = useState("");
  const { districts } = useDistrict();
  const { upazillas, refetch } = useUpazilla(district);

  useEffect(() => {
    refetch();
  }, [district, refetch]);

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value.toLowerCase());
  };

  const handleUpazillaChange = (e) => {};

  return (
    <div>
      <div>
        <select
          className="select select-info w-full max-w-xs"
          onChange={handleDistrictChange}
        >
          <option disabled selected>
            Select District
          </option>
          {districts
            .sort((a, b) => a > b)
            .map((item, index) => (
              <option key={index}>{item?.district}</option>
            ))}
        </select>
        <select
          className="select select-info w-full max-w-xs"
          onChange={handleUpazillaChange}
        >
          <option disabled selected>
            Select Upazila
          </option>
          {upazillas.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchByLocation;
