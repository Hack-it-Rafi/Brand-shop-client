import BrandCard from "./BrandCard";

const Brands = ({ brands }) => {
    console.log(brands);
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brands;