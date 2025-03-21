import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom";


const UserAccessControl = () => {
  const [users, setUsers] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
    // Dummy data for users
    const dummyUsers = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', permissions: [{ id: 1, name: 'Read' }, { id: 2, name: 'Write' }] },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', permissions: [{ id: 1, name: 'Read' }] },
    ];
    setUsers(dummyUsers);
    // Dummy data for permissions
    
    // Commented out API call
    // try {
    //   const response = await axios.get('/api/users');
    //   setUsers(response.data);
    // } catch (err) {
    //   setError(err.message);
    // }
    };

    const fetchPermissions = async () => {
      try {
        // const response = await axios.get('/api/permissions');
        // setPermissions(response.data);
        const dummyPermissions = [
            { id: 1, name: 'Read' },
            { id: 2, name: 'Write' },
            { id: 3, name: 'Execute' },
          ];
          setPermissions(dummyPermissions);
      } catch (err) {
        setError(err.message);
      }
    };

  Promise.all([fetchUsers(), fetchPermissions()])
    .then(() => setLoading(false))
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, []);

  const handlePermissionChange = (userId, permissionId) => {
    setSelectedUser(userId);
    setSelectedPermissions(users.find(user => user.id === userId).permissions || []);
    setShowModal(true);
  };

  const handleSavePermissions = async () => {
    try {
      await axios.put(`/api/users/${selectedUser}/permissions`, { permissions: selectedPermissions });
      setUsers(users.map(user => user.id === selectedUser ? { ...user, permissions: selectedPermissions } : user));
      setShowModal(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCheckboxChange = (permissionId) => {
    setSelectedPermissions(prevPermissions => {
      if (prevPermissions.includes(permissionId)) {
        return prevPermissions.filter(id => id !== permissionId);
      } else {
        return [...prevPermissions, permissionId];
      }
    });
  };

  if (loading) return <Container className="text-center mt-5">Loading...</Container>;
  if (error) return <Container className="text-center mt-5 text-danger">Error: {error}</Container>;

  return (
        <div id="content" className="app-content">
            <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                <li className="breadcrumb-item active">User Access Control</li>
            </ul>
            
            <h1 className="page-header">
            User Access Control <small></small>
            </h1>
    <Container className="mt-5">
       <Table bordered hover responsive className="shadow-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Permissions</th>
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
                {user.permissions.map(permission => (
                  <span key={permission.id} className="badge badge-primary mr-1">{permission.name}</span>
                ))}
              </td>
              <td>
                <Button variant="primary" onClick={() => handlePermissionChange(user.id)}>
                  Edit Permissions
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Permissions for User {selectedUser}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {permissions.map(permission => (
            <Form.Check
              key={permission.id}
              type="checkbox"
              label={permission.name}
              checked={selectedPermissions.includes(permission.id)}
              onChange={() => handleCheckboxChange(permission.id)}
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSavePermissions}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </div>
  );
};

export default UserAccessControl;