import React, { useEffect, useState } from "react";
import API from "../../utils/api";


function PostDetails({ postId }) {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  const fetchComments = async () => {
    try {
      const res = await API.get(`/comments/${postId}`);
      setComments(res.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    if (postId) fetchComments();
  }, [postId]);

  const handleComment = async () => {
    if (!content.trim()) return alert("Comment cannot be empty");
    try {
      await API.post("/comments", { postId, content });
      setContent("");
      fetchComments();
    } catch (error) {
      console.error(error);
      alert("You must be logged in to comment");
    }
  };

  return (
    <div className="p-4 mt-4 border-t">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      {comments.length === 0 ? (
        <p className="text-gray-500">No comments yet. Be the first!</p>
      ) : (
        comments.map((c) => (
          <div key={c._id} className="border-b py-2">
            <p className="font-semibold">{c.userId?.firstName}</p>
            <p>{c.content}</p>
          </div>
        ))
      )}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
        className="border p-2 w-full rounded mt-3"
      />
      <button
        onClick={handleComment}
        className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
      >
        Post Comment
      </button>
    </div>
  );
}

export default PostDetails;
