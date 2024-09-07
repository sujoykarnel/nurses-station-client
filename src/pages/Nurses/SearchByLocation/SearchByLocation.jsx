import useDistrict from "../../../hooks/useDistrict";
import useUpazilla from "../../../hooks/useUpazilla";

const SearchByLocation = () => {
  const { districts } = useDistrict();
  const { upazillas } = useUpazilla("barishal");

  return (
    <div>
      <div>
        <select className="select select-info w-full max-w-xs">
          <option disabled selected>
            Select District
          </option>
          {districts.map((item, index) => (
            <option key={index}>{item?.district}</option>
          ))}
        </select>
        <select className="select select-info w-full max-w-xs">
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
