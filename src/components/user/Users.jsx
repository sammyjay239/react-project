import React, { useEffect, useState } from 'react';
import API from '../../utils/api';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    API.get('/users').then(res => setUsers(res.data));
  }, []);

  const addUser = () => {
    API.post('/users', { name }).then(res => {
      setUsers([...users, res.data]);
      setName('');
    });
  };

  const deleteUser = (id) => {
    API.delete(`/users/${id}`).then(() => {
      setUsers(users.filter(u => u._id !== id));
    });
  };

  return (
    <div className='text-black'>
      <h2>Users</h2>
      <input
        className='text-black'
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="User name"
      />
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map(u => (
          <li key={u._id}>
            {u.name} <button onClick={() => deleteUser(u._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
