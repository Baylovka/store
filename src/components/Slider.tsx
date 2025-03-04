'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProductsCard from './ProductSection/ProductsCard';

import 'swiper/scss';
import 'swiper/scss/pagination';

const products = [
    {
        image: {
            src: "/promo-2.webp",
            width: 574,
            height: 574,
        },
        title: "Barberton Daisy",
        price: {
            standart: 229.00,
        },
    },
    {
        image: {
            src: "/banner-2.webp",
            width: 574,
            height: 574,
        },
        title: "Barberton Daisy",
        price: {
            standart: 119.00,
        },
    },
    {
        image: {
            src: "/promo-1.webp",
            width: 574,
            height: 574,
        },
        title: "Barberton Daisy",
        price: {
            standart: 119.00,
        },
    },
    {
        image: {
            src: "/banner-1.webp",
            width: 574,
            height: 574,
        },
        title: "Barberton Daisy",
        price: {
            standart: 119.00,
        },
    },
    {
        image: {
            src: "/promo-2.webp",
            width: 574,
            height: 574,
        },
        title: "Barberton Daisy",
        price: {
            standart: 119.00,
        },
    },
    {
        image: {
            src: "/promo-1.webp",
            width: 574,
            height: 574,
        },
        title: "Barberton Daisy",
        price: {
            standart: 119.00,
        },
    },
    {
        image: {
            src: "/promo-2.webp",
            width: 574,
            height: 574,
        },
        title: "Barberton Daisy",
        price: {
            standart: 119.00,
        },
    },
]

const sliderParams = {
    spaceBetween: 18,
    slidesPerView: 2,
    modules: [Pagination],
    className: "slider",
    pagination: {
        el: ".slider-pagination",
        bulletClass: "slider-pagination__bullet",
        bulletActiveClass: "slider-pagination__bullet--active",
        clickable: true,
    },
    breakpoints: {
        560: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 26,
        },
    },
}

export default function Slider() {
    return (
        <Swiper {...sliderParams}>
            {products && products.map((product, index) => (
                <SwiperSlide key={index}>
                    <ProductsCard
                        image={{ src: product.image.src, width: product.image.width, height: product.image.height }}
                        title={product.title}
                        price={product.price}
                    />
                </SwiperSlide>
            ))}

            <div className="slider-pagination slider__pagination">
                <span className="slider-pagination__bullet slider__bullet"></span>
            </div>
        </Swiper>
    );
}