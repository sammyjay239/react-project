
import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import image1 from '../../assets/iphone11.jpeg';
import image2 from '../../assets/iphone13.jpeg';
import image3 from '../../assets/iphone15.png';
import image4 from '../../assets/iphone16.jpeg';


const Phones = () => {
    const products = [
        {
            id: 1,
            name: "iphone 11",
            text: <a href="">Read more...</a>,
            image: image1,
            rating: 4.5,
        },
        {
            id: 2,
            name: "iphone 13",
            text: <a href="">Read more...</a>,
            image: image2,
            rating: 4.5,
        },
        {
            id: 3,
            name: "iphone 15",
            text: <a href="">Read more...</a>,
            image: image3,
            rating: 3.5,
        },
        {
            id: 4,
            name: "iphone 16",
            text: <a href="">Read more...</a>,
            image: image4,
            rating: 4,
        },
    ];

    // Helper function to render stars
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<FaStar key={i} className="text-yellow-500 inline-block" />);
            } else if (rating >= i - 0.5) {
                stars.push(
                    <FaStarHalfAlt key={i} className="text-yellow-500 inline-block" />
                );
            } else {
                stars.push(
                    <FaRegStar key={i} className="text-gray-400 inline-block" />
                );
            }
        }
        return stars;
    };

    return (
        <div className="mt-14 mb-12">
            <div>
                {/* Header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-xl font-medium text-blue-900">
                        Top Trending Phones
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold text-[#101828]">
                        Latest Tech & Gadget
                    </h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                        laudantium cumque id!
                    </p>
                </div>

                {/* Body section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
                    {products.map((item) => (
                        <div
                            data-aos="fade-up"
                            data-aos-delay={item.aosDelay}
                            key={item.id}
                            className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-semibold text-lg text-gray-800">
                                    {item.name}
                                </h2>
                                <h3 className="text-black ml-32">
                                    {item.text}
                                </h3>
                                <p className="text-blue-900 font-bold">{item.price}</p>


                                {/* Rating stars */}
                                <div className="flex items-center mt-2">
                                    {renderStars(item.rating)}
                                    <span className="ml-2 text-sm text-gray-500">
                                        {item.rating}
                                    </span>
                                </div>

                                <button className="mt-3 w-full bg-gradient-to-r from-[#101828] to-blue-900 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
                                    Comment
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Phones;
