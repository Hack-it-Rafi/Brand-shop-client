import { useState } from "react";
import Swal from 'sweetalert2'

const CartProductCard = ({ product }) => {
    const { _id, name, image, brand, price, rating } = product;
    // console.log(product);
    const [state, setState] = useState(true);
    const handleDeleteProduct = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-rho-seven.vercel.app/myCart/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(() => {
                        // if (data.deletedCount > 0) {
                        //     Swal.fire({
                        //         title: 'Product Deleted!',
                        //         text: 'Enjoy Exploring!',
                        //         icon: 'success',
                        //         confirmButtonText: 'Continue'
                        //     });
                        // }
                        setState(false);
                    })
                    .catch(error => console.error(error))
            }
        })


    }
    console.log(state);

    return (
        <div>
            {state &&
                <div className="w-full h-36 bg-slate-100 rounded-lg flex justify-center items-center">
                    <div className="flex justify-around items-center w-full">
                        <img className="w-[80px]" src={image} alt="hero" />
                        <div>
                            <div className="mb-5">
                                <p className="font-Young text-base">Name: <span className="font-sans">{name}</span></p>
                                <p className="font-Young text-base">Brand: <span className="font-sans">{brand}</span></p>
                                <p className="font-Young text-base">Price: <span className="font-sans">{price}</span></p>
                                <p className="font-Young text-base">Ratings: <span className="font-sans">{rating}</span></p>
                            </div>
                        </div>
                        <div>
                            <button onClick={handleDeleteProduct} className="btn bg-[#2B3440] text-white hover:border-cyan-800 hover:text-[#2B3440]">X</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default CartProductCard;