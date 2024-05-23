import { useEffect, useState } from "react";
import BistroBoss from "../components/BistroBoss";
import OrdersOnline from "../components/OrdersOnline";
import PopularMenu from "../components/PopularMenu";
import Banner from "./Banner";
import FeaturedMenu from "../components/FeaturedMenu";
import Testimonial from "../components/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  
  return (
    <div className="home">
      <Helmet>
        <title>Home: Bistro Restaurant</title>
      </Helmet>
      <Banner></Banner>
      <OrdersOnline></OrdersOnline>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <FeaturedMenu></FeaturedMenu>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
