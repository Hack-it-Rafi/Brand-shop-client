import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useLoaderData, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const BrandAd = () => {
    const [loadedProducts, setProducts] = useState([1]);

    const { name } = useParams();
    const lowerName = name.toLowerCase();
    const brands = useLoaderData();
    // console.log(brands);
    fetch("/Brands.json")
        .then(res => res.json())
        .then(data => console.log(data))

    const thisBrand = brands.filter(br => br.name == lowerName);
    const { 0: obj } = thisBrand;
    const { image1, image2, image3 } = obj;

    useEffect(()=>{
        fetch("https://brand-shop-server-rho-seven.vercel.app/products")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProducts(data);          
        })
    },[])
        // console.log(loadedProducts[0].brand);
    const products = loadedProducts.filter(product=>product.brand?.toLowerCase()==lowerName)

    // console.log(products);
    return (
        <div className=''>
            <div className='h-28'>

            </div>
            <div className="max-w-7xl mx-auto">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className="max-w-7xl mx-auto hero min-h-screen md:min-h-[700px]" style={{ backgroundImage: `url(${image1})` }}>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="max-w-7xl mx-auto hero min-h-screen md:min-h-[700px]" style={{ backgroundImage: `url(${image2})` }}>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="max-w-7xl mx-auto hero min-h-screen md:min-h-[700px]" style={{ backgroundImage: `url(${image3})` }}>
                    </div></SwiperSlide>
                </Swiper>
            </div>
            <div className='text-center my-10'>
                <h1 className='text-5xl font-Young'>Products</h1>
            </div>
            <div>
                <div className="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        products.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandAd;

