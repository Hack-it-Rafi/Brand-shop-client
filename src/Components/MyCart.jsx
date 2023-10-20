import { useLoaderData } from "react-router-dom";
import CartProductCard from "./CartProductCard";

const MyCart = () => {
    const loadedCartProducts = useLoaderData();
    // console.log(loadedCartProducts);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                loadedCartProducts.map(product=><CartProductCard key={product._id} product={product}></CartProductCard>)
            }
        </div>
    );
};

export default MyCart;