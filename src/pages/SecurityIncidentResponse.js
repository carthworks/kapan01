import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, Clock, Shield, Activity, FileText } from "react-feather";
import { Card, Row, Col, Button, Table, Badge, ProgressBar } from "react-bootstrap";

const SecurityIncidentResponse = () => {
  const [activeIncidents, setActiveIncidents] = useState([
    { 
      id: "INC-2023-001", 
      type: "Ransomware Attack", 
      severity: "Critical", 
      status: "Containment", 
      progress: 65,
      detectedAt: "2023-06-15 08:23:45",
      affectedSystems: ["File Server", "Email Gateway", "Domain Controller"]
    },
    { 
      id: "INC-2023-002", 
      type: "Phishing Campaign", 
      severity: "High", 
      status: "Investigation", 
      progress: 40,
      detectedAt: "2023-06-16 14:12:30",
      affectedSystems: ["User Workstations", "VPN Gateway"]
    },
    { 
      id: "INC-2023-003", 
      type: "DDoS Attack", 
      severity: "Medium", 
      status: "Resolved", 
      progress: 100,
      detectedAt: "2023-06-10 18:45:22",
      affectedSystems: ["Web Server", "Load Balancer"]
    }
  ]);

  const incidentResponseSteps = [
    { id: 1, name: "Detection & Analysis", icon: <Activity size={24} /> },
    { id: 2, name: "Containment", icon: <Shield size={24} /> },
    { id: 3, name: "Eradication", icon: <AlertTriangle size={24} /> },
    { id: 4, name: "Recovery", icon: <Clock size={24} /> },
    { id: 5, name: "Post-Incident Activity", icon: <FileText size={24} /> }
  ];

  const getSeverityBadge = (severity) => {
    const colors = {
      "Critical": "danger",
      "High": "warning",
      "Medium": "info",
      "Low": "success"
    };
    return <Badge bg={colors[severity]}>{severity}</Badge>;
  };

  return (
    <div id="content" className="app-content">
      <ul className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
        <li className="breadcrumb-item active">Security Incident Response</li>
      </ul>
      
      <h1 className="page-header">
        Security Incident Response <small>Management & Coordination</small>
      </h1>
      
      <Row className="mb-4">
        {incidentResponseSteps.map(step => (
          <Col key={step.id} md={6} lg={15/5}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column align-items-center text-center p-3">
                <div className="mb-3 text-primary">{step.icon}</div>
                <Card.Title className="fs-6 fw-bold">{step.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Active Security Incidents</h5>
          <Button variant="outline-primary" size="sm">Create Incident Report</Button>
        </Card.Header>
        <Card.Body>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Incident ID</th>
                <th>Type</th>
                <th>Severity</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {activeIncidents.map(incident => (
                <tr key={incident.id}>
                  <td>{incident.id}</td>
                  <td>{incident.type}</td>
                  <td>{getSeverityBadge(incident.severity)}</td>
                  <td>{incident.status}</td>
                  <td>
                    <ProgressBar 
                      now={incident.progress} 
                      variant={incident.progress === 100 ? "success" : "primary"} 
                      style={{height: "8px"}}
                    />
                  </td>
                  <td>
                    <Button variant="outline-secondary" size="sm" className="me-1">Details</Button>
                    <Button variant="outline-primary" size="sm">Update</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Incident Response Team</h5>
            </Card.Header>
            <Card.Body>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>Incident Commander</strong>
                    <div className="text-muted">Sarah Johnson</div>
                  </div>
                  <Badge bg="primary">On Call</Badge>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>Security Analyst</strong>
                    <div className="text-muted">Michael Chen</div>
                  </div>
                  <Badge bg="primary">On Call</Badge>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>Network Engineer</strong>
                    <div className="text-muted">David Rodriguez</div>
                  </div>
                  <Badge bg="secondary">Off Duty</Badge>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Response Playbooks</h5>
            </Card.Header>
            <Card.Body>
              <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">Ransomware Response</h6>
                    <small className="text-muted">v2.3</small>
                  </div>
                  <small className="text-muted">Updated 14 days ago</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">Data Breach Protocol</h6>
                    <small className="text-muted">v1.8</small>
                  </div>
                  <small className="text-muted">Updated 30 days ago</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">DDoS Mitigation</h6>
                    <small className="text-muted">v3.1</small>
                  </div>
                  <small className="text-muted">Updated 7 days ago</small>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SecurityIncidentResponse;