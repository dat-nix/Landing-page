import React from "react";
import content from "../configs/content";

const FacebookPosts = ({ language }) => {
    // Get the language-specific data
    const langData = content[language]?.FacebookPosts || content["en"].FacebookPosts;

    // Define the posts array inside the function scope
    const posts = [
        {
            id: 1,
            image: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/484493708_122222037644231453_7745967718245207548_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGPi7SeqtD6BT6hNsnNQDrH-SSjeADYoGv5JKN4ANigaxSGVCdQUcTrr3qLjDynW5EXiweYNdvEkMuecIcmPSFP&_nc_ohc=rrTrcV0idAsQ7kNvgGu7S3i&_nc_oc=Adlp1IglzPRYgQnxS0OT3uIqzLsp5dTQgeK-RoZ18nQXVUtyBpEQd1mOt2g3_TzvUXE&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=yzNjIcU4Wlg5B9mecz6UVQ&oh=00_AYHZU2uKjq718sMdeO3l1U4BGFcV8FzljG8uWhatRaMRHA&oe=67E01051",
            title: "𝗥𝗠𝗜𝗧 𝗜𝗖𝗛𝗜𝗚𝗘𝗞𝗜 𝗞𝗘𝗡𝗗𝗢 𝗧𝗢𝗨𝗥𝗡𝗔𝗠𝗘𝗡𝗧 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗖𝗢𝗠𝗜𝗡𝗚 𝗧𝗛𝗜𝗦 𝗘𝗔𝗥𝗟𝗬 𝗦𝗨𝗠𝗠𝗘𝗥!!!",
            link: "https://www.facebook.com/share/p/1F8fozCFCE/",
        },
        {
            id: 2,
            image: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/484855894_122222059106231453_5295698330602605006_n.png?stp=dst-png_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFxPQcyPZXvCdtUFX8fgnbPfwGbkhbWadt_AZuSFtZp27GiCv48K31uRxtxUFTc8KKRQELHxNyJS6tNqAQY1Cuk&_nc_ohc=im3fk1sLwyoQ7kNvgGsY8JH&_nc_oc=Adl4rBYsHmZnlAxxcV98H2zWvzr2V7ppVg5DnEhppOyIizIoyaM1sC3I6Arp8O-z2Qk&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=yzNjIcU4Wlg5B9mecz6UVQ&oh=00_AYFiNi3yrGGLCjM4AfMMj4NZGpnFXHNwIKFv8a2Y3JNb1g&oe=67E005E1",
            title: "RMIT Ichigeki Kendo Tournament 2025",
            link: "https://www.facebook.com/share/19GHVvrWN6/",
        },
        {
            id: 3,
            image: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/484351821_122222231138231453_8944675172116293370_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFiE68WrIaIjQZSLGaG3UjMb6cZM9ad-ptvpxkz1p36m5owJ6FMKoaDCjBQAuYEKEK4FaCyv_TReM2XnHO79TeM&_nc_ohc=MikQc5kTFBEQ7kNvgEiblHC&_nc_oc=AdkXYzXQ2F595hF2oA6LZ5J5RH4-9BkBiRxVWWUZdB60-VhqP6SxNFQbUnHmGjJXExo&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=MuvTxQgnZUHa3okACFfUfw&oh=00_AYEy1MKCkm5GoGbhFdVFQLYKIKVFbxi_suc3Fi_zwhjB9A&oe=67E01C06",
            title: "🔥A New Chapter Begins🔥",
            link: "https://www.facebook.com/share/18T8dJyshi/",
        },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="max-w-7.2xl mx-auto">
                <h2 className="text-center text-xl font-bold text-white bg-[#6f6f6f] py-3 rounded-lg mb-6 mx-auto w-3/4">
                  { langData.title}
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {posts.map((post) => (
                        <a
                            key={post.id}
                            href={post.link}
                            className="block w-120 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <div className="h-80 bg-yellow-400 flex items-center justify-center">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover"/>
                            </div>
                            <div className="p-3 text-black font-semibold text-center">
                                {post.title}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacebookPosts;
