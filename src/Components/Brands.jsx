import  { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const Brands = () => {
  const [loadedBrands, setLoadedBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch('Brands.json');
        const data = await response.json();
        setLoadedBrands(data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  if (loadedBrands.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loadedBrands.map((brand) => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
