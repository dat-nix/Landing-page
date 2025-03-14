const Card = ({ image, title, description }) => {
    return (
        <div className="flex flex-col md:flex-row w-full md:w-[60vw] h-auto md:h-[500px] bg-black overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 md:p-0">
            {/* Left Image Section */}
            <div className="w-full md:w-[60%] h-[350px] md:h-auto relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-black via-black/20 to-black/10"></div>
            </div>

            {/* Right Text Section */}
            <div className="w-full md:w-[50%] flex flex-col justify-center p-6 md:p-10 bg-black text-white">
                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                    {title}
                </h2>
                <p className="text-sm md:text-lg opacity-80">{description}</p>
            </div>
        </div>
    );
};

export default Card;
