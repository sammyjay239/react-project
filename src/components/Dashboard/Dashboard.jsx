import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [userComments, setUserComments] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
      fetchUserPosts(loggedInUser._id);
      fetchUserComments(loggedInUser._id);
    }
  }, []);

  const fetchUserPosts = async (userId) => {
    try {
      const res = await axios.get(`/posts/user/${userId}`);
      setUserPosts(res.data);
    } catch (error) {
      console.error("Error fetching user posts:", error);
    }
  };

  const fetchUserComments = async (userId) => {
    try {
      const res = await axios.get(`/comments/user/${userId}`);
      setUserComments(res.data);
    } catch (error) {
      console.error("Error fetching user comments:", error);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <header className="flex items-center gap-4 mb-6 text-black">
        <img
          src={user.profilePicture || "https://via.placeholder.com/100"}
          alt="profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold text-black">{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </header>

      <section className="mb-8 text-black">
        <h3 className="text-lg font-semibold mb-2">My Posts</h3>
        {Array.isArray(userPosts) && userPosts.length > 0 ? (
          userPosts.map((post) => (
            <div key={post._id} className="border-b p-2">
              <h4 className="font-bold">{post.title}</h4>
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p>No posts yet.</p>
        )}
      </section>

      <section className="text-black">
        <h3 className="text-lg font-semibold mb-2">My Comments</h3>
        {Array.isArray(userComments) && userComments.length > 0 ? (
          userComments.map((comment) => (
            <div key={comment._id} className="border-b p-2">
              <p className="text-black">{comment.content}</p>
              <p className="text-sm text-black">on post {comment.postId}</p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </section>

    </div>
  );
};

export default Dashboard;
