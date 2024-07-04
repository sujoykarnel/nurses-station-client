import img from "../../../assets/banner/banner-assist-care.png";

const AboutUs = () => {
  return (
    <div className="relative">
      <img src={img} alt="" />
      <div className="absolute text-white">
        <h3 className="text-3xl">Patient Care</h3>
      </div>
    </div>
  );
};

export default AboutUs;
