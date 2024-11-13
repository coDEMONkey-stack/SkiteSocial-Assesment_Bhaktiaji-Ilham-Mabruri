import React from 'react';

interface ServiceCardProps {
  condition: number;
  category?: string;
  title: string;
  price: number;
  unit?: string;
  amount?:string;
  className?: string;
  height?: string;
  width?: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
    condition, 
    category, 
    title, 
    price, 
    amount,
    unit, 
    height, 
    width, 
    image, 
    className 
}) => {
  return (
    <div
        className={`rounded-lg mb-12 overflow-hidden shadow-lg bg-white relative ${className}`}
        style={{ height, width }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-fit h-max relative object-none"
        />
    
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0099EE] to-transparent">
            {condition === 1 ? (
            <>
                <p className="flex items-center space-x-1 -mb-2 sm:mb-0">
                <span className="text-[#F36868] sm:text-5xl text-3xl">&#x2022;</span>
                <span className="text-white text-xs sm:text-xl font-light">{category}</span>
                </p>
                <h2 className="text-white sm:mb-2 mb-1 sm:text-5xl text-2xl font-semibold">{title}</h2>
                <p className="text-white sm:text-3xl text-lg">${price.toFixed(2)}/{unit}</p>
            </>
            ) : (
            <>
                <h2 className="text-white sm:mb-2 mb-1 sm:text-5xl text-2xl font-semibold">{title}</h2>
                <p className="text-white sm:text-3xl text-lg">{amount} | total of ${price.toFixed(2)}</p>
            </>
            )}
        </div>
    </div>
  );
};

export default ServiceCard;
