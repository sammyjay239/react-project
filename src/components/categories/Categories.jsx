import React, { useState, useEffect } from 'react';

// Demo categories (replace with backend data if available)
const demoCategories = [
  { id: 1, name: 'Pizza', icon: '🍕' },
  { id: 2, name: 'Burger', icon: '🍔' },
  { id: 3, name: 'Sushi', icon: '🍣' },
  { id: 4, name: 'Desserts', icon: '🍰' },
  { id: 5, name: 'Drinks', icon: '🥤' },
];

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Replace with fetch from backend if needed
    setCategories(demoCategories);
  }, []);

  return (
    <div className="max-w-[70%] mx-auto mt-10 p-6 bg-white rounded shadow text-blue-600">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {categories.map(cat => (
          <div
            key={cat.id}
            className="flex flex-col items-center bg-blue-50 rounded p-4 hover:bg-blue-100 transition"
          >
            <span className="text-3xl mb-2">{cat.icon}</span>
            <span className="font-semibold">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
