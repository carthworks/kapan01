import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { PencilSquare, Trash, Key } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

const initialData = [
  { id: 1, organization: 'Alpha Corp', admin: 'John Doe', email: 'john@alpha.com', tenants: 5, status: 'Active', lastLogin: '2024-03-21' },
  { id: 2, organization: 'Beta Ltd', admin: 'Jane Smith', email: 'jane@beta.com', tenants: 3, status: 'Inactive', lastLogin: '2024-03-19' },
  { id: 3, organization: 'Gamma Inc', admin: 'Michael Johnson', email: 'michael@gamma.com', tenants: 8, status: 'Active', lastLogin: '2024-03-22' },
  { id: 4, organization: 'Delta LLC', admin: 'Alice Brown', email: 'alice@delta.com', tenants: 6, status: 'Active', lastLogin: '2024-03-20' },
  { id: 5, organization: 'Epsilon Tech', admin: 'Robert Wilson', email: 'robert@epsilon.com', tenants: 4, status: 'Inactive', lastLogin: '2024-03-18' },
  { id: 6, organization: 'Zeta Solutions', admin: 'Emily Davis', email: 'emily@zeta.com', tenants: 7, status: 'Active', lastLogin: '2024-03-17' },
  { id: 7, organization: 'Theta Systems', admin: 'David White', email: 'david@theta.com', tenants: 9, status: 'Inactive', lastLogin: '2024-03-16' },
  { id: 8, organization: 'Iota Group', admin: 'Sophia Green', email: 'sophia@iota.com', tenants: 2, status: 'Active', lastLogin: '2024-03-15' },
  { id: 9, organization: 'Kappa Enterprises', admin: 'Daniel Moore', email: 'daniel@kappa.com', tenants: 5, status: 'Inactive', lastLogin: '2024-03-14' },
  { id: 10, organization: 'Lambda Networks', admin: 'Olivia Martinez', email: 'olivia@lambda.com', tenants: 10, status: 'Active', lastLogin: '2024-03-13' },
  { id: 11, organization: 'Mu Cloud', admin: 'William Taylor', email: 'william@mu.com', tenants: 3, status: 'Active', lastLogin: '2024-03-12' },
  { id: 12, organization: 'Nu Security', admin: 'Charlotte Anderson', email: 'charlotte@nu.com', tenants: 6, status: 'Inactive', lastLogin: '2024-03-11' },
];

const MultiTenantSupport = () => {
  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState(null);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const handleEdit = (org) => {
    setSelectedOrg(org);
    setShowModal(true);
  };

  return (
         <div id="content" className="app-content">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/user-management">user-management</Link></li>
                            <li className="breadcrumb-item active">Multi-Tenant Support</li>
                        </ul>
                        
                        <h1 className="page-header">
                        Multi-Tenant Support <small></small></h1>
    <Container className="mt-5">
      {/* <h2 className="mb-4">Multi-Tenant Support</h2> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Organization</th>
            <th>Admin</th>
            <th>Email</th>
            <th>Tenants</th>
            <th>Status</th>
            <th>Last Login</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((org) => (
            <tr key={org.id}>
              <td>{org.id}</td>
              <td>{org.organization}</td>
              <td>{org.admin}</td>
              <td>{org.email}</td>
              <td>{org.tenants}</td>
              <td>{org.status}</td>
              <td>{org.lastLogin}</td>
              <td>
                <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                  <Button variant="primary" className="me-2" onClick={() => handleEdit(org)}>
                    <PencilSquare />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                  <Button variant="danger" className="me-2" onClick={() => handleDelete(org.id)}>
                    <Trash />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Manage Permissions</Tooltip>}>
                  <Button variant="success">
                    <Key />
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Organization</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrg && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Organization Name</Form.Label>
                <Form.Control type="text" defaultValue={selectedOrg.organization} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Admin Email</Form.Label>
                <Form.Control type="email" defaultValue={selectedOrg.email} />
              </Form.Group>
            </Form>
          )}
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

export default MultiTenantSupport;
