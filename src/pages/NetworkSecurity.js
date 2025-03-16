import {  Link } from "react-router-dom";
import React, { useState } from "react";
import { Card, Button, Modal, Container, Row, Col } from "react-bootstrap";
import { ShieldLock, Eye, Globe, Key } from "react-bootstrap-icons";

const NetworkSecurity = () => {
  // const [showModal, setShowModal] = useState(false);
  // const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    { id: 1, title: "Firewall & Traffic Monitoring", icon: <ShieldLock size={30} />, desc: "Monitor and control incoming/outgoing traffic to protect the network." },
    { id: 2, title: "Unusual Activity Detection", icon: <Eye size={30} />, desc: "Detect abnormal patterns in network traffic to prevent attacks." },
    { id: 3, title: "Geo-based Access Control", icon: <Globe size={30} />, desc: "Restrict network access based on geographic locations." },
    { id: 4, title: "Zero Trust Access", icon: <Key size={30} />, desc: "Only allow verified and authorized users to access resources." },
  ];

  // const handleShowModal = (feature) => {
  //   setSelectedFeature(feature);
  //   setShowModal(true);
  // };

  const handleExplore = (feature) => {
    alert(`Exploring: ${feature.title}`);
  };

  return (
    <div id="content" className="app-content">
    <ul className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
      <li className="breadcrumb-item active">network security</li>
    </ul>
    
    <h1 className="page-header">
    Network Security <small></small>
    </h1>
    
    <Container className="py-4">
      <h2 className="text-center mb-4">Network Security & Control</h2>
      <Row xs={1} md={2} className="g-4">
        {features.map((feature) => (
          <Col key={feature.id}>
            <Card className="shadow-lg p-3 border-0 rounded-3 text-center">
              <Card.Body>
                <div className="mb-3 text-primary">{feature.icon}</div>
                <Card.Title className="fw-bold">{feature.title}</Card.Title>
                <Card.Text>{feature.desc}</Card.Text>
                <Button variant="primary" onClick={() => handleExplore(feature)}>
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  );
};

export default NetworkSecurity;
