import { useLoaderData } from "react-router-dom";
import CartProductCard from "./CartProductCard";

const MyCart = () => {
    const loadedCartProducts = useLoaderData();
    // console.log(loadedCartProducts);
    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='text-5xl font-Young'>Products</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {
                    loadedCartProducts.map(product => <CartProductCard key={product._id} product={product}></CartProductCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;