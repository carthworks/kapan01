import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button  } from "react-bootstrap";
import { FaChartBar, FaAward, FaSearch, FaCalendarAlt } from "react-icons/fa";

const Reports = () => {

  const reports = [
    {
      title: "Security Reports",
      description: "Customizable reports for real-time security insights.",
      icon: <FaChartBar size={40} className="text-primary" />,
    },
    {
      title: "Compliance Reports",
      description: "Adheres to GDPR, ISO, NIST, and other security standards.",
      icon: <FaAward size={40} className="text-success" />,
    },
    {
      title: "Attack Trend Analysis",
      description: "Historical insights and trends of cyber threats.",
      icon: <FaSearch size={40} className="text-danger" />,
    },
    {
      title: "Scheduled Reports",
      description: "Auto-generated analytics reports for regular assessments.",
      icon: <FaCalendarAlt size={40} className="text-warning" />,
    },
  ];
  
  const handleExplore = (title) => {
    alert(`Exploring ${title}`);
  };
  
  return (
    <div id="content" className="app-content">
    <ul className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
      <li className="breadcrumb-item active">Security Reports & Analytics</li>
    </ul>
    
    <h1 className="page-header">
    Network Security Reports & Analytics <small></small>
    </h1>
    
    <Container className="py-4">
      {/* <h2 className="text-center mb-4 text-dark">🔒 Network Security Reports & Analytics</h2> */}
      <Row className="g-4">
        {reports.map((report, index) => (
          <Col key={index} md={6} lg={3}>
            <Card className="shadow-lg border-0 rounded-4 text-center p-3">
              <Card.Body>
                <div className="mb-3">{report.icon}</div>
                <Card.Title className="fw-bold">{report.title}</Card.Title>
                <Card.Text className="text-muted">{report.description}</Card.Text>
              <Button variant="primary" onClick={() => handleExplore(report.title)}>Explore</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  );
};

export default Reports;
