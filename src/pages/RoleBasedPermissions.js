import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form, Modal, OverlayTrigger, Tooltip, Spinner } from 'react-bootstrap';
import axios from 'axios';

const RoleBasedPermissions = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get('/api/users');
        const rolesResponse = await axios.get('/api/roles');
        setUsers(usersResponse.data);
        setRoles(rolesResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePermissionChange = (userId) => {
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
    setSelectedPermissions(prevPermissions =>
      prevPermissions.includes(permissionId)
        ? prevPermissions.filter(id => id !== permissionId)
        : [...prevPermissions, permissionId]
    );
  };

  if (loading) return <Container className="text-center mt-5"><Spinner animation="border" /></Container>;
  if (error) return <Container className="text-center mt-5 text-danger">Error: {error}</Container>;

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Role-Based Permissions</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Last Login</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{roles.find(role => role.id === user.roleId)?.name || 'N/A'}</td>
              <td>{user.status}</td>
              <td>{user.lastLogin}</td>
              <td>
                <OverlayTrigger placement="top" overlay={<Tooltip>Assign Permissions</Tooltip>}>
                  <Button variant="success" onClick={() => handlePermissionChange(user.id)}>
                    <i className="bi bi-key-fill"></i>
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Permissions for User {selectedUser}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {roles.map(permission => (
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
  );
};

export default RoleBasedPermissions;
