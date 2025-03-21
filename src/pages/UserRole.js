import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Button, Badge, Card } from "react-bootstrap";

const UserRole = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Dummy data for users and roles
    const fetchUsers = async () => {
      try {
        const dummyUsers = [
          { id: 1, name: 'John Doe', email: 'john@example.com', roleId: 1 },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', roleId: 2 },
        ];
        setUsers(dummyUsers);
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchRoles = async () => {
      try {
        const dummyRoles = [
          { id: 1, name: 'Admin' },
          { id: 2, name: 'User' },
        ];
        setRoles(dummyRoles);
      } catch (err) {
        setError(err.message);
      }
    };

    // Uncomment below to fetch data from API
    // const fetchUsers = async () => {
    //   try {
    //     const response = await axios.get('/api/users');
    //     setUsers(response.data);
    //   } catch (err) {
    //     setError(err.message);
    //   }
    // };

    // const fetchRoles = async () => {
    //   try {
    //     const response = await axios.get('/api/roles');
    //     setRoles(response.data);
    //   } catch (err) {
    //     setError(err.message);
    //   }
    // };

    // const fetchRoles = async () => {
    //   try {
    //     const response = await axios.get('/api/roles');
    //     setRoles(response.data);
    //   } catch (err) {
    //     setError(err.message);
    //   }
    // };

    Promise.all([fetchUsers(), fetchRoles()])
      .then(() => setLoading(false))
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleRoleChange = async (userId, roleId) => {
    try {
      await axios.put(`/api/users/${userId}/role`, { roleId });
      setUsers(users.map(user => user.id === userId ? { ...user, roleId } : user));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5 text-danger">Error: {error}</div>;

const handleEditUser = (userId) => { console.log(`Edit user with ID: ${userId}`); window.location.href = `/edit-user/${userId}`; };

const handleDeleteUser = async (userId) => {
    try {
        await axios.delete(`/api/users/${userId}`);
        setUsers(users.filter(user => user.id !== userId));
        console.log(`Deleted user with ID: ${userId}`);
    } catch (err) {
        setError(err.message);
    }
};

return (
    <div id="content" className="app-content">
        <ul className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
            <li className="breadcrumb-item active">User Role</li>
        </ul>
        
        <h1 className="page-header">
            User Role <small></small>
        </h1>
        <div className="container mt-5">
            <Table bordered hover responsive className="shadow-sm">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <select
                                    value={user.roleId}
                                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                    className="form-control"
                                >
                                    {roles.map(role => (
                                        <option key={role.id} value={role.id}>
                                            {role.name}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <button
                                    className="btn btn-primary mr-2 bn-sm mx-2"
                                    onClick={() => handleEditUser(user.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger bn-sm"
                                    onClick={() => handleDeleteUser(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    </div>
);
};

export default UserRole;