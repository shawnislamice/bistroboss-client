import { Helmet } from "react-helmet-async";
import SharedMenuCover from "../shared/SharedMenuCover";
import menubg from "../assets/menu/banner3.jpg";
import MenuCategory from "../components/MenuCategory";
import SharedTitleOfSection from "../shared/SharedTitleOfSection";
import useMenu from "../hooks/useMenu";
import bannerShared from "../assets/home/chef-service.jpg";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosCommon from "../hooks/useAxiosCommon";
const OurMenu = () => {
  const axiosCommon = useAxiosCommon();

  const { data:myMenu=[], isError, error, refetch, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosCommon.get("/menus");
      return data;
    },
    queryKey: ["menus"],
  });
  
  const desserts = myMenu.filter((item) => item.category == "dessert");
  const pizzas = myMenu.filter((item) => item.category == "pizza");
  const salads = myMenu.filter((item) => item.category == "salad");
  const soups = myMenu.filter((item) => item.category == "soup");
  const todaysOffered = myMenu.filter((item) => item.category == "offered");
  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <SharedMenuCover
        img={menubg}
        height={"600px"}
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
        textSize={"50px"}
        widtH={"1320px"}
      ></SharedMenuCover>
      <div className="md:mt-[70px] mb-5">
        <SharedTitleOfSection
          heading={"---Don't miss---"}
          SubHeading={"TODAY'S OFFER"}
        ></SharedTitleOfSection>
      </div>
      <MenuCategory
        items={todaysOffered}
        title={"todaysoffered"}
      ></MenuCategory>
      <SharedMenuCover
        img={bannerShared}
        height={"500px"}
        title={"DESSERTS"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        textSize={"32px"}
        widtH={"1000px"}
      ></SharedMenuCover>
      <MenuCategory items={desserts} title={"dessert"}></MenuCategory>
      <SharedMenuCover
        img={bannerShared}
        height={"500px"}
        title={"PIZZA"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        textSize={"32px"}
        widtH={"1000px"}
      ></SharedMenuCover>
      <MenuCategory items={pizzas} title={"pizza"}></MenuCategory>
      <SharedMenuCover
        img={bannerShared}
        height={"500px"}
        title={"SALADS"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        textSize={"32px"}
        widtH={"1000px"}
      ></SharedMenuCover>
      <MenuCategory items={salads} title={"salad"}></MenuCategory>
      <SharedMenuCover
        img={bannerShared}
        height={"500px"}
        title={"soups"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        textSize={"32px"}
        widtH={"1000px"}
      ></SharedMenuCover>
      <MenuCategory items={soups} title={"soup"}>
        {" "}
      </MenuCategory>
    </div>
  );
};

export default OurMenu;
