import React from "react";
import content from "../configs/content";

const FacebookPosts = ({ language }) => {
    const langData = content[language]?.FacebookPosts || content["en"].FacebookPosts;

    const posts = [
        { 
            id: 1, 
            image: "https://via.placeholder.com/300", 
            title: "RMIT Ichigeki Kendo Tournament 2025", 
            link: "https://facebook.com/post1" 
        },
        { 
            id: 2, 
            image: "https://via.placeholder.com/300", 
            title: "🔥A New Chapter Begins🔥", 
            link: "https://facebook.com/post2" 
        },
        { 
            id: 3, 
            image: "https://via.placeholder.com/300", 
            title: "Upcoming Matches & Highlights", 
            link: "https://facebook.com/post3" 
        },
    ];

    return (
        <section className="w-[1600px] h-[800px] bg-gray-300 relative flex flex-col items-center pt-[100px]">
            {/* UPDATES Header */}
            <div className="absolute top-0 right-30 w-full flex justify-end pr-5">
                <h2 className="text-[190px] font-bold text-black leading-none">
                    UPDATES
                </h2>
            </div>

            {/* Posts Grid */}
            <div className="relative z-10 grid grid-cols-3 gap-16 mt-[200px]">
                {posts.map((post) => (
                    <a
                        key={post.id}
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 p-4 text-center w-[350px] h-[450px]"
                    >
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-[250px] object-cover"
                        />
                        <div className="mt-2 text-black font-semibold text-lg">
                            {post.title}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default FacebookPosts;