import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import visionImg from "../../../assets/about-us/vision.png";

const OurVision = () => {
  return (
    <div>
      <SectionTitle heading={"Our Vision"} />
      <div className="md:flex gap-4 py-4 px-16">
        <div className="md:w-1/2 flex items-center justify-center">
          <img className="rounded-full border-4 border-black w-1/2" src={visionImg} alt="" />
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center text-justify">
          <p>
            Our vision is to revolutionize healthcare delivery by making
            high-quality nursing care available to all, enhancing the overall
            patient experience, and improving health outcomes through seamless
            and compassionate service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
