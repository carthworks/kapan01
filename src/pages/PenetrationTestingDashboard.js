import React from "react";
import { Container, Row, Col, Card, Table, Button, Badge, Dropdown } from "react-bootstrap";
import { FaFilePdf, FaFileExcel, FaFileImage, FaExclamationTriangle } from "react-icons/fa";

const PenetrationTestingDashboard = () => {
  const vulnerabilities = [
    { id: 1, name: "SQL Injection", severity: "High", status: "Active", recommendation: "Use prepared statements and ORM." },
    { id: 2, name: "Cross-Site Scripting (XSS)", severity: "Medium", status: "Pending", recommendation: "Sanitize and validate input fields." },
    { id: 3, name: "Insecure Direct Object Reference", severity: "High", status: "Active", recommendation: "Implement proper authorization checks." },
    { id: 4, name: "Broken Authentication", severity: "Critical", status: "Active", recommendation: "Use strong authentication mechanisms." },
    { id: 5, name: "Security Misconfiguration", severity: "Low", status: "Resolved", recommendation: "Regularly update security settings." },
  ];

  return (
    <Container fluid className="p-4">
      <Row className="mb-4 text-center">
        <Col>
          <h4>🔍 Penetration Testing Dashboard</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>🚀 Detected Vulnerabilities</Card.Title>
              <Table striped bordered hover responsive className="mt-3">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Vulnerability</th>
                    <th>Severity</th>
                    <th>Status</th>
                    <th>Recommendation</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {vulnerabilities.map((vuln) => (
                    <tr key={vuln.id}>
                      <td>{vuln.id}</td>
                      <td>{vuln.name}</td>
                      <td>
                        <Badge bg={vuln.severity === "Critical" ? "danger" : vuln.severity === "High" ? "warning" : "info"}>
                          {vuln.severity}
                        </Badge>
                      </td>
                      <td>
                        <Badge bg={vuln.status === "Active" ? "danger" : vuln.status === "Pending" ? "warning" : "success"}>
                          {vuln.status}
                        </Badge>
                      </td>
                      <td>{vuln.recommendation}</td>
                      <td>
                        <Button variant="outline-danger" size="sm" className="me-2">
                          <FaFilePdf />
                        </Button>
                        <Button variant="outline-success" size="sm" className="me-2">
                          <FaFileExcel />
                        </Button>
                        <Button variant="outline-primary" size="sm">
                          <FaFileImage />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Dropdown className="mt-3">
                <Dropdown.Toggle variant="secondary">Export Report</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#"><FaFilePdf /> PDF</Dropdown.Item>
                  <Dropdown.Item href="#"><FaFileExcel /> Excel</Dropdown.Item>
                  <Dropdown.Item href="#"><FaFileImage /> PNG</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PenetrationTestingDashboard;
