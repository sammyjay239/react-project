import React, { useEffect, useState } from "react";

const Dashboard = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const API_URL = "http://localhost:5000/api/users";

  // Load profile
  useEffect(() => {
    fetch(`${API_URL}/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setFirstName(data.firstName);
        setLastName(data.lastName);
      });
  }, [userId]);

  // Update name
  const updateName = async () => {
    await fetch(`${API_URL}/${userId}/name`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName }),
    });
    alert("Name updated!");
  };

  // Update password
  const updatePassword = async () => {
    await fetch(`${API_URL}/${userId}/password`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ oldPassword, newPassword }),
    });
    alert("Password updated!");
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Profile Info */}
      <div className="mb-6">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
      </div>

      {/* Update Name */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Update Name</h2>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <button
          onClick={updateName}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Name
        </button>
      </div>

      {/* Update Password */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Update Password</h2>
        <input
          type="password"
          placeholder="Old password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <button
          onClick={updatePassword}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
