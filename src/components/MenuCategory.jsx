import { Helmet } from "react-helmet-async";
import useMenu from "../hooks/useMenu";
import SharedMenuCover from "../shared/SharedMenuCover";
import banner from '../../public/chef-service.jpg'
import SharedTitleOfSection from "../shared/SharedTitleOfSection";
import MenuItemCard from "./MenuItemCard";
import { Link } from "react-router-dom";
const MenuCategory = ({items,title}) => {
   
    return (
      <div className="my-5 md:my-10 max-w-screen-xl mx-auto">
        <Helmet>
          <title>Bistro Boos || Menu</title>
        </Helmet>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-3 md:gap-y-6  place-items-center">
          {items.map((item) => (
            <MenuItemCard key={item?._id} menu={item}></MenuItemCard>
          ))}
        </div>
        <button className="btn btn-primary block mx-auto my-5">
          <Link to={`/ourshop/${title}`}>Order Now</Link>
        </button>
      </div>
    );
};

export default MenuCategory;