import React from "react";

const LinkPost = () => {
  const facebookPosts = [
    {
      id: "post1",
      title: "🔥【𝗦𝗛𝗜𝗡𝗦𝗘𝗜 𝗕𝗢𝗔𝗥𝗗 𝗢𝗙 𝗧𝗥𝗔𝗜𝗡𝗜𝗡𝗚】🔥",
      imageUrl: "/images/facebook-imag-01.jpg",
      link: "https://www.facebook.com/share/p/19vEdK4vcT/",
    }
    // {
    //   id: "post2",
    //   title: "🦁𝗟𝗲𝗴𝗮𝗰𝘆 𝗼𝗳 𝘁𝗵𝗲 𝗚𝘂𝗮𝗿𝗱𝗶𝗮𝗻 🦁",
    //   imageUrl: "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/481662659_122218874522231453_7236078323201545040_n.png?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFXa7zN2vq9FQSP0rKgT2xWxW_GK4sQHc3Fb8YrixAdzQBu4qLDg-irmQZCeZp92kzV8zMx4XdcIaSZ5iUY0Q1T&_nc_ohc=wt7VWp1cPGIQ7kNvgH9kTFu&_nc_oc=AdjBTAtnbKZ7isZCi387ZCNZpGufNfU8Dx-tilId4lU6BASbwu0dmgkUzoFeYKVlM5C5ltvIRk9yTqht9YTIwpnH&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=AzEZXJ7GTbaUJ9I3VVMAfK9&oh=00_AYBY-P-ZVoYEL9MFkBWgHrzTnPNGcC7Z3_n5SCXH4WxZfQ&oe=67CF775D",
    //   link: "https://www.facebook.com/share/1A2J9hBHpC/",
    // },
    // {
    //   id: "post3",
    //   title: "🔥【𝗦𝗛𝗜𝗡𝗦𝗘𝗜 𝗘𝗫𝗘𝗖𝗨𝗧𝗜𝗩𝗘 & 𝗠𝗔𝗡𝗔𝗚𝗘𝗠𝗘𝗡𝗧 𝗕𝗢𝗔𝗥𝗗 - 𝗚𝟭.𝟱】🔥",
    //   imageUrl: "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/481666815_122218602332231453_4028316082318931657_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF88TFgNIT6ZL1A4eN3StRs8SGyLzo60UnxIbIvOjrRSZnDE7wx_YzcBjabk96PwqE_PILnan0KKYSqKCxzN3wr&_nc_ohc=Q8pgXY_LuzEQ7kNvgEQYgAw&_nc_oc=AdgtrgmiVVXWzpfvTO1Ws4udRK7Sq4rbp0rGRbvxdbCc0fRLRfD9PGFnXQ74YYfO926WVirzty8GRIFCkXRE-xX7&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=AWhU05lZVfoQ1DR7D7L18yB&oh=00_AYARkpGALYRrzfdOyN-FFvQ2c5ZMdcnXgTjdU1AXKAlmZQ&oe=67CF712A",
    //   link: "https://www.facebook.com/share/p/15qxkg72Su/",
    // },
  ];

 
  return (
    <div className="w-4/5 max-w-screen-xl mx-auto py-8 px-4 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">
        Latest Facebook Posts
      </h2>
      <div className="w-full flex flex-col gap-8">
        {facebookPosts.map((post) => (
          <div
            key={post.id}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md transform opacity-0 animate-fadeDown mb-8 w-full max-w-2xl hover:transform hover:translate-y-[-5px] hover:shadow-lg"
          >
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 text-left flex-1 no-underline"
            >
              {post.title}
            </a>
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-44 h-44 rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkPost;
