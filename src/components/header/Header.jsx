// src/components/Header.jsx
import React from "react";

const Header = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    window.location.href = "/login";
  };

  return (
    <header className="flex justify-between items-center bg-gray-900 text-white p-4 shadow">
      <h1 className="text-2xl font-bold">TastyCraft Blog</h1>

      {userInfo ? (
        <div className="flex items-center gap-3">
          <img
            src={userInfo.image || "/default-profile.png"}
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium">{userInfo.name}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <a href="/login" className="text-blue-400">Login</a>
          <a href="/signup" className="text-blue-400">Signup</a>
        </div>
      )}
    </header>
  );
};

export default Header;
