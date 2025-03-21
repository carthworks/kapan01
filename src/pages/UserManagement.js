import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { FaUsersCog, FaUserShield, FaBuilding, FaShieldAlt, FaKey } from "react-icons/fa";

const features = [
  { id: 1, title: "User & Role Management", icon: <FaUsersCog size={30} />, desc: "Manage users and their roles effectively.", link: "/user-management/userrole" },
  { id: 2, title: "User Access Control", icon: <FaUserShield size={30} />, desc: "Control access levels for users.", link: "/user-management/access-control" },
  { id: 3, title: "Multi-Tenant Support", icon: <FaBuilding size={30} />, desc: "Support multiple organizations.", link: "/user-management/multi-tenant-support" },
  { id: 4, title: "Role-based Permissions", icon: <FaShieldAlt size={30} />, desc: "Assign permissions based on roles.", link: "/user-management/role-based-permissions" },
  // { id: 5, title: "2FA & Authentication Logs", icon: <FaKey size={30} />, desc: "Enable two-factor authentication and logs.", link: "/user-management/authentication-logs" }
];

const UserManagement = () => {

  const handleExplore = (link) => {
    window.location.href = link;
  };


  return (
    <div id="content" className="app-content">
    <ul className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
      <li className="breadcrumb-item"><Link to="/user-management">user-management</Link></li>
      <li className="breadcrumb-item active">User & Role Management</li>
    </ul>
    
    <h1 className="page-header">
    User Management & Access Control <small></small>
    </h1>
    
    <Container className="mt-4">
      {/* <h2 className="text-center mb-4">🔒 User Management & Access Control</h2> */}
      <Row className="g-4">
        {features.map((feature) => (
          <Col key={feature.id} md={3} lg={3}>
            <Card className="shadow-lg border-0 rounded-4 text-center p-3">
              <div className="text-primary text-center mb-3">{feature.icon}</div>
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">{feature.title}</Card.Title>
                <Card.Text>{feature.desc}</Card.Text>
                <Button variant="primary" onClick={() => handleExplore(feature.link)}>Explore</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  );
};

export default UserManagement;
