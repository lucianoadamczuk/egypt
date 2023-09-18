import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { Slide_carousel_3D } from '../../../UI';

export const Carousel_3D = ({dataToShow, backgroundImage, title, text}) => {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={1.2}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 80,
                    modifier: 5,
                    slideShadows: true,
                }}
                navigation={true}
                modules={[EffectCoverflow, Navigation]}
                className="carousel_3D"
            >

                {
                    dataToShow.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Slide_carousel_3D
                                backgroundImage={item?.backgroundImage}
                                title={item?.title}
                                text={item?.text}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );

}