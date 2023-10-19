import { useLoaderData, useParams } from "react-router-dom";

const BrandAd = () => {
    const {name} = useParams();
    const brands = useLoaderData();
    // console.log(brands);
    const lowerName = name.toLowerCase();
    // console.log(lowerName);
    fetch("/Brands.json")
    .then(res=>res.json())
    .then(data=>console.log(data))

    const thisBrand = brands.filter(br =>br.name==lowerName);
    console.log("This brand ",thisBrand);
    return (
        <div>
            
        </div>
    );
};

export default BrandAd;