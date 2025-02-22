'use client'
import { useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Scrollbar, Mousewheel, Pagination } from 'swiper/modules';
import Icon from '../Icon';
import Image from 'next/image';

import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import 'swiper/scss/scrollbar';
import 'swiper/scss/pagination';

const images = [
    "/promo-1.webp",
    "/promo-2.webp",
    "/banner-1.webp",
    "/promo-2.webp",
    "/promo-1.webp"
]

export default function ProductImages() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    
    return (
        <div className="product-page__images">
            <Swiper
                style={{
                    marginLeft: 0,
                    marginRight: 0,
                }}
                spaceBetween={10}
                navigation={{
                    nextEl: ".product-gallery2__btn--next",
                    prevEl: ".product-gallery2__btn--prev",
                    disabledClass: "product-gallery2__btn-disabled"
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-gallery2"
            >
                <div className="product-gallery2__btn--prev product-gallery2__btn">
                    <Icon id='arrow-2' width={24} height={24} />
                </div>
                {images && images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image src={image} height={448} width={448} alt={String(index)} quality={100} />
                    </SwiperSlide>
                ))}

                <div className='product-gallery2__btn--next product-gallery2__btn'>
                    <Icon id='arrow-2' width={24} height={24} />
                </div>
            </Swiper>
            <Swiper
                style={{
                    marginLeft: 0,
                    marginRight: 0,
                    paddingLeft: 14,
                }}
                onSwiper={setThumbsSwiper}
                spaceBetween={16}
                slidesPerView={4}
                freeMode={true}
                modules={[FreeMode, Navigation, Thumbs, Scrollbar, Mousewheel, Pagination]}
                direction='vertical'
                className="product-gallery"
                // scrollbar={{
                //     draggable: true,
                //     dragClass: 'product-gallery__swiper-scrollbar-drag',
                //     dragSize: "auto",
                //     hide: false,
                //     el: '.product-gallery__swiper-scrollbar',
                // }}
                pagination={{
                    el: ".slider-pagination",
                    bulletClass: "slider-pagination__bullet",
                    bulletActiveClass: "slider-pagination__bullet--active",
                    clickable: true,
                }}

                mousewheel={true}
            >
                {images && images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image src={image} height={100} width={100} alt={String(index)} quality={100} />
                    </SwiperSlide>
                ))}
                {/* <div className="product-gallery__swiper-scrollbar">
                    <div className='product-gallery__swiper-scrollbar-drag'></div>
                </div> */}
                <div className="slider-pagination product-gallery__pagination">
                    <span className="slider-pagination__bullet product-gallery__pagination-bullet"></span>
                </div>
            </Swiper>
        </div>
    );
}