import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useLoaderData, useParams } from 'react-router-dom';

const BrandAd = () => {
    const { name } = useParams();
    const brands = useLoaderData();
    // console.log(brands);
    const lowerName = name.toLowerCase();
    // console.log(lowerName);
    fetch("/Brands.json")
        .then(res => res.json())
        .then(data => console.log(data))

    const thisBrand = brands.filter(br => br.name == lowerName);
    console.log("This brand ", thisBrand);
    const { 0: obj } = thisBrand;
    const { image1, image2, image3 } = obj;
    console.log(image1);
    return (
        <div className='z-[2]'>
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
                    <SwiperSlide><div className="max-w-7xl mx-auto hero min-h-screen md:min-h-[500px]" style={{ backgroundImage: `url(${image1})` }}>
                    </div></SwiperSlide>
                    
                    <SwiperSlide><div className="max-w-7xl mx-auto hero min-h-screen md:min-h-[500px]" style={{ backgroundImage: `url(${image2})` }}>
                    </div></SwiperSlide>

                    <SwiperSlide><div className="max-w-7xl mx-auto hero min-h-screen md:min-h-[500px]" style={{ backgroundImage: `url(${image3})` }}>
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default BrandAd;