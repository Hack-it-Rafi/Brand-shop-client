import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
    console.log(product);
    const navigate= useNavigate();

    const handleProductDetail=()=>{
        navigate(`/productDetails/${product._id}`)
    }
    const {name, image} = product;
    return (
        <div className="flex flex-wrap">
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-[150px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button onClick={handleProductDetail} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;