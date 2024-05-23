import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "./styles/OrdersOnline.css";

import { Autoplay, Pagination } from "swiper/modules";
import SharedTitleOfSection from "../shared/SharedTitleOfSection";
const OrdersOnline = () => {
  const breakpoints = {
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  };
  return (
    <div className="my-5 md:my-10">
      <SharedTitleOfSection
        heading={"---From 11:00am to 10:00pm---"}
        SubHeading={"ORDER ONLINE"}
      ></SharedTitleOfSection>
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 1000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper md:max-w-4xl mx-auto font-cinzel text-white"
      >
        <SwiperSlide>
          <img className="relative" src={slide1} alt="" />
          <h3 className="absolute bottom-8   text-xl">SALAD</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slide2} alt="" />
          <h3 className="absolute bottom-8  text-xl">PIZZA</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slide3} alt="" />
          <h3 className="absolute bottom-8 text-xl">SOUP</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slide4} alt="" />
          <h3 className="absolute bottom-8   text-xl">DESERT</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slide5} alt="" />
          <h3 className="absolute bottom-8   text-xl">DESERT</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrdersOnline;
