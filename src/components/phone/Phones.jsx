import React, { useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import image1 from "../../assets/iphone11.jpeg";
import image2 from "../../assets/iphone13.jpeg";
import image3 from "../../assets/iphone15.png";
import image4 from "../../assets/iphone16.jpeg";

const Phones = () => {
  const products = [
    { id: 1, name: "iPhone 11", image: image1, rating: 4.5 },
    { id: 2, name: "iPhone 13", image: image2, rating: 4.5 },
    { id: 3, name: "iPhone 15", image: image3, rating: 3.5 },
    { id: 4, name: "iPhone 16", image: image4, rating: 4 },
  ];

  const [comments, setComments] = useState({});
  const [showBox, setShowBox] = useState({});

  // ⭐ Star rendering logic
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-500" />);
      else if (rating >= i - 0.5)
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      else stars.push(<FaRegStar key={i} className="text-gray-400" />);
    }
    return stars;
  };

  // 🟢 Toggle comment box
  const handleCommentToggle = (id) => {
    setShowBox((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // 🟢 Handle submit
  const handleCommentSubmit = (id) => {
    if (!comments[id] || comments[id].trim() === "")
      return alert("Enter a comment first!");
    alert(`Your comment on ${products.find((p) => p.id === id).name}: "${comments[id]}"`);
    setComments((prev) => ({ ...prev, [id]: "" }));
    setShowBox((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="mt-14 mb-12">
      {/* Header */}
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p className="text-xl font-medium text-blue-900">Top Trending Phones</p>
        <h1 className="text-3xl font-bold text-[#101828]">Latest Tech & Gadget</h1>
        <p className="text-xs text-gray-400">
          Discover the latest and most popular iPhones on the market.
        </p>
      </div>

      {/* Phone cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {products.map((item) => (
          <div
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

              {/* Comment button */}
              <button
                onClick={() => handleCommentToggle(item.id)}
                className="mt-3 w-full bg-gradient-to-r from-[#101828] to-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Comment
              </button>

              {/* Comment box */}
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

export default Phones;
