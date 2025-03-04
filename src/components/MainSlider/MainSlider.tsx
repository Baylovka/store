'use client'

import { useRef } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/scss';
import MainSlide from './MainSlide';

export default function MainSlider() {
    const progressCircle = useRef<SVGSVGElement | null>(null);
    const progressContent = useRef<HTMLSpanElement | null>(null);
    const onAutoplayTimeLeft = (s: SwiperClass, time: number, progress: number) => {
        progressCircle.current?.style.setProperty('--progress', String(1 - progress));
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };
    return (
        <Swiper
            speed={900}
            spaceBetween={60}
            loop={true}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            pagination={{
                el: ".slider-pagination",
                bulletClass: "slider-pagination__bullet",
                bulletActiveClass: "slider-pagination__bullet--active",
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="main-slider"
        >
            <SwiperSlide className='main-slider__slide'>
                <MainSlide
                    subtitle="Welcome to GreenShop"
                    title="Let’s Make a Better"
                    titleBrand="Planet"
                    description="We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!"
                    buttonText="Shop Now"
                    imageUrl="/banner-1.webp"
                />
            </SwiperSlide>
            <SwiperSlide className='main-slider__slide'>
                <MainSlide
                    subtitle="Welcome to GreenShop"
                    title="Let’s Make a Better"
                    titleBrand="Planet"
                    description="We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!"
                    buttonText="Shop Now"
                    imageUrl="/banner-2.webp"
                />
            </SwiperSlide>
            <SwiperSlide className='main-slider__slide'>
                <MainSlide
                    subtitle="Welcome to GreenShop"
                    title="Let’s Make a Better"
                    titleBrand="Planet"
                    description="We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!"
                    buttonText="Shop Now"
                    imageUrl="/banner-3.png"
                />
            </SwiperSlide>

            <div className="main-slider__progress-container" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>

            <div className="slider-pagination">
                <span className="slider-pagination__bullet"></span>
            </div>
        </Swiper>
    );
}