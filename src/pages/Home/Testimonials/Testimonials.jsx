// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Sanjoy Roy",
      rating: 5,
      testimonial:
        "The nurses were incredibly compassionate and attentive. They made my recovery process much smoother and were always ready to help with a smile.",
    },
    {
      _id: 2,
      name: "Sukhdeb Gharami",
      rating: 4,
      testimonial:
        "During my stay at the hospital, the nursing staff was exceptional. They not only provided excellent medical care but also emotional support, which made a huge difference.",
    },
    {
      _id: 3,
      name: "Al-Manun",
      rating: 5,
      testimonial:
        "I can't thank the nursing team enough for their professionalism and dedication. They were always there when I needed them, and their expertise was evident in everything they did.",
    },
    {
      _id: 4,
      name: "Zahedul Islam",
      rating: 5,
      testimonial:
        "The home nursing services we received for my elderly mother were outstanding. The nurses were patient, kind, and provided top-notch care that allowed her to stay comfortable at home.",
    },
    {
      _id: 5,
      name: "David P.",
      rating: 5,
      testimonial:
        "The nurses in the pediatric ward were amazing with my daughter. They made her feel safe and comforted during a scary time, and their playful approach helped her cope better.",
    },
    {
      _id: 6,
      name: "Hiren Chandro",
      rating: 5,
      testimonial:
        "The hospice nurses who cared for my father were angels. Their gentle care and support during his final days brought us immense comfort and peace.",
    },
    {
      _id: 7,
      name: "Manik Mia",
      rating: 3,
      testimonial:
        "The nursing staff at the rehabilitation center was phenomenal. They motivated me every step of the way and celebrated my progress, which kept me going.",
    },
    {
      _id: 8,
      name: "Palash Biswas",
      rating: 5,
      testimonial:
        "I had a complicated surgery, and the post-op nursing care was incredible. The nurses were vigilant and proactive, ensuring I had a smooth recovery.",
    },
    {
      _id: 9,
      name: "Ranu Mondol",
      rating: 5,
      testimonial:
        "As a new mother, I was overwhelmed, but the maternity nurses were a lifesaver. They guided me through breastfeeding and newborn care with patience and expertise.",
    },
    {
      _id: 10,
      name: "Benzir Ahmed",
      rating: 2,
      testimonial:
        "The critical care nurses who looked after my wife were exceptional. Their skill and dedication were evident in the way they managed her complex condition and kept us informed.",
    },
  ];

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {reviews.map((review) => (
        <SwiperSlide key={review._id}>
          <div className="mx-16 text-center flex flex-col items-center space-y-4 pb-8">
            <FaQuoteLeft className="text-6xl " />
            <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
            <p>{review.testimonial}</p>
            <h2 className="text-2xl font-bold">--- {review.name}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonials;
