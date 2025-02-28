"use client";

import Image from "next/image";

const Card = ({ image, title, description }) => {
  return (
    <div className="flex w-full md:w-[80vw] h-[450px] bg-gradient-to-l from-black to-gray-900 overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 rounded-2xl">
      {/* Left Image Section */}
      <div className="w-[60%] relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-l-2xl"
        />
        
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/20 to-transparent"></div>
      </div>

      {/* right text section */}
      <div className="w-1/2 flex flex-col justify-center p-10 text-white">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default Card;