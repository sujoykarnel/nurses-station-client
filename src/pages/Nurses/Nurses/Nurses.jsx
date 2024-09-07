import { Helmet } from "react-helmet-async";
import SearchByLocation from "../SearchByLocation/SearchByLocation";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Nurses = () => {
  return (
    <div>
      <Helmet>
        <title>Nurses | Nursing Station</title>
      </Helmet>
      <div>
        <SectionTitle heading={"Your Nurse Is Here"} />
        <SearchByLocation />
      </div>
    </div>
  );
};

export default Nurses;
