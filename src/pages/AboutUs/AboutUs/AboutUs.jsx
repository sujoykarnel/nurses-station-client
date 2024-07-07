import img from "../../../assets/about-us/about-us-2.png";

import OurMission from "../OurMission/OurMission";
import OurValues from "../OurValues/OurValues";
import OurVision from "../OurVision/OurVision";

const AboutUs = () => {
  return (
    <div>
      <img src={img} alt="" />
      <OurMission />
      <OurValues />
      <OurVision />
    </div>
  );
};

export default AboutUs;
