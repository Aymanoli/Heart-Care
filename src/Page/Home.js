import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import BannerBG from '../components/BannerStyled';
import Banner from '../components/Banner';
import Service from '../components/Service';
import Doctor from '../components/Doctor';
import Testimonila from '../components/Testimonila';

// Import Swiper styles
import "swiper/swiper-bundle.css";

const Home = () => {
    return (
        <div>
            <Swiper slidesPerView={1} spaceBetween={0} loop={true} pagination={{
                "clickable": true
            }} navigation={false}>
                <SwiperSlide>
                    <BannerBG img="/assets/img/banner/banner-1.png">
                        <Banner
                            greeting="Welcome to Heart Care"
                            title="Caring for all your"
                            title2nd="family's heart needs"
                            img="/assets/img/banner/banner-item-1.jpg"
                        />
                    </BannerBG>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBG img="/assets/img/banner/banner-1.png">
                        <Banner
                            greeting="Welcome to Heart Care"
                            title="A healthy smile"
                            title2nd="begins with a child."
                            img="/assets/img/banner/banner-item-2.png"
                        />
                    </BannerBG>
                </SwiperSlide>
            </Swiper>
            <Service />
            <Doctor />
            <Testimonila />
        </div>
    );
};

export default Home;