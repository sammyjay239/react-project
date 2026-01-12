import React, { useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import image1 from "../../assets/cloth1.jpg";
import image2 from "../../assets/cloth2.jpg";
import image3 from "../../assets/cloth3.png";
import image4 from "../../assets/cloth4.jpg";

const Cloths = () => {
  const products = [
    { id: 1, name: "Ballenciaga Top", image: image1, rating: 4.5 },
    { id: 2, name: "Ballenciaga Trouser", image: image2, rating: 4.5 },
    { id: 3, name: "Extreme", image: image3, rating: 3.5 },
    { id: 4, name: "Trouser", image: image4, rating: 4 },
  ];

  const [comments, setComments] = useState({});
  const [showBox, setShowBox] = useState({});

  // ⭐ Helper function to render stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i)
        stars.push(<FaStar key={i} className="text-yellow-500 inline-block" />);
      else if (rating >= i - 0.5)
        stars.push(
          <FaStarHalfAlt key={i} className="text-yellow-500 inline-block" />
        );
      else stars.push(<FaRegStar key={i} className="text-gray-400 inline-block" />);
    }
    return stars;
  };

  // 🟢 Toggle comment box
  const handleCommentToggle = (id) => {
    setShowBox((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // 🟢 Submit comment
  const handleCommentSubmit = (id) => {
    if (!comments[id] || comments[id].trim() === "")
      return alert("Please enter a comment first!");
    alert(`Your comment on "${products.find((p) => p.id === id).name}": "${comments[id]}"`);
    setComments((prev) => ({ ...prev, [id]: "" }));
    setShowBox((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="mt-14 mb-12">
      {/* Header */}
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-xl font-medium text-blue-900">
          Top Trending Clothes
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold text-[#101828]">
          Latest Fashion Collection
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Discover the trendiest outfits and latest fashion designs.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {products.map((item) => (
          <div
            data-aos="fade-up"
            key={item.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg text-gray-800">{item.name}</h2>

              {/* Rating stars */}
              <div className="flex items-center mt-2">
                {renderStars(item.rating)}
                <span className="ml-2 text-sm text-gray-500">{item.rating}</span>
              </div>

              {/* Comment Button */}
              <button
                onClick={() => handleCommentToggle(item.id)}
                className="mt-3 w-full bg-gradient-to-r from-[#101828] to-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Comment
              </button>

              {/* Comment Box */}
              {showBox[item.id] && (
                <div className="mt-3">
                  <textarea
                    value={comments[item.id] || ""}
                    onChange={(e) =>
                      setComments((prev) => ({ ...prev, [item.id]: e.target.value }))
                    }
                    placeholder="Write your comment..."
                    className="w-full border border-gray-300 rounded-md p-2 text-black"
                  />
                  <button
                    onClick={() => handleCommentSubmit(item.id)}
                    className="mt-2 bg-blue-900 text-white px-4 py-1 rounded hover:bg-blue-700"
                  >
                    Post
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cloths;
