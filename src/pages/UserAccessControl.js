import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form, Modal, ToggleButton, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const UserAccessControl = () => {
  const sampleUsers = [
    { id: 1, username: 'JohnDoe', email: 'john@example.com', roleId: 1, status: 'Active', lastLogin: '2024-03-21', permissions: [1, 2] },
    { id: 2, username: 'JaneSmith', email: 'jane@example.com', roleId: 2, status: 'Inactive', lastLogin: '2024-03-18', permissions: [2, 3] }
  ];
  
  const sampleRoles = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Editor' },
    { id: 3, name: 'Viewer' }
  ];

  const [users, setUsers] = useState(sampleUsers);
  const [roles, setRoles] = useState(sampleRoles);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const handleRoleChange = (userId, roleId) => {
    setUsers(users.map(user => user.id === userId ? { ...user, roleId: parseInt(roleId) } : user));
  };

  const handleStatusChange = (userId, status) => {
    setUsers(users.map(user => user.id === userId ? { ...user, status: status ? 'Active' : 'Inactive' } : user));
  };

  const handleEditUser = (user) => {
    setEditUser(user);
  };

  const handleSaveEdit = () => {
    setUsers(users.map(user => user.id === editUser.id ? { ...user, email: editUser.email } : user));
    setEditUser(null);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handlePermissionChange = (userId) => {
    setSelectedUser(userId);
    setSelectedPermissions(users.find(user => user.id === userId).permissions || []);
    setShowModal(true);
  };

  const handleSavePermissions = () => {
    setUsers(users.map(user => user.id === selectedUser ? { ...user, permissions: selectedPermissions } : user));
    setShowModal(false);
  };

  const handleCheckboxChange = (permissionId) => {
    setSelectedPermissions(prevPermissions =>
      prevPermissions.includes(permissionId) ? prevPermissions.filter(id => id !== permissionId) : [...prevPermissions, permissionId]
    );
  };

  return (
    <div id="content" className="app-content">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                     <li className="breadcrumb-item"><Link to="/user-management">user-management</Link></li>
                     <li className="breadcrumb-item active">User Access Control</li>
                </ul>
                
                <h1 className="page-header">
                User Access Control <small></small>
                </h1>
    <Container className="mt-5">
      {/* <h1 className="mb-4 text-center">User Access Control</h1> */}
      <Table bordered hover responsive striped className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
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
              <td>
                {editUser?.id === user.id ? (
                  <Form.Control
                    type="email"
                    value={editUser.email}
                    onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                <Form.Select value={user.roleId} onChange={(e) => handleRoleChange(user.id, e.target.value)}>
                  {roles.map(role => (
                    <option key={role.id} value={role.id}>{role.name}</option>
                  ))}
                </Form.Select>
              </td>
              <td>
                <ToggleButton
                  type="checkbox"
                  checked={user.status === 'Active'}
                  onChange={(e) => handleStatusChange(user.id, e.target.checked)}
                  variant={user.status === 'Active' ? "success" : "secondary"}
                >
                  {user.status}
                </ToggleButton>
              </td>
              <td>{user.lastLogin}</td>
              <td>
                <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                  <Button variant="primary" size="sm" className="me-2" onClick={() => handleEditUser(user)}>
                    <i className="bi bi-pencil"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip>Delete</Tooltip>}>
                  <Button variant="danger" size="sm" className="me-2" onClick={() => handleDeleteUser(user.id)}>
                    <i className="bi bi-trash"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip>Permissions</Tooltip>}>
                  <Button variant="warning" size="sm" onClick={() => handlePermissionChange(user.id)}>
                    <i className="bi bi-key"></i>
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Permissions</Modal.Title>
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
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSavePermissions}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </div>
  );
};

export default UserAccessControl;
