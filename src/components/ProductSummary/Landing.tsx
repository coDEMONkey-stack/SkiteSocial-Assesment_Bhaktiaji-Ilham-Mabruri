    "use client";
    import React, { useState, useRef, useLayoutEffect } from "react";
    import { gsap } from "gsap-trial";
    import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
    import Link from "next/link";
    import "@/components/common/Transition/Transition.module.css"

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/effect-coverflow';
    import "../../css/style.css";
    gsap.registerPlugin(ScrollTrigger);


    const ProductSummary: React.FC = () => {
        const [quantity, setQuantity] = useState(0);
        const title = "T-Shirt";
        const price = "$6.00";
        const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit diam, lobortis at auctor eu, tempus eget enim. Etiam ullamcorper risus ac diam pulvinar, a auctor nunc sagittis.";
        const category = "Dry Clean";

        const handleIncrement = () => setQuantity(quantity + 1);
        const handleDecrement = () => {
            if (quantity > 0) setQuantity(quantity - 1);
        };

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
                {/* Back Button */}
                <div className="sm:mt-1 z-10">
                    <li title="Back" className="top-0 z-99999 sticky sm:relative">
                        <Link
                            href="/"
                            className="relative mb-12 flex h-12 w-12 sm:h-17 sm:w-17 items-center justify-center rounded-none border-b-[#F36868] bg-[#fcd7d7]"
                        >
                            <svg
                                width="30"
                                height="30"
                                fill="none"
                                viewBox="0 0 19 31" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    d="M0.374756 15.5L15.1493 30.2746L18.6254 26.7985L7.31709 15.4902L18.6254 4.18182L15.1493 0.725403L0.374756 15.5Z" 
                                    fill="#2D9CDB"
                                />
                            </svg>
                        </Link>
                    </li>
                </div>

                {/* Item product image */}
                <div className="relative w-[672px] left-1/2 -translate-x-1/2 -top-40 sm:-top-45 -mb-60">
                    <div className="relative sm:h-[770px] h-[465px] sm:w-auto w-[390px] rounded-b-3xl mb-32 overflow-hidden shadow-lg">
                        <img 
                            src="/images/products/img-product4.png" 
                            className="sm:h-max h-[485px] object-fill"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-60"></div>
                    </div>
                </div>

                {/* Item description */}
                <div className="relative w-full sm:w-auto pr-70 sm:pr-0">
                    <span className="bg-[#CAECFF] text-[#0099EE] text-sm font-normal px-4 py-2 rounded-md">
                        {category}
                    </span>
                    <h2 className="mt-8 sm:text-4xl text-3xl font-bold text-[#3B97CB]">{title}</h2>
                    <p className="sm:text-2xl text-lg font-semibold text-[#0099EE]">{price}/pc</p>
                    <p className="text-gray-500 sm:text-xl text-base mt-2">{description}</p>
                    
                    <div className="flex items-center justify-center mt-18 mb-6 sm:gap-12 gap-7 space-x-4">
                        <button
                            onClick={handleDecrement}
                            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-md bg-[#fecaca] text-red-500 hover:bg-[#fee2e2]"
                        >
                        <span className="text-2xl sm:text-5xl font-bold">-</span>
                        </button>
                        <span className="text-xl sm:text-3xl font-semibold text-gray-700 bg-white border-2 border-[#3B97CB] rounded-lg px-12 py-2">{quantity}</span>
                        <button
                            onClick={handleIncrement}
                            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-md bg-blue-100 text-blue-500 hover:bg-blue-200"
                        >
                        <span className="text-2xl sm:text-5xl font-bold">+</span>
                        </button>
                    </div>
                </div>
            </>
        );
    };


    export default ProductSummary;
