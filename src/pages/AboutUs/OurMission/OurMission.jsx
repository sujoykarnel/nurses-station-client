import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import missionImg from "../../../assets/about-us/mission.png";


const OurMission = () => {


  return (
    <div>
      <SectionTitle heading={"Our Mission"} />
      <div className="md:flex gap-4 py-4 px-16">
        <div className="md:w-1/2 flex items-center justify-center">
          <img className="rounded-full border-4 border-black w-1/2 " src={missionImg} alt="" />
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <h2 className="text-2xl text-center font-bold text-green-700">
            Mission Statement for Nurses Station
          </h2>
          <p className="text-justify">
            At Nurses Station, our mission is to provide exceptional,
            accessible, and compassionate nursing care through innovative
            digital solutions. We aim to bridge the gap between patients and
            healthcare professionals by delivering personalized, high-quality
            nursing services right at your fingertips. Our core values are:
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
