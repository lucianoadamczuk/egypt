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
import { isMobile } from 'react-device-detect';

export const Carousel_3D = ({dataToShow, backgroundImage, title, text}) => {

    const activateCoverflow = isMobile ? false : "coverflow"
    const coverflowConfig = isMobile? {} : {
        rotate: 0,
        stretch: 0,
        depth: 80,
        modifier: 5,
        slideShadows: true,
    }

    return (
        <>
            <Swiper
                effect={activateCoverflow}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={1.2}
                spaceBetween={10}
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
                coverflowEffect={
                    coverflowConfig
                }
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