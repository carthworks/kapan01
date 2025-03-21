import React, { useState } from 'react';
import { Container, Table, Button, Form, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { PencilSquare, TrashFill, KeyFill } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

const RoleBasedPermissions = () => {
    const [users, setUsers] = useState([
        { id: 1, username: 'arjun_verma', email: 'arjun@example.com', role: 'Admin', status: 'Active', lastLogin: '2025-03-21' },
        { id: 2, username: 'priya_sharma', email: 'priya@example.com', role: 'Editor', status: 'Inactive', lastLogin: '2025-03-20' },
        { id: 3, username: 'rahul_iyer', email: 'rahul@example.com', role: 'Viewer', status: 'Active', lastLogin: '2025-03-18' },
        { id: 4, username: 'deepika_mehta', email: 'deepika@example.com', role: 'Editor', status: 'Active', lastLogin: '2025-03-15' },
        { id: 5, username: 'vikram_patel', email: 'vikram@example.com', role: 'Admin', status: 'Inactive', lastLogin: '2025-03-10' },
        { id: 6, username: 'ananya_reddy', email: 'ananya@example.com', role: 'Viewer', status: 'Active', lastLogin: '2025-03-12' },
        { id: 7, username: 'suresh_nair', email: 'suresh@example.com', role: 'Editor', status: 'Active', lastLogin: '2025-03-11' },
        { id: 8, username: 'isha_singh', email: 'isha@example.com', role: 'Admin', status: 'Inactive', lastLogin: '2025-03-08' },
        { id: 9, username: 'karthik_menon', email: 'karthik@example.com', role: 'Viewer', status: 'Active', lastLogin: '2025-03-07' },
        { id: 10, username: 'swati_kumar', email: 'swati@example.com', role: 'Editor', status: 'Inactive', lastLogin: '2025-03-05' },
        { id: 11, username: 'manoj_das', email: 'manoj@example.com', role: 'Viewer', status: 'Active', lastLogin: '2025-03-03' },
        { id: 12, username: 'tanvi_mishra', email: 'tanvi@example.com', role: 'Admin', status: 'Active', lastLogin: '2025-03-02' }
    ]);
    
  const [roles] = useState(['Admin', 'Editor', 'Viewer']);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const toggleStatus = (userId) => {
    setUsers(users.map(user => user.id === userId ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } : user));
  };

  const handleEdit = (user) => {
    console.log('Edit user:', user);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handlePermissionChange = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
     <div id="content" className="app-content">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/user-management">user-management</Link></li>
                        <li className="breadcrumb-item active">Role-based Permissions</li>
                    </ul>
                    
                    <h1 className="page-header">
                    Role-based Permissions<small></small>
                    </h1>
    <Container className="mt-4">
      {/* <h2 className="mb-4">Role-Based Permissions</h2> */}
     <Table bordered hover responsive striped className="shadow-sm">
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
              <td>
                <Form.Select value={user.role} disabled>
                  {roles.map(role => <option key={role}>{role}</option>)}
                </Form.Select>
              </td>
              <td>
                <Form.Check
                  type="switch"
                  checked={user.status === 'Active'}
                  onChange={() => toggleStatus(user.id)}
                />
              </td>
              <td>{user.lastLogin}</td>
              <td>
                <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                  <Button variant="primary" size="sm" className="me-2" onClick={() => handleEdit(user)}>
                    <PencilSquare />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                  <Button variant="danger" size="sm" className="me-2" onClick={() => handleDelete(user.id)}>
                    <TrashFill />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Assign Role</Tooltip>}>
                  <Button variant="success" size="sm" onClick={() => handlePermissionChange(user)}>
                    <KeyFill />
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Role Assignment Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Role for {selectedUser?.username}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select>
            {roles.map(role => <option key={role}>{role}</option>)}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </div>
  );
};

export default RoleBasedPermissions;
