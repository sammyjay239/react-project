import React, { useEffect, useState } from 'react';

// Demo tags (replace with backend data if available)
const demoTags = [
  { id: 1, name: 'Pizza' },
  { id: 2, name: 'Burger' },
  { id: 3, name: 'Sushi' },
  { id: 4, name: 'Dessert' },
  { id: 5, name: 'Drinks' },
  { id: 6, name: 'Healthy' },
  { id: 7, name: 'Quick Meals' },
];

function Tags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // Replace with fetch from backend if needed
    setTags(demoTags);
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Tags</h2>
      <div className="flex flex-wrap gap-3">
        {tags.map(tag => (
          <span
            key={tag.id}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 cursor-pointer transition"
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tags;
