import React, { useEffect, useState } from 'react';
import image1 from '../../assets/pando.jpeg';

// Demo latest posts (replace with backend data if available)
const demoPosts = [
  {
    id: 1,
     img: image1,
    title: 'How to Make the Perfect Pizza',
    summary: 'Learn the secrets to making delicious homemade pizza with crispy crust and fresh toppings.',
    date: '2025-09-18',
   
  },
  {
    id: 2,
    title: 'Top 5 Burger Recipes',
    summary: 'Discover mouth-watering burger recipes you can try at home for your next meal.',
    date: '2025-09-17',
    image: ''
  },
  {
    id: 3,
    title: 'Sushi Rolling Tips for Beginners',
    summary: 'Step-by-step guide to rolling sushi like a pro, even if you are just starting out.',
    date: '2025-09-16',
    image: ''
  },
];

function Latestpost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace with fetch from backend if needed
    setPosts(demoPosts);
  }, []);

  return (
    <div className="max-w-[60%] mx-auto mt-10 p-6 bg-white rounded shadow">

      <h2 className="text-2xl font-bold mb-4 text-blue-700">Latest Posts</h2>
      {
        posts.length === 0 ? (
          <p className="text-gray-500">No posts yet.</p>
        ) : (
          <ul>
            {posts.map(post => (
              <li key={post.id} className="mb-6 border-b pb-4">
                <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
                <p className="text-gray-700 mb-1">{post.summary}</p>
                <span className="text-xs text-gray-400">{post.date}</span>
              </li>
            ))}
          </ul>

        )
      }
    </div >
  );
}

export default Latestpost;
