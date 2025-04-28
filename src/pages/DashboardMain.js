import React from "react";
import { Container, Row, Col, Card, Tab, Tabs, Badge } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "chart.js/auto";

const DashboardMain = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Threat Alerts",
        data: [10, 20, 15, 30, 25, 35],
        borderColor: "#FF5733",
        backgroundColor: "rgba(255, 87, 51, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <Container fluid className="p-4 ">
      <h2 className="text-center mb-4">Dashboard</h2>
      <Row>
        <Col md={3}>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                📊 Overview <Badge bg="primary">Live</Badge>
              </Card.Title>
              <Card.Text>Real-time security insights & alerts</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                🔍 Threat Intelligence <Badge bg="warning">AI</Badge>
              </Card.Title>
              <Card.Text>AI-based risk analysis</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                ⚠️ Incident Summary <Badge bg="danger">Critical</Badge>
              </Card.Title>
              <Card.Text>Recent vulnerabilities & attacks</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                🏆 Security Score <Badge bg="success">Healthy</Badge>
              </Card.Title>
              <Card.Text>System health rating</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                🔢 Total Threats <Badge bg="dark">120</Badge>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                🚨 Critical Alerts <Badge bg="danger">8</Badge>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={9}>
          <Tabs defaultActiveKey="threat-detection" className="mb-3">
            <Tab eventKey="threat-detection" title="Threat Detection & Response">
              <Card className="p-3 shadow-sm">
                <Line data={chartData} />
                <Card.Body>
                  <Card.Text>Real-time security insights and AI-based threat intelligence</Card.Text>
                </Card.Body>
              </Card>
            </Tab>
            <Tab eventKey="network-security" title="Network Security & Control">
              <Card className="p-3 shadow-sm">
                <Card.Body>
                  <Card.Text>Comprehensive network monitoring</Card.Text>
                </Card.Body>
              </Card>
            </Tab>
            <Tab eventKey="endpoint-security" title="Endpoint Security">
              <Card className="p-3 shadow-sm">
                <Card.Body>
                  <Card.Text>Device protection & access control</Card.Text>
                </Card.Body>
              </Card>
            </Tab>
            <Tab eventKey="os-security" title="OS & Application Security">
              <Card className="p-3 shadow-sm">
                <Card.Body>
                  <Card.Text>Application vulnerability scanning</Card.Text>
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardMain;
