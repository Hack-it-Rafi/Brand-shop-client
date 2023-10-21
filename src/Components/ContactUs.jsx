const ContactUs = () => {
    return (
        <div>
            <div className="bg-slate-100 rounded-lg ">
                <div className="text-center pt-20">
                    <h2 className="font-Young text-4xl">Contact Us</h2>
                    <p></p>
                </div>
                <div>
                    <form className="px-5 md:px-20 pb-20">
                        <div className="flex gap-4 md:gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" required placeholder="Type here" name="name" className="input input-bordered w-full" />
                            </div>
                            
                        </div>
                        <div className="flex gap-4 md:gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required  placeholder="Type here" name="brand" className="input input-bordered w-full" />
                            </div>
                            
                        </div>
                        
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-24" placeholder="Type here" required name="description"></textarea>
                            </div>
                        
                        {/* Submit */}
                        <div className="form-control mt-6">
                            <button className="btn bg-[#2B3440] text-white hover:bg-slate-800">Send Response</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;