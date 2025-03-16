import React from "react"; 
import { Link} from "react-router-dom";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { FaDesktop, FaShieldAlt, FaLock, FaWifi } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const securityFeatures = [
  {
    id: 1,
    title: "Device Inventory",
    description: "List of monitored endpoints",
    icon: <FaDesktop className="text-primary" size={40} />,
    buttonText: "View Devices",
    link: "/endpoint-security/deviceinventory"
  },
  {
    id: 2,
    title: "Vulnerability Scanner",
    description: "Check device security risks",
    icon: <FaShieldAlt className="text-danger" size={40} />,
    buttonText: "Scan Now",
    link: "/endpoint-security/vulnerabilityscanner"
  },
  {
    id: 3,
    title: "Device Control",
    description: "Restrict/block unauthorized devices",
    icon: <FaLock className="text-success" size={40} />,
    buttonText: "Manage Devices",
    link: "/endpoint-security/devicecontrol"
  },
  {
    id: 4,
    title: "Network Control",
    description: "Monitor & manage device connections",
    icon: <FaWifi className="text-warning" size={40} />,
    buttonText: "Monitor Network",
    link: "/endpoint-security/networkcontrol"
  },
];

const EndpointSecurity = () => {
  const navigate = useNavigate(); // Correct way

  const handleExplore = (link) => {
    alert(`Exploring ${link}`);
    navigate(link);
  };
  

  return (
        <div id="content" className="app-content">
        <ul className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
          <li className="breadcrumb-item active">Endpoint Security</li>
        </ul>
        
        <h1 className="page-header">
        Endpoint Security <small></small>
        </h1>
    <Container className="py-4">
      {/* <h2 className="text-center mb-4">Endpoint Security</h2> */}
      <Row className="g-4">
        {securityFeatures.map((feature) => (
          <Col key={feature.id} md={6} lg={3}>
            <Card className="shadow-lg border-0 rounded-3 text-center p-4 h-100">
              <div className="mb-3">{feature.icon}</div>
              <Card.Title className="fw-bold">{feature.title}</Card.Title>
              <Card.Text className="text-muted">{feature.description}</Card.Text>
              <Button variant="primary" className="mt-auto" onClick={() => handleExplore(feature.link)}>{feature.buttonText}</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default EndpointSecurity;
