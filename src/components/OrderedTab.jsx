
import FoodCard from './FoodCard';

const OrderedTab = ({items}) => {
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 place-items-center md:max-w-6xl mx-auto my-5">
          {items.map((item) => (
            <FoodCard key={item?._id} item={item}></FoodCard>
          ))}
        </div>
      </div>
    );
};

export default OrderedTab;