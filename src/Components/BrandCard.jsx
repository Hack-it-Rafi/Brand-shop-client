const BrandCard = ({ brand }) => {
    const { name, image } = brand;
    return (
        <div className="w-full h-36 bg-slate-100 rounded-lg flex justify-center items-center font-Young">
            <div className="flex justify-around items-center w-full">
                <img className="w-[80px]" src={image} alt="hero" />
                <p className="text-2xl">{name}</p>
            </div>
        </div>
    );
};

export default BrandCard;