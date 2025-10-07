import React, { useEffect, useState } from "react";
import AddPost from "../post/AddPost";
import PostDetails from "../post/postDetails";
import API from "../../utils/api";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <AddPost onPostAdded={fetchPosts} />

      <h2 className="text-2xl font-bold mt-6 mb-3">All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id}
            onClick={() => setSelectedPost(post._id)}
            className="p-3 border rounded mb-3 hover:bg-gray-100 cursor-pointer"
          >
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-gray-700">{post.content.slice(0, 100)}...</p>
          </div>
        ))
      )}

      {selectedPost && <PostDetails postId={selectedPost} />}
    </div>
  );
}

export default BlogPage;
