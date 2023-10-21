import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    console.log(product);
    const navigate = useNavigate();

    const handleProductDetail = () => {
        navigate(`/productDetails/${product._id}`)
    }
    const handleProductUpdate = () => {
        navigate(`/updateProduct/${product._id}`)
    }
    const { name, image, brand, price, rating, type } = product;
    return (
        <div className="flex flex-wrap">
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-[150px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{brand}</p>
                    <p>{type}</p>
                    <div className="flex gap-28">
                    <p><span className="font-bold">Ratings:</span> {rating}</p>
                    <p><span className="font-bold">Price:</span> {price}</p>
                    </div>
                    <div className="flex gap-40">
                        <div className="card-actions">
                            <button onClick={handleProductDetail} className="btn btn-primary">Details</button>
                        </div>
                        <div className="card-actions">
                            <button onClick={handleProductUpdate} className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;