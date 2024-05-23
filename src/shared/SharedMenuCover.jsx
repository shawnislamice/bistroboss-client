import { Parallax } from "react-parallax";

const SharedMenuCover = ({ img, height, title, description, textSize,widtH }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div>
        <div
          className={`hero bg-cover bg-no-repeat bg-center `}
          style={{
            
            backgroundPosition: "center",
            height: height,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div style={{width:widtH}} className="flex flex-col items-center justify-center md:h-[320px] p-10 bg-[#15151599]">
              <h1
                style={{ fontSize: textSize }}
                className="font-cinzel font-semibold"
              >
                {title}
              </h1>
              <p className="opacity-90 text-center">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default SharedMenuCover;
