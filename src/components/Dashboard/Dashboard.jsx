import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <p>Loading user info...</p>;
  }

  return (
    <div className="p-6">
      <h1 className=" text-black text-2xl font-bold">Welcome, {user.firstName}!</h1>
      <p className="text-blue-500">Email: {user.email}</p>
    </div>
  );
};

export default Dashboard;
