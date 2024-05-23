const MenuItemCard = ({ menu }) => {
  return (
    <div className="flex gap-4 items-center md:w-[600px]">
      <div>
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          className="object-cover md:h-[100px]"
          src={menu?.image}
          alt=""
        />
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="font-cinzel text-2xl text-[#151515]">
            {menu?.name} <span>---------------</span>
          </p>
          <p className="text-[#BB8506] text-xl font-semibold">${menu?.price}</p>
        </div>
        <p className="opacity-90 max-w-md">{menu?.recipe}</p>
      </div>
    </div>
  );
};

export default MenuItemCard;
