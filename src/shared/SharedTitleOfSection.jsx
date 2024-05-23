
const SharedTitleOfSection = ({heading,SubHeading}) => {
    return (
      <div className="container mx-auto max-w-xs mb-8">
        <p className="text-[#D99904] pb-2 text-center">{heading}</p>
        <hr className="border" />
        <h3 className="py-3 md:text-2xl text-center uppercase">{SubHeading}</h3>
        <hr className="border" />
      </div>
    );
};

export default SharedTitleOfSection;