import SharedTitleOfSection from "../shared/SharedTitleOfSection";
import MenuItemCard from "./MenuItemCard";

import { useQuery } from "@tanstack/react-query";

import useAxiosCommon from "../hooks/useAxiosCommon";

const PopularMenu = () => {
  const axiosCommon = useAxiosCommon();
  const {
    data: menu = [],
    isError,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryFn: async () => {
      const { data } = await axiosCommon.get("/menus");
      return data;
    },
    queryKey: ["popular-menu"],
  });
  

  const popularItems = menu.filter(
    (menuItem) => menuItem.category == "popular"
  );

  return (
    <div className="container mx-auto max-w-screen-xl">
      <SharedTitleOfSection
        heading={"---Check it out---"}
        SubHeading={"FROM OUR MENU"}
      ></SharedTitleOfSection>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-3 md:gap-y-6  place-items-center">
        {popularItems.map((item) => (
          <MenuItemCard key={item?._id} menu={item}></MenuItemCard>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
