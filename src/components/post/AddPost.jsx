import React, { useState } from "react";
import API from "../../utils/api";

function AddPost({ onPostAdded }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await API.post("/posts", { title, content });
      alert("Post created successfully!");
      setTitle("");
      setContent("");
      if (onPostAdded) onPostAdded(res.data); // Refresh posts on page
    } catch (error) {
      console.error(error);
      alert("Error creating post");
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
          rows="4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default AddPost;
