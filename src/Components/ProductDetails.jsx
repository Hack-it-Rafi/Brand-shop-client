import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const ProductDetails = () => {
    const id = useParams();
    console.log(id);
    const loadedProducts = useLoaderData();
    // console.log(loadedProducts);
    const products = loadedProducts.filter(product => product._id == id.id);
    console.log(products);

    const {name, brand, price, rating, image, type}=products[0];
    const cartProduct = {name, brand,price, rating, type, image};
    console.log(cartProduct);

    const handleAddToCart=()=>{
        fetch("https://brand-shop-server-rho-seven.vercel.app/myCart", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(cartProduct)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Product Added to Cart!',
                    text: 'Enjoy Exploring!',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                });
            }
        })
    }


    return (
        <div className="mt-20">
            <div className="flex max-w-4xl mx-auto gap-10 items-center justify-center">
                <div>
                    <img src={products[0].image} alt="Shoes" className="rounded-xl h-[300px]" />
                </div>
                <div>
                    <div className="mb-5">
                        <p className="font-Young text-xl">Brand: <span className="font-sans">{products[0].brand}</span></p>
                        <p className="font-Young text-xl">Price: <span className="font-sans">{products[0].price}</span></p>
                        <p className="font-Young text-xl">Ratings: <span className="font-sans">{products[0].rating}</span></p>
                    </div>
                    <button onClick={handleAddToCart} className="btn">Add to cart</button>
                </div>
            </div>
            <div className="text-center mt-20">
                <h1 className="font-Young text-4xl font-bold">{products[0].name}</h1>
                <p className="text-center">{products[0].description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;