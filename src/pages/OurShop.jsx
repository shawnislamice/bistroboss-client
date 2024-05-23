import SharedMenuCover from "../shared/SharedMenuCover";
import banner from "../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../hooks/useMenu";
import FoodCard from "../components/FoodCard";
import OrderedTab from "../components/OrderedTab";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../hooks/useAxiosCommon";

const OurShop = () => {
  const axiosCommon = useAxiosCommon();
  const {
    data: menu = [],
    isLoading,
    error,
    isError,
    refetch,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axiosCommon.get("/menus");
      return data;
    },
    queryKey: ["menus"],
  });
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const desserts = menu.filter((item) => item.category == "dessert");
  const pizzas = menu.filter((item) => item.category == "pizza");
  const salads = menu.filter((item) => item.category == "salad");
  const soups = menu.filter((item) => item.category == "soup");
  const todaysOffered = menu.filter((item) => item.category == "offered");
  const drinks = menu.filter((item) => item.category == "drinks");
  const [tabIndex, setTabIndex] = useState(initialIndex);
  return (
    <div className="">
      <SharedMenuCover
        img={banner}
        widtH={"1320px"}
        title={"OUR SHOP"}
        description={"Would you like to try a dish?"}
        textSize={"48px"}
        height={"600px"}
      ></SharedMenuCover>
      <div className="md:my-5 my-10">
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className={"container  mx-auto my-10"}
        >
          <TabList className={"max-w-md mx-auto my-4"}>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Desert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <OrderedTab items={salads}></OrderedTab>
          </TabPanel>
          <TabPanel>
            <OrderedTab items={pizzas}></OrderedTab>
          </TabPanel>
          <TabPanel>
            <OrderedTab items={soups}></OrderedTab>
          </TabPanel>
          <TabPanel>
            <OrderedTab items={desserts}></OrderedTab>
          </TabPanel>
          <TabPanel>
            <OrderedTab items={drinks}></OrderedTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
