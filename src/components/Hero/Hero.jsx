import React from "react";
import Slider from "react-slick";
import image1 from '../../assets/logo.png';
import image2 from '../../assets/cloth3.png';
import image3 from '../../assets/ipone.png';
import image4 from '../../assets/card.jpg';

const ImageList = [
    {
        id: 1,
        img: image1,
        title: "Welcome to samdev Food Blog",
        description:
            "Discover delicious recipes, cooking tips, and the latest trends in the culinary world.",
    },
    {
        id: 2,
        img: image2,
        title: "Descover Fashion & Lifestyle",
        description:
            "Read inspiring stories, get style tips, and explore the latest trends in clothing and lifestyle.",
    },
    {
        id: 3,
        img: image3,
        title: "Latest Tech & Gadgets",
        description:
            " Find reviews, comparisons, and news about the best and strongest phones and gadgets available.",

    },
     {
        id: 4,
        img: image4,
        title: "More Information About The Developer",
        description:
            "Samdev 001, Full Stack developer discover more about my skills  .",

    }

];

const Hero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center bg-gray-200 h-80 w-100%">
            {/* hero content */}
            <div className="relative z-10 w-full pb-8 sm:pb-0">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                                {/* text */}
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 px-6 sm:ml-16">
                                    <h1
                                        data-aos="zoom-in"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1e2531]"
                                    >
                                        {data.title}
                                    </h1>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                        className="text-black text-sm mt-2 font-medium"
                                    >
                                        {data.description}
                                    </p>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="300"
                                    >
                                    </div>
                                </div>
                                {/* image */}

                                <div className="flex justify-center">
                                    <div data-aos="zoom-in" data-aos-once="true">
                                        <img
                                            src={data.img}
                                            alt={data.title}
                                            className="w-[600px] h-auto sm:h-[450px] sm:w-[450px] sm:scale-110 lg:scale-150 object-contain mx-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div> 
              
        </div> 
        
          

    );
};
export default Hero;
