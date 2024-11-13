"use client";
import React from "react";

const BalanceCard: React.FC = () => {
  return (
    <div className="z-0 relative w-75 h-40 sm:w-150 sm:h-50 bg-[#FCFEFF] rounded-lg shadow-lg p-5 overflow-hidden flex flex-col justify-end">
      {/* Background circles */}
      <div className="absolute top-[-65px] sm:top-[-30px] left-[-45px] sm:left-[-20px] sm:w-35 sm:h-35 w-35 h-35 bg-[#0099EE] rounded-full"></div>
      <div className="absolute top-5 left-27 sm:left-34 w-7 h-7 sm:w-10 sm:h-10 bg-[#F36868] rounded-full"></div>

      {/* Text content */}
      <div className="relative z-10 text-right">
        <p className="m-0 text-lg sm:text-2xl text-gray-500">Your Balance</p>
        <p className="m-0 text-4xl sm:text-5xl font-bold text-blue-500">$ 200.00</p>
      </div>
    </div>
  );
};

export default BalanceCard;
