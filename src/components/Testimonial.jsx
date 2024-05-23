import SharedTitleOfSection from "../shared/SharedTitleOfSection";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/Testimonial.css";
import { Autoplay, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container my-5 md:my-10 mx-auto max-w-screen-xl">
      <SharedTitleOfSection
        heading={"---What Our Clients Say---"}
        SubHeading={"TESTIMONIALS"}
      ></SharedTitleOfSection>
      <Swiper
        navigation={true}
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review?._id}>
            <div className="max-w-5xl mx-auto space-y-4">
              <Rating
                style={{ maxWidth: 250, margin: "0 auto", padding: "20px 0" }}
                value={review?.rating}
                readOnly
              />
              <FaQuoteLeft size={80} className="block mx-auto  my-3" />

              <p className="text-center opacity-90">{review?.details}</p>
              <h3 className="text-2xl text-[#CD9003] uppercase">{review?.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
