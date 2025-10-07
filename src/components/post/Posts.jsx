import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 text-black">
      <h1 className="text-3xl font-bold mb-6 text-center">All Posts</h1>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post._id} className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-700 mt-2">
                {post.content.slice(0, 100)}...
              </p>
              <p className="text-sm text-gray-500 mt-1">
                by {post.author?.firstName} {post.author?.lastName}
              </p>
              <Link
                to={`/post/${post._id}`}
                className="inline-block mt-3 text-blue-600 hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
