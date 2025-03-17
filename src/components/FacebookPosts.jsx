import React from "react";
import content from "../configs/content";

const FacebookPosts = ({ language }) => {
    // Get the language-specific data
    const langData = content[language]?.FacebookPosts || content["en"].FacebookPosts;

    // Define the posts array inside the function scope
    const posts = [
        {
            id: 1,
            image: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/483968444_122220961232231453_2713139435492358789_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEZbAmPrqVvz12MECAUTKoPQRuwIRMUDClBG7AhExQMKSH6-S7qtsJQT4n9-txYNXoUK0J1ffVrxse8jylRIcyB&_nc_ohc=32scCgbiLb0Q7kNvgG4YSia&_nc_oc=AdiSq6HG5rTh_LhsLrqkXFOMYirCv1LEX6zQQ_jAoXRCRVbe19SjfEQcwfuviJKFpV81vNc9_Z2eW23Pb2V54v_u&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=Rad8L0F74HnhdS7KBZblQg&oh=00_AYGEQD89UjdB745BmDMpCVGxonagu-COUY8PJo97355BNQ&oe=67DD8C49",
            title: "RMIT KENDO CLUB INDUCTION DAY",
            link: "https://www.facebook.com/share/p/1511pUezKJ/",
        },
        {
            id: 2,
            image: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/482222170_122220351050231453_1807148248979955695_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFhint1nqpxKXM7sGXJj_yBSZk1vZvmNL5JmTW9m-Y0voZhBnKSA9oNGT5FOOiEppn0WiB6ocWAJG_U54dN8Un0&_nc_ohc=jTXyyemyLmAQ7kNvgFlq838&_nc_oc=AdgeWq_3NNq1ThUmlemWv4tl0JmX7gPonXQ6GIKV6QRqHkI-eXsH9wU9tiywaocuEgdwGlSN6XIBJJxWYrVWmD0F&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=HddD4mQCI2cu6Hn_HVJO_Q&oh=00_AYEECBzRG5CPeBw5JxWQLN7IX9wxW9LOjGkTJVKlVOes9Q&oe=67DD79AA",
            title: "ICHIGEKI NO BI",
            link: "https://www.facebook.com/share/p/19xEQbceD1/",
        },
        {
            id: 3,
            image: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/482009163_122219486972231453_4497532765954282203_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG-fXEmftSromChxk6-SqFZQg4y51lodSRCDjLnWWh1JADLlKjNLwXV26xWq1tGwxFGtq8-uAQmfHCTLFnaPEnR&_nc_ohc=lsfLZFK9ERkQ7kNvgHG90K3&_nc_oc=Adi5__fjM17CYQgdnlFzg7ULRmBLQn4Fy_MiC3-eblyydi_c2ZRJAfhqoUDwgP-99c6cqw_a6F0Xn4USXnu8w_OJ&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=HddD4mQCI2cu6Hn_HVJO_Q&oh=00_AYF9DUOaPI-ou9wO4Bo9QNHh4jGrqnTO7ORXkYfcr1u1vA&oe=67DD8D9D",
            title: "HAPPY INTERNATIONAL WOMEN'S DAY",
            link: "https://www.facebook.com/share/p/16AhWfiigk/",
        },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-center text-xl font-bold text-white bg-orange-500 py-3 rounded-lg mb-6 mx-auto w-3/4">
                  { langData.title}
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {posts.map((post) => (
                        <a
                            key={post.id}
                            href={post.link}
                            className="block w-60 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <div className="h-40 bg-yellow-400 flex items-center justify-center">
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
