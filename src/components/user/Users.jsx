import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5173/users').then(res => setUsers(res.data));
  }, []);

  const addUser = () => {
    axios.post('http://localhost:5173/users', { name }).then(res => {
      setUsers([...users, res.data]);
      setName('');
    });
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5173/users/${id}`).then(() => {
      setUsers(users.filter(u => u._id !== id));
    });
  };

  return (
    <div>
      <h2>Users</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="User name" />
      <button onClick={addUser}>Add User</button>
      {/* <ul>
        {users.map(u => (
          <li key={u._id}>
            {u.name} <button onClick={() => deleteUser(u._id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Users;
