
import "./styles/FeaturedMenu.css";
const FeaturedMenu = () => {
  return (
    <div className="banner   my-5 md:my-10 ">
      <div className=" flex flex-col min-h-screen  justify-center items-center">
        <div className="container mx-auto max-w-xs mb-8">
          <p className="text-[#D99904] pb-2 text-center">---Check it out---</p>
          <hr className="border" />
          <h3 className="py-3 md:text-2xl text-center text-white uppercase">
            FROM OUR MENU
          </h3>
          <hr className="border" />
        </div>
        <div className="flex justify-between items-center md:max-w-4xl">
          <div className="basis-[48%]">
            <img
              src="/featured.jpg"
              className="object-cover md:h-[300px]"
              alt=""
            />
          </div>
          <div className="flex flex-col items-start space-y-1 basis-[48%] text-opacity-80 text-white">
            <p className="text-xl">March 20, 2023</p>
            <p className="text-sm"> WHERE CAN I GET SOME?</p>
            <p className="opacity-90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className=" px-4 py-2 bg-transparent border-b-[3px] rounded-lg uppercase pt-4 cursor-pointer hover:bg-[#F00] duration-300">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMenu;
