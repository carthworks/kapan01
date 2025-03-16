import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const vulnerabilities = [
  { id: 1, cve: "CVE-2023-1234", risk: "CRITICAL", application: "Apache", version: "2.4.51", status: "Unpatched" },
  { id: 2, cve: "CVE-2023-5678", risk: "HIGH", application: "Nginx", version: "1.21.6", status: "Patched" },
  { id: 3, cve: "CVE-2022-3456", risk: "MEDIUM", application: "MySQL", version: "8.0.28", status: "Unpatched" },
  { id: 4, cve: "CVE-2021-7890", risk: "LOW", application: "WordPress", version: "5.8", status: "Under Review" },
  { id: 5, cve: "CVE-2024-2345", risk: "CRITICAL", application: "Docker", version: "20.10.9", status: "Unpatched" },
  { id: 6, cve: "CVE-2023-8910", risk: "HIGH", application: "MongoDB", version: "4.4.6", status: "Patched" },
  { id: 7, cve: "CVE-2022-6789", risk: "MEDIUM", application: "PostgreSQL", version: "13.3", status: "Under Review" },
  { id: 8, cve: "CVE-2021-2222", risk: "LOW", application: "Node.js", version: "16.14.2", status: "Patched" },
  { id: 9, cve: "CVE-2024-3333", risk: "CRITICAL", application: "Jenkins", version: "2.303.3", status: "Unpatched" },
  { id: 10, cve: "CVE-2023-4444", risk: "HIGH", application: "Redis", version: "6.2.6", status: "Under Review" },
  { id: 11, cve: "CVE-2022-5555", risk: "MEDIUM", application: "Elasticsearch", version: "7.13.4", status: "Patched" },
  { id: 12, cve: "CVE-2021-6666", risk: "LOW", application: "Kubernetes", version: "1.21.0", status: "Unpatched" },
  { id: 13, cve: "CVE-2024-7777", risk: "CRITICAL", application: "Spring Boot", version: "2.5.3", status: "Unpatched" },
  { id: 14, cve: "CVE-2023-8888", risk: "HIGH", application: "Flask", version: "2.0.2", status: "Patched" },
  { id: 15, cve: "CVE-2022-9999", risk: "MEDIUM", application: "Django", version: "3.2.7", status: "Under Review" },
  { id: 16, cve: "CVE-2021-1010", risk: "LOW", application: "React", version: "17.0.2", status: "Patched" },
  { id: 17, cve: "CVE-2024-1212", risk: "CRITICAL", application: "Angular", version: "12.1.2", status: "Unpatched" },
  { id: 18, cve: "CVE-2023-1313", risk: "HIGH", application: "Vue.js", version: "3.0.5", status: "Patched" },
  { id: 19, cve: "CVE-2022-1414", risk: "MEDIUM", application: "Express.js", version: "4.17.1", status: "Under Review" },
  { id: 20, cve: "CVE-2021-1515", risk: "LOW", application: "Ruby on Rails", version: "6.1.4", status: "Patched" },
];

const riskColors = {
  CRITICAL: "danger",
  HIGH: "warning",
  MEDIUM: "info",
  LOW: "success",
};

const VulnerabilityTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedVuln, setSelectedVuln] = useState(null);

  const handleShow = (vuln) => {
    setSelectedVuln(vuln);
    setShowModal(true);
  };

  return (
    <div id="content" className="app-content">
    <ul className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
      <li className="breadcrumb-item active">VulnerabilityTable </li>
    </ul>
    
    <h1 className="page-header">
    Application Vulnerability   <small></small>
    </h1>
    <div className="container mt-4">
      {/* <h2 className="mb-3">Application Vulnerabilities</h2> */}
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>CVE ID</th>
            <th>Application</th>
            <th>Version</th>
            <th>Status</th>
            <th>Risk Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vulnerabilities.map((vuln, index) => (
            <tr key={vuln.id}>
              <td>{index + 1}</td>
              <td>
                <a href={`https://cve.mitre.org/cgi-bin/cvename.cgi?name=${vuln.cve}`} target="_blank" rel="noopener noreferrer">
                  {vuln.cve}
                </a>
              </td>
              <td>{vuln.application}</td>
              <td>{vuln.version}</td>
              <td>{vuln.status}</td>
              <td>
                <span className={`badge bg-${riskColors[vuln.risk]}`}>{vuln.risk}</span>
              </td>
              <td>
                <Button variant="primary" onClick={() => handleShow(vuln)}>View Details</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Bootstrap Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Vulnerability Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedVuln && (
            <div>
              <p><strong>CVE:</strong> <a href={`https://cve.mitre.org/cgi-bin/cvename.cgi?name=${selectedVuln.cve}`} target="_blank" rel="noopener noreferrer">{selectedVuln.cve}</a></p>
              <p><strong>Application:</strong> {selectedVuln.application}</p>
              <p><strong>Version:</strong> {selectedVuln.version}</p>
              <p><strong>Status:</strong> {selectedVuln.status}</p>
              <p><strong>Risk Level:</strong> <span className={`badge bg-${riskColors[selectedVuln.risk]}`}>{selectedVuln.risk}</span></p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
};

export default VulnerabilityTable;
