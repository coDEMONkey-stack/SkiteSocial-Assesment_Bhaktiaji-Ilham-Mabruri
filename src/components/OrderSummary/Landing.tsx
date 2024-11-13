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

interface OrderItem {
    name: string;
    quantity: number;
    price: number;
}

const orderItems: OrderItem[] = [
    { name: 'Bag of Laundry', quantity: 2, price: 180 },
    { name: 'Dry Cleaning', quantity: 3, price: 10 },
    { name: 'Rug', quantity: 1, price: 14 },
];
  

const OrderSummary: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null); 
    const totalOrder = orderItems.reduce((acc, item) => acc + item.price, 0);

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
        <div className="sm:mt-1 z-99999 sm:z-9">
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

        {/* Summary Section */}
        <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-[#0099EE] text-white text-center py-4">
                <h2 className="text-xl font-bold">ORDER SUMMARY</h2>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h3 className="font-bold text-gray-900">John Doe</h3>
                        <p className="text-gray-600">123 Pasir Ris, <br/> 13810, Singapore</p>
                    </div>
                    <p className="text-[#0099EE] font-normal mb-12">ORDER #21340</p>
                </div>
                <table className="w-full mb-4">
                <tbody>
                    {orderItems.map((item, index) => (
                    <tr key={index} className="border-b">
                        <td className="flex items-center py-2">
                            <img
                                src="/images/products/img-baglaundry.png"
                                alt={item.name}
                                className="w-12 h-12 mr-4"
                            />
                            <div>
                                <p className="font-semibold text-gray-700">{item.name}</p>
                                <p className="font-light text-[#3B97CB]">Qty: {item.quantity}</p>
                            </div>
                        </td>
                        <td className="text-right text-[#0099EE] font-semibold">
                            <p className="font-normal text-[#535353]">Total</p>
                            <div>${item.price.toFixed(2)}</div>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            <div className="bg-[#0099EE] text-white p-4 flex justify-between">
                <span className="font-bold">TOTAL ORDER</span>
                <span className="font-bold">${totalOrder.toFixed(2)}</span>
            </div>
        </div>

        {/* WA Button */}
        <div className="mt-12 mb-20 items-center text-center justify-center px-4 py-3 w-full max-w-md mx-auto bg-[#56E4A0] rounded-2xl cursor-pointer">
            <Link href="https://wa.me/+6282221122318" title="Contact Us" target="_blank" className="flex gap-3 items-center justify-center">
                <svg 
                    width="30"
                    height="30"
                    viewBox="0 0 30 30" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        d="M20.6667 0.833344C22.2315 0.833344 23.5 2.10187 23.5 3.66668L3.66668 3.66667L3.66668 19.5C2.10187 19.5 0.833344 18.2315 0.833344 16.6667V3.66667C0.833344 2.10187 2.10187 0.833344 3.66668 0.833344H20.6667Z" 
                        fill="white"
                    />
                    <path 
                        d="M17.8333 29.1667L14.0556 25.1667H9.33334C7.76854 25.1667 6.50001 23.8981 6.50001 22.3333V9.33334C6.50001 7.76853 7.76854 6.50001 9.33334 6.50001H26.3333C27.8981 6.50001 29.1667 7.76854 29.1667 9.33334V22.3333C29.1667 23.8982 27.8981 25.1667 26.3333 25.1667H21.6111L17.8333 29.1667ZM20.3898 22.3333L26.3333 22.3333V9.33334L9.33334 9.33334V22.3333H15.2769L17.8333 25.0402L20.3898 22.3333Z" 
                        fill="white"
                    />
                </svg>
                <span className="text-white font-bold sm:text-xl text-lg">Whatsapp us</span>
            </Link>
        </div>


    </>
  );
};


export default OrderSummary;
