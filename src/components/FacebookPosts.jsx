import React from "react";
import content from "../configs/content";

const FacebookPosts = ({ language }) => {
    const langData = content[language]?.FacebookPosts || content["en"].FacebookPosts;

    const posts = [
       { 
            id: 3, 
            image: "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/486554544_122224434584231453_7608000793104703063_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF9PkKyJOovh2vkMYYWIOyGeQTd2H5U8ml5BN3YflTyaReq4fb46IDGUtcH3Uc0nT_IHUXuiW1MUeq0gKLzu1Ty&_nc_ohc=RvmMrM_9YXoQ7kNvgGX8MFa&_nc_oc=AdlsncinnhVJB0hlM6DqkCGVgr-_3EAiRY-V1Xc8g03DiXHkA3kWz-opSVauhiUd8Ns&_nc_zt=23&_nc_ht=scontent.fhan4-3.fna&_nc_gid=OIHoVDBuv6a-DfjBObBVjQ&oh=00_AYH1trtwwaiGvU_hNLoukJ58chlL6pamqUMjFRkQze30rQ&oe=67EB2788", 
            title: "🏅 𝗜𝗡𝗧𝗥𝗢𝗗𝗨𝗖𝗜𝗡𝗚 𝗥𝗠𝗜𝗧 𝗜𝗖𝗛𝗜𝗚𝗘𝗞𝗜 𝟮𝟬𝟮𝟱 𝗦𝗛𝗜𝗡𝗣𝗔𝗡𝗖𝗛𝗢 🏅", 
            link: "https://www.facebook.com/share/p/1AKyb9kN3Y//" 
        },
        { 
            id: 1, 
            image: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/485147247_122223650060231453_874071710195790293_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHEo0hBsnu0c9kL4Oo-TPNyolNSjv6Q7guiU1KO_pDuCzqNYHQk8SADI0Ved1zOuau0qig1sMlSPG-VmhsPLt5I&_nc_ohc=XSk1B8js1OAQ7kNvgGV_FZz&_nc_oc=AdlIA-nuDIHr3nAc7m4sxJ5DzMfKiUB4gkN_vcwx_gQwNCf2B5bh3xn7mw39fsqBRMPGq637DDD7NgsHyYap9udz&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=ev5FjZzA26q_6E0YC26cdA&oh=00_AYFb_DxzHy9gdwnjn9TIhxVSIym8eszc2VTKetx15miq5w&oe=67E8A692", 
            title: "𝗥𝗠𝗜𝗧 𝗜𝗖𝗛𝗜𝗚𝗘𝗞𝗜 𝗞𝗘𝗡𝗗𝗢 𝗧𝗢𝗨𝗥𝗡𝗔𝗠𝗘𝗡𝗧 𝟮𝟬𝟮𝟱 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗧𝗜𝗢𝗡 𝗢𝗣𝗘𝗡!", 
            link: "https://www.facebook.com/share/p/18nfn4BWMz/" 
        },
        { 
            id: 2, 
            image: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/486149612_122223844340231453_925366375001440328_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEU07e_ZAC3HKe0njwi2IBp-G-ob1yp0AX4b6hvXKnQBXiq8GnZZg6WlsY4BP9UJlimn0TP0yfNhlJxCS0UkNVV&_nc_ohc=ccdKCWxnYzcQ7kNvgEKOjzE&_nc_oc=AdlsehnBtY8pt51JcDAj8LY2ZAq2GSZgAbFe_tBS3NdvQ4HmZPCzk3rSJYwwYF4bxc67gt-myVdlhYsVvDU1IFq1&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=jM5foBFdgZ3drCx1powcAg&oh=00_AYFx3L79mMb-ToVgXkkB7rfF1DMmhpuv2DIN3Aj5NNphoA&oe=67E881FE", 
            title: "🎉𝗖𝗹𝘂𝗯 𝗗𝗮𝘆 + 𝗜𝗻𝗱𝘂𝗰𝘁𝗶𝗼𝗻 𝗗𝗮𝘆 𝗥𝗲𝗰𝗮𝗽 - 𝗡𝗲𝘄 𝗬𝗲𝗮𝗿, 𝗡𝗲𝘄 𝗕𝗲𝗴𝗶𝗻𝗻𝗶𝗻𝗴𝘀🎉", 
            link: "https://www.facebook.com/share/p/1B4qtgGcQM/" 
        },
    ];

    return (
        <section className="w-full min-h-[500px] sm:min-h-[700px] md:min-h-[800px] bg-gray-300 relative flex flex-col items-center pt-[50px] sm:pt-[80px] md:pt-[100px]">
            {/* UPDATES Header */}
            <div className="absolute top-0 right-5 w-full flex justify-end pr-5">
            <h2 className="text-[80px] md:text-[150px] lg:text-[190px] font-bold text-black leading-none">
                    {langData.title}
                </h2>
            </div>

           {/* Posts Grid */}
    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-[150px] px-4">
        {posts.map((post) => (
            <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 p-4 text-center w-full max-w-[350px] h-auto"
            >
                <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-[200px] md:h-[250px] object-cover"
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
