import React, { useState } from "react";
import { Container, Row, Col, Card, Table, ProgressBar, Button, Modal, Form } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { FaShieldAlt, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const complianceData = [
  { id: 1, standard: "GDPR", status: "Compliant", progress: 95, details: "General Data Protection Regulation compliance is met." },
  { id: 2, standard: "ISO 27001", status: "Partially Compliant", progress: 75, details: "ISO 27001 framework is implemented but needs improvements." },
  { id: 3, standard: "NIST", status: "Non-Compliant", progress: 40, details: "NIST compliance is not achieved. Requires security assessments." },
  { id: 4, standard: "PCI-DSS", status: "Compliant", progress: 90, details: "Payment Card Industry Data Security Standard compliance is met." },
  { id: 5, standard: "SOC 2", status: "Partially Compliant", progress: 65, details: "SOC 2 requirements are partially fulfilled but need audit improvements." },
];



const ComplianceReports = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("All");

  // Filter data based on selection
  const filteredData = complianceData.filter((item) => filter === "All" || item.status === filter);

  // Chart Data
  const chartData = {
    labels: filteredData.map((item) => item.standard),
    datasets: [
      {
        label: "Compliance Level",
        data: filteredData.map((item) => item.progress),
        backgroundColor: ["#28a745", "#ffc107", "#dc3545", "#28a745", "#ffc107"],
        borderColor: "#ffffff",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      x: { type: "category", title: { display: true, text: "Standards" } },
      y: { title: { display: true, text: "Compliance Level (%)" } },
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">
        <FaShieldAlt className="text-primary me-2" /> Compliance Reports
      </h2>
      <p className="text-center text-muted">Adhering to GDPR, ISO 27001, NIST, and other security standards.</p>

      {/* Filter Dropdown */}
      <Row className="mb-3">
        <Col md={4} className="mx-auto">
          <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Compliant">Compliant</option>
            <option value="Partially Compliant">Partially Compliant</option>
            <option value="Non-Compliant">Non-Compliant</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Summary Report Cards */}
      <Row className="g-4">
        {filteredData.map((item) => (
          <Col key={item.id} md={6} lg={4}>
            <Card className="shadow-sm border-0 p-3">
              <Card.Body>
                <h5 className="fw-bold">{item.standard}</h5>
                <p className="text-muted">{item.status}</p>
                <ProgressBar
                  now={item.progress}
                  label={`${item.progress}%`}
                  variant={item.progress >= 80 ? "success" : item.progress >= 50 ? "warning" : "danger"}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Chart Section */}
      <Row className="mt-5">
        <Col lg={8} className="mx-auto">
          <Card className="shadow-sm border-0 p-4">
            <h5 className="fw-bold mb-3">Compliance Progress Overview</h5>
            {/* <Bar data={chartData} options={{ maintainAspectRatio: false }} height={300} /> */}
            <Bar data={chartData} options={chartOptions} height={200} />
          </Card>
        </Col>
      </Row>

      {/* Compliance Table */}
      <Row className="mt-5">
        <Col>
          <Card className="shadow-sm border-0 p-4">
            <h5 className="fw-bold mb-3">Detailed Compliance Report</h5>
            <Table striped bordered hover responsive>
              <thead className="bg-light">
                <tr>
                  <th>#</th>
                  <th>Standard</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.standard}</td>
                    <td
                      className={
                        item.status === "Compliant"
                          ? "text-success"
                          : item.status === "Partially Compliant"
                          ? "text-warning"
                          : "text-danger"
                      }
                    >
                      {item.status === "Compliant" ? (
                        <FaCheckCircle />
                      ) : item.status === "Partially Compliant" ? (
                        <FaExclamationTriangle />
                      ) : (
                        <FaTimesCircle />
                      )}{" "}
                      {item.status}
                    </td>
                    <td>
                      <ProgressBar
                        now={item.progress}
                        variant={item.progress >= 80 ? "success" : item.progress >= 50 ? "warning" : "danger"}
                      />
                    </td>
                    <td>
                      <Button variant="primary" size="sm" onClick={() => { setSelectedReport(item); setShowModal(true); }}>
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>

      {/* Modal for More Details */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Compliance Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedReport ? (
            <>
              <h5>{selectedReport.standard}</h5>
              <p>{selectedReport.details}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={
                    selectedReport.status === "Compliant"
                      ? "text-success"
                      : selectedReport.status === "Partially Compliant"
                      ? "text-warning"
                      : "text-danger"
                  }
                >
                  {selectedReport.status}
                </span>
              </p>
              <ProgressBar now={selectedReport.progress} label={`${selectedReport.progress}%`} />
            </>
          ) : (
            <p>No details available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ComplianceReports;
