"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap-trial";
import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import Link from "next/link";
import "@/components/common/Transition/Transition.module.css"
import BalanceCard from "./BalanceCard";
import ServiceCard from "../common/ServiceCards";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import "../../css/style.css";
gsap.registerPlugin(SplitText, ScrollTrigger);

const HomeLanding: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null); 

    useLayoutEffect(() => {
        ScrollTrigger.refresh();
        gsap.fromTo(
          containerRef.current,
          { scale: 0.2, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
        );
      }, []);

  return (
    <>
        {/* BALANCE CARD */}
        <div className="flex justify-center items-center text-center sm:w-[797px] sm:h-[567px] h-[467px] w-[637px] absolute -top-10 sm:-top-21 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#F36868]">
            <div className="mt-[400px] sm:mt-[450px]">  
                <BalanceCard/> 
            </div>
        </div>

        {/* PREVIOUS ORDER */}
        <div className="mt-60 mb-3 sm:mb-6 flex text-left pt-6">
            <h1 className="split-text text-[#3B97CB] text-lg sm:text-2xl font-bold">PREVIOUS ORDER</h1>
        </div>
        
        <div className="flex relative overflow-hidden items-center justify-between w-full p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center">
                <img
                    src="/images/products/img-baglaundry.png"
                    alt="Bag of Laundry"
                    className="w-17 h-18 sm:w-28 sm:h-27 rounded-md object-cover mr-4"
                />

                <div>
                <p className="sm:text-2xl text-[14px] font-semibold text-gray-800">Bag of Laundry</p>
                <p className="sm:mt-4 mt-1 sm:text-xl text-[11px] text-gray-500">Total Order</p>
                <p className="sm:text-3xl text-base font-bold text-blue-500">$180.00</p>
                </div>
            </div>

            <div className="absolute right-0 sm:right-5 flex flex-col text-center items-center justify-center sm:w-30 sm:h-30 w-20 h-28 bg-gradient-to-br from-blue-099def-100 to-blue-099def-42 sm:rounded-lg cursor-pointer">
                <Link href="/ordersummary" title="View Order Summary" className="flex flex-col items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-white right-0 mb-1"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
                    </svg>
                    <span className="text-[10.45px] sm:text-base font-semibold text-white">INVOICE</span>
                </Link>
            </div>
        </div>

        {/* MOST ORDERED */}
        <div className="mt-12 mb-3 sm:mb-6 flex text-left pt-6">
            <h1 className="split-text text-[#3B97CB] text-lg sm:text-2xl font-bold">YOUR MOST ORDERED</h1>
        </div>
        <div>
            <Link href="/productsummary" title="View Item">
                <ServiceCard 
                    condition={2}
                    image="/images/products/img-product1.png" 
                    className="sm:h-[350px] sm:w-[602px] h-[220px] w-[302px]" 
                    title="Dry Cleaning" 
                    amount="12x"
                    price={10.00} 
                />
            </Link>
        </div>

        {/* LATEST PRODUCT */}
        <div className="mt-12 mb-3 sm:mb-6 flex text-left pt-6">
            <h1 className="split-text text-[#3B97CB] text-lg sm:text-2xl font-bold">OUR LATEST PRODUCT</h1>
        </div>

        <Swiper
            className="sm:w-auto w-65"
            effect={'coverflow'}
            modules={[Pagination, A11y, EffectCoverflow]}
            spaceBetween={20}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
            }}
            pagination={{
            clickable: true,
            renderBullet: (index, className) =>
                `<span class="${className} mt-12"></span>`,
            }}
            onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide className="justify-center" style={{width: 'auto'}}>
            <ServiceCard
                condition={1}
                image="/images/products/img-product2.png"
                className="sm:h-[420px] sm:w-[402px] h-[302px] w-[220px]"
                category="Dry Cleaning"
                title="Jeans"
                price={10.0}
                unit="pc"
            />
        </SwiperSlide>
        <SwiperSlide className="justify-center" style={{width: 'auto'}}>
            <ServiceCard
                condition={1}
                image="/images/products/img-product3.png"
                className="sm:h-[420px] sm:w-[402px] h-[302px] w-[220px]"
                category="Dry Cleaning"
                title="T-shirt"
                price={6.0}
                unit="pc"
            />
        </SwiperSlide>
        <SwiperSlide className="justify-center" style={{width: 'auto'}}>
            <ServiceCard
                condition={1}
                image="/images/products/img-product2.png"
                className="sm:h-[420px] sm:w-[402px] h-[302px] w-[220px]"
                category="Dry Cleaning"
                title="Ilham's Jeans"
                price={8.0}
                unit="pc"
            />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeLanding;
