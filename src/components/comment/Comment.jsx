import React, { useState, useEffect } from "react";
import axios from "axios";

const Comments = ({ postId, user }) => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(`/comments/${postId}`);
      setComments(Array.isArray(res.data) ? res.data : res.data.comments || []);

    };
    fetchComments();
  }, [postId]);

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

    try {
      const res = await axios.post("/comments", {
        postId,
        userId: user._id,
        name: user.name,
        content,
      });

      setComments([res.data.newComment, ...comments]);
      setContent("");
    } catch (error) {
      console.error("Error posting comment:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Error posting comment");
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
          className="mt-2 bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
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
