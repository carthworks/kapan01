import React from "react";
import { Container, Row, Col, Card, Badge, Table, ProgressBar } from "react-bootstrap";
import Link from "react-router-dom";


const DashboardView = () => {
  return (
    <Container fluid className="p-4">
      {/* Top Section - Overview Badges */}
      <Row className="mb-4 text-center">
        <Col>
          <h4>Dashboard Overview</h4>
        </Col>
      </Row>
      <Row className="mb-3 text-center">
        <Col>
          <Badge pill bg="primary" className="p-3 m-1">
            Total Threats: 120
          </Badge>
          <Badge pill bg="danger" className="p-3 m-1">
            Critical Alerts: 8
          </Badge>
          <Badge pill bg="warning" className="p-3 m-1 text-dark">
            Pending Incidents: 15
          </Badge>
          <Badge pill bg="success" className="p-3 m-1">
            System Health: Good
          </Badge>
        </Col>
      </Row>

      {/* Real-time Security Insights */}
      <Row>
        <Col md={6}>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>📊 Real-time Security Insights</Card.Title>
              <Card.Text>Live updates on system threats, vulnerabilities, and suspicious activities.</Card.Text>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Event</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10:30 AM</td>
                    <td>Unauthorized login attempt</td>
                    <td><Badge bg="danger">Critical</Badge></td>
                  </tr>
                  <tr>
                    <td>11:00 AM</td>
                    <td>Firewall breach detected</td>
                    <td><Badge bg="warning">Warning</Badge></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        {/* AI-based Threat Intelligence */}
        <Col md={6}>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>🔍 AI-based Threat Intelligence</Card.Title>
              <Card.Text>Analyzing risk levels and predicting potential cyber threats.</Card.Text>
              <ProgressBar variant="danger" now={75} label="High Risk" className="mb-2" />
              <ProgressBar variant="warning" now={50} label="Moderate Risk" className="mb-2" />
              <ProgressBar variant="success" now={20} label="Low Risk" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Incident Summary & Security Score */}
      <Row>
        <Col md={6}>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>⚠️ Incident Summary</Card.Title>
              <Card.Text>Recent vulnerabilities & security incidents.</Card.Text>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Incident</th>
                    <th>Severity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SQL Injection Attempt</td>
                    <td><Badge bg="danger">Critical</Badge></td>
                  </tr>
                  <tr>
                    <td>Malware Detected</td>
                    <td><Badge bg="warning">Moderate</Badge></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>🏆 Security Score</Card.Title>
              <Card.Text>Overall system health rating based on security metrics.</Card.Text>
              <h3 className="text-center text-success">85 / 100</h3>
              <ProgressBar now={85} label={`85%`} variant="success" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardView;
