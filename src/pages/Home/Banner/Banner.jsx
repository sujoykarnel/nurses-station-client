import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img1 from "../../../assets/banner/banner-patient-care.png";
import img2 from "../../../assets/banner/banner-health-edu.png";
import img3 from "../../../assets/banner/banner-assist-care.png";
import img4 from "../../../assets/banner/banner-preventive-care.png";
import img5 from "../../../assets/banner/banner-specialized-care.png";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative ">
            <img src={img1} alt="" />
            <div className=" absolute top-1/3 left-0 mx-14 text-white md:w-1/3 h-2/3 ">
              <h2 className="text-2xl md:text-6xl font-bold ">Patient Care</h2>
              <p className="mt-5 text-justify">
                Monitoring vital signs, administering medications, wound care,
                and assisting with daily activities.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative ">
            <img src={img2} alt="" />
            <div className=" absolute top-1/3 left-0 mx-14 text-white md:w-1/3 h-2/3 ">
              <h2 className="text-2xl md:text-6xl font-bold ">
                Health Education
              </h2>
              <p className="mt-5 text-justify">
                Teaching patients about managing chronic conditions,
                post-operative care, and healthy lifestyle choices.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative ">
            <img src={img3} alt="" />
            <div className=" absolute top-1/3 left-0 mx-14 text-white md:w-1/3 h-2/3 ">
              <h2 className="text-2xl md:text-6xl font-bold ">
                Coordination of Care
              </h2>
              <p className="mt-5 text-justify">
                Working with other healthcare professionals to develop and
                implement patient care plans.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative ">
            <img src={img4} alt="" />
            <div className=" absolute top-1/3 left-0 mx-14 text-white md:w-1/3 h-2/3 ">
              <h2 className=" text-2xl md:text-6xl font-bold ">
                Preventative Care
              </h2>
              <p className="mt-5 text-justify">
                Administering vaccinations, conducting health screenings, and
                providing counseling on disease prevention.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative ">
            <img src={img5} alt="" />
            <div className=" absolute top-1/3 left-0 mx-14 text-white md:w-1/3 h-2/3 ">
              <h2 className=" text-2xl md:text-6xl font-bold ">
                Specialized Care
              </h2>
              <p className="mt-5 text-justify">
                Providing care in areas such as pediatrics, geriatrics,
                oncology, critical care, and more.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
