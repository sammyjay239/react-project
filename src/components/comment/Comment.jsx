import React, { useState, useEffect } from "react";
import axios from "axios";

const Comments = ({ postId }) => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // ✅ Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/api/addcomment/${postId}`);
        setComments(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [postId]);

  // ✅ Handle comment submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You must be logged in to comment");
      return;
    }

    if (!content.trim()) {
      alert("Comment cannot be empty");
      return;
    }

    const token = localStorage.getItem("token");
    console.log("Submitted content:", { postId, content });

    try {
      const res = await axios.post(
        "/api/addcomment",
        { postId, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setComments([res.data.newComment, ...comments]);
      setContent("");
    } catch (error) {
      console.error("Error posting comment:", error.response?.data || error.message);
      alert(error.response?.data?.message || "erro posting comment");
    }
  };

  return (
    <div>
      <h3 className="font-bold text-lg mb-2">Comments</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border p-2 rounded text-black"
          placeholder="Write a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Post Comment
        </button>
      </form>

      <div className="mt-4 space-y-3">
        {comments.map((comment) => (
          <div key={comment._id} className="border-b pb-2">
            <p className="font-semibold">{comment.name}</p>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
