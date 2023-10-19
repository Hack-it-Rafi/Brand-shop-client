const AddProduct = () => {
    //http://localhost:5000/products
    const handleAddProduct=event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const product = {name, image, brand, type, price, rating, description};
        console.log(product);

        fetch('http://localhost:5000/products',{
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(product),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert("Product added successfully");
                form.reset();
            }
        })
    }
    return (
        <div>
            <div className="bg-slate-100 rounded-lg">
                <div className="text-center py-20">
                    <h2 className="font-Young text-4xl">Add New Product</h2>
                    <p></p>
                </div>
                <div>
                    <form onSubmit={handleAddProduct} className="px-5 md:px-20 pb-20">
                        <div className="flex gap-4 md:gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product name</span>
                                </label>
                                <input type="text" required placeholder="Type here" name="name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" required placeholder="Type here" name="image" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="flex gap-4 md:gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" required placeholder="Type here" name="brand" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <input type="text" required placeholder="Type here" name="type" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="flex gap-4 md:gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" required placeholder="Type here" name="price" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" required placeholder="Type here" name="rating" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-24" placeholder="Type here" required name="description"></textarea>

                            </div>
                        </div>
                        {/* Submit */}
                        <div className="form-control mt-6">
                            <button className="btn bg-[#2B3440] text-white hover:bg-slate-800">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;