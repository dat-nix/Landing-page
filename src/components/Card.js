"use client";

import Image from "next/image";

const Card = ({ image, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-[80vw] h-auto md:h-[500px] bg-black overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 rounded-2xl">
      {/* Left Image Section */}
      <div className="w-full md:w-[60%] h-[250px] md:h-auto relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
        />
        
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-black/10"></div>
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-[40%] flex flex-col justify-center p-6 md:p-10 bg-black text-white">
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{title}</h2>
        <p className="text-sm md:text-lg opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default Card;
