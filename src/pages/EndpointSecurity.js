import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Modal } from "react-bootstrap";

const vulnerabilities = [
  { id: 1, cve: "CVE-2023-1234", risk: "CRITICAL", application: "Apache", version: "2.4.51", status: "Unpatched" },
  { id: 2, cve: "CVE-2023-5678", risk: "HIGH", application: "Nginx", version: "1.21.6", status: "Patched" },
  { id: 3, cve: "CVE-2022-3456", risk: "MEDIUM", application: "MySQL", version: "8.0.28", status: "Unpatched" },
  { id: 4, cve: "CVE-2021-7890", risk: "LOW", application: "WordPress", version: "5.8", status: "Under Review" },
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
    <div className="container mt-4">
      <h2 className="mb-3">Application Vulnerabilities</h2>
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
  );
};

export default VulnerabilityTable;
