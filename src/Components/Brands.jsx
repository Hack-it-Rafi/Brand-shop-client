// import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const Brands = ({ brands }) => {
    // const [loadBrands, setLoadBrands] = useState([]);

    // useEffect(()=>{
    //     setLoadBrands(brands);
    // },[brands])
    if(brands.length==0){
        return;
    }
    console.log(brands);  
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brands;