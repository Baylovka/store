'use client'
import { useEffect, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Mousewheel, Pagination } from 'swiper/modules';
import Icon from '../Icon';
import Image from 'next/image';

import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
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
    const [isTablet, setIsTablet] = useState<boolean>(false);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsTablet(true);
        }
    }, []);

    const swiperParams = {
        style: {
            marginLeft: 0,
            marginRight: 0,
        },
        spaceBetween: 10,
        navigation: {
            nextEl: ".product-gallery2__btn--next",
            prevEl: ".product-gallery2__btn--prev",
            disabledClass: "product-gallery2__btn-disabled"
        },
        thumbs: { swiper: thumbsSwiper },
        modules: [FreeMode, Navigation, Thumbs, Pagination],
        pagination: {
            el: ".product-gallery2__pagination",
            bulletClass: "slider-pagination__bullet",
            bulletActiveClass: "slider-pagination__bullet--active",
            clickable: true,
        },
        className: "product-gallery2",
    }

    const swiperParams2 = {
        style: {
            marginLeft: 0,
            marginRight: 0,
        },
        onSwiper: setThumbsSwiper,
        spaceBetween: 16,
        slidesPerView: 4,
        freeMode: true,
        modules: [FreeMode, Navigation, Thumbs, Mousewheel, Pagination],
        direction: 'horizontal' as const,
        className: "product-gallery",
        pagination: {
            el: ".slider-pagination",
            bulletClass: "slider-pagination__bullet",
            bulletActiveClass: "slider-pagination__bullet--active",
            clickable: true,
        },
        mousewheel: true,
        breakpoints: {
            1024: {
                direction: 'vertical' as const,
            }
        },
    }

    return (
        <div className="product-page__images">
            <Swiper {...swiperParams}>
                <div className="product-gallery2__btn--prev product-gallery2__btn">
                    <Icon id='arrow-2' width={24} height={24} />
                </div>
                {images && images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image src={image} height={434} width={434} alt={String(index)} quality={100} />
                    </SwiperSlide>
                ))}
                <div className='product-gallery2__btn--next product-gallery2__btn'>
                    <Icon id='arrow-2' width={24} height={24} />
                </div>

                <div className="slider-pagination product-gallery2__pagination">
                    <span className="slider-pagination__bullet product-gallery2__pagination-bullet"></span>
                </div>
            </Swiper>

            {!isTablet &&
                <Swiper {...swiperParams2}>
                    {images && images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image src={image} height={96.5} width={96.5} alt={String(index)} quality={100} />
                        </SwiperSlide>
                    ))}
                    <div className="slider-pagination product-gallery__pagination">
                        <span className="slider-pagination__bullet product-gallery__pagination-bullet"></span>
                    </div>
                </Swiper>
            }
        </div>
    );
}