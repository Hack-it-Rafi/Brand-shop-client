import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateProduct = () => {
    const id = useParams();
    const navigate = useNavigate();
    // const product = useLoaderData();
    console.log(id.id);
    const loadedProducts = useLoaderData();
    const loadedProduct = loadedProducts.filter(product => product._id == id.id);
    console.log(loadedProduct);

    // console.log(`https://brand-shop-server-rho-seven.vercel.app/products/${id.id}`);
    const handleUpdateProduct=event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const product = {name, image, brand, type, price, rating};
        // console.log(product);
        
        fetch(`https://brand-shop-server-rho-seven.vercel.app/products/${id.id}`,{
            method: "PATCH",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Update Successful!',
                    text: 'Enjoy Exploring!',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                });
                form.reset();
                navigate(-1);
            }
        })
        .catch(error=>console.error(error))
    }
    return (
        <div>
            <div className="bg-slate-100 rounded-lg">
                <div className="text-center py-20">
                    <h2 className="font-Young text-4xl">Update Product</h2>
                    <p></p>
                </div>
                <div>
                    <form onSubmit={handleUpdateProduct} className="px-5 md:px-20 pb-20">
                        <div className="flex gap-4 md:gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product name</span>
                                </label>
                                <input type="text" required defaultValue={loadedProduct[0].name} placeholder="Type here" name="name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" required defaultValue={loadedProduct[0].image} placeholder="Type here" name="image" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="flex gap-4 md:gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" required defaultValue={loadedProduct[0].brand} placeholder="Type here" name="brand" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <input type="text" required defaultValue={loadedProduct[0].type} placeholder="Type here" name="type" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="flex gap-4 md:gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" required defaultValue={loadedProduct[0].price} placeholder="Type here" name="price" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" required defaultValue={loadedProduct[0].rating} placeholder="Type here" name="rating" className="input input-bordered w-full" />
                            </div>
                        </div>
                        
                        {/* Submit */}
                        <div className="form-control mt-6">
                            <button className="btn bg-[#2B3440] text-white hover:bg-slate-800">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;