import React from "react";
import content from "../configs/content";


const FacebookPosts = ({ language }) => {
    const langData = content[language]?.FacebookPosts || content["en"].FacebookPosts;
     

    const posts = [
        { 
            id: 1, 
            image: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/486554544_122224434584231453_7608000793104703063_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF9PkKyJOovh2vkMYYWIOyGeQTd2H5U8ml5BN3YflTyaReq4fb46IDGUtcH3Uc0nT_IHUXuiW1MUeq0gKLzu1Ty&_nc_ohc=ilESTC9Ab_kQ7kNvwHofpY_&_nc_oc=Adl1QAh5FR2ymnu_7frWizzwV1MYomypUS4J2LtfmtzJlXbJ017efm6oj5rE0v_YFsc3VGDaQys0mF2gHCHH0J7A&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=sFun0ixl_s-wx9t7IEBPNA&oh=00_AfH1n5IDUeTgNHtrPaKJdwv3PwdlQpXDg6bYi91mejVA-g&oe=67F7ADC8", 
            title: "🏅 𝗜𝗡𝗧𝗥𝗢𝗗𝗨𝗖𝗜𝗡𝗚 𝗥𝗠𝗜𝗧 𝗜𝗖𝗛𝗜𝗚𝗘𝗞𝗜 𝟮𝟬𝟮𝟱 𝗦𝗛𝗜𝗡𝗣𝗔𝗡𝗖𝗛𝗢 🏅", 
            link: "https://www.facebook.com/share/p/1YTKQnMGUQ/" 
        },
        { 
            id: 2, 
            image: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/485147247_122223650060231453_874071710195790293_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHEo0hBsnu0c9kL4Oo-TPNyolNSjv6Q7guiU1KO_pDuCzqNYHQk8SADI0Ved1zOuau0qig1sMlSPG-VmhsPLt5I&_nc_ohc=3airvd94TrQQ7kNvwEYKdrB&_nc_oc=AdlgZlMbDRRu0m3jEPn9LIDnDYdoo0Gt-syzA202krvlGhXvs8qJY2XJ0yddxD0pBZrBgw4-2uayohmJRYYsz6Fk&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=Fi7aFp0zuFzmd5noKVUV6g&oh=00_AfF8GNXUcbrmLW9upE_wnJb1NNtsfZjpJ9vVMHPTva7yiQ&oe=67F7CFD2", 
            title: "𝗥𝗠𝗜𝗧 𝗜𝗖𝗛𝗜𝗚𝗘𝗞𝗜 𝗞𝗘𝗡𝗗𝗢 𝗧𝗢𝗨𝗥𝗡𝗔𝗠𝗘𝗡𝗧 𝟮𝟬𝟮𝟱 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗧𝗜𝗢𝗡 𝗢𝗣𝗘𝗡!", 
            link: "https://www.facebook.com/share/p/18nfn4BWMz/" 
        },
        { 
            id: 3, 
            image: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/486971890_122224732346231453_1732213346958709189_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHM0YhaXs5T3py9R9iLYWQYTr1QuwV2qaNOvVC7BXapoy_pkBJdLgVYglNYlEc1B1L_n_Z9VKmOUPPe3JAk8Rxg&_nc_ohc=REy88aKOqcAQ7kNvwEhI4OR&_nc_oc=Adk3qSCiqueaXXcu5G59ghqauPHjEW-tXIZ_NsrYizRbZ41iMUR2QoGO3y6PI03itlARvmHGkkzwnJwMqYmq5ULZ&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=sFun0ixl_s-wx9t7IEBPNA&oh=00_AfE5JOykd7abe27bNH1Bkmotnd_TR76HXsTd8vWRjHEBpA&oe=67F7C8DE", 
            title: "𝗞𝗲𝗻𝗱𝗼 𝟭𝟬𝟭 𝗘𝗽𝗶𝘀𝗼𝗱𝗲 𝟭: 𝗪𝗵𝗮𝘁'𝘀 𝗞𝗲𝗻𝗱𝗼?", 
            link: "https://www.facebook.com/share/p/16Tjuxxfxn/" 
        },
    ];

    return (
        <section className="w-full min-h-[500px] sm:min-h-[700px] md:min-h-[800px] bg-blue-[185195] relative flex flex-col items-center pt-[50px] sm:pt-[80px] md:pt-[100px] block lg:hidden">
            {/* Follow Paragraph */}
            <div className="w-full text-center px-6 sm:px-8 mt-2 text-white text-base">
                Follow <br />
                <span className="font-semibold">RMIT SGS Shinsei Kendo Club</span> <br />
                on Facebook for more information
            </div>
    
            {/* UPDATES Header */}
            <div className="absolute top-0 right-3 w-full flex justify-end pr-5 mb-[1800px] sm:mb-[120px] md:mb-[200px] hidden sm:block">
                <h2 className="text-[40px] sm:text-[60px] md:text-[80px] font-bold text-black font-[Anton] tracking-[0.15em] leading-none">
                    {langData.title.split(' ').map((word, index) => (
                        <span key={index} className="block text-right w-full">
                            {word}
                        </span>
                    ))}
                </h2>
            </div>
    
            {/* Posts Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[100px] sm:mt-[140px] md:mt-[180px] px-6 sm:px-8">
                {posts.map((post) => (
                    <a
                        key={post.id}
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 p-3 text-center w-full max-w-[300px] sm:max-w-[320px] h-auto"
                    >
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-[150px] sm:h-[180px] md:h-[200px] object-cover"
                        />
                        <div className="mt-2 text-black font-semibold text-sm sm:text-lg">
                            {post.title}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default FacebookPosts;
