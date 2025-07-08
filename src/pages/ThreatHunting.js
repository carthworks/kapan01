import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, AlertCircle, Clock, Filter, Download, RefreshCw } from "react-feather";
import { Card, Row, Col, Form, Button, Table, Badge, InputGroup, Dropdown } from "react-bootstrap";

const ThreatHunting = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [timeRange, setTimeRange] = useState("24h");
  
  const huntingQueries = [
    { 
      id: "HQ-001", 
      name: "Unusual PowerShell Commands", 
      category: "Endpoint", 
      lastRun: "2 hours ago",
      status: "Active",
      results: 3
    },
    { 
      id: "HQ-002", 
      name: "Suspicious Network Connections", 
      category: "Network", 
      lastRun: "1 day ago",
      status: "Active",
      results: 7
    },
    { 
      id: "HQ-003", 
      name: "Anomalous Authentication Patterns", 
      category: "Identity", 
      lastRun: "3 hours ago",
      status: "Active",
      results: 2
    },
    { 
      id: "HQ-004", 
      name: "Potential Data Exfiltration", 
      category: "Data", 
      lastRun: "12 hours ago",
      status: "Inactive",
      results: 0
    }
  ];
  
  const recentFindings = [
    {
      id: "F-2023-045",
      query: "Unusual PowerShell Commands",
      severity: "High",
      timestamp: "2023-06-16 09:23:45",
      host: "WS-DEV-104",
      description: "PowerShell command with encoded payload execution detected"
    },
    {
      id: "F-2023-044",
      query: "Suspicious Network Connections",
      severity: "Medium",
      timestamp: "2023-06-16 08:12:30",
      host: "WS-FINANCE-22",
      description: "Outbound connection to known malicious IP address"
    },
    {
      id: "F-2023-043",
      query: "Anomalous Authentication Patterns",
      severity: "Critical",
      timestamp: "2023-06-16 07:45:22",
      host: "DC-PROD-01",
      description: "Multiple failed authentication attempts followed by successful login"
    }
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
        <li className="breadcrumb-item active">Threat Hunting</li>
      </ul>
      
      <h1 className="page-header">
        Threat Hunting <small>Proactive Security Analysis</small>
      </h1>
      
      <Row className="mb-4">
        <Col md={8}>
          <Card>
            <Card.Header className="bg-transparent">
              <h5 className="mb-0">Hunt Query Builder</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Col md={8}>
                    <InputGroup>
                      <InputGroup.Text><Search size={18} /></InputGroup.Text>
                      <Form.Control 
                        type="text" 
                        placeholder="Search for suspicious activities..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </InputGroup>
                  </Col>
                  <Col md={4}>
                    <InputGroup>
                      <InputGroup.Text><Clock size={18} /></InputGroup.Text>
                      <Form.Select 
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                      >
                        <option value="1h">Last hour</option>
                        <option value="6h">Last 6 hours</option>
                        <option value="24h">Last 24 hours</option>
                        <option value="7d">Last 7 days</option>
                        <option value="30d">Last 30 days</option>
                      </Form.Select>
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="primary" className="me-2">
                      <Search size={16} className="me-1" />
                      Execute Hunt
                    </Button>
                    <Button variant="outline-secondary" className="me-2">
                      <Filter size={16} className="me-1" />
                      Advanced Filters
                    </Button>
                    <Button variant="outline-secondary">
                      Save Query
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Header className="bg-transparent">
              <h5 className="mb-0">MITRE ATT&CK Coverage</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex flex-column h-100 justify-content-center">
                <div className="text-center mb-3">
                  <div className="display-4 fw-bold text-primary">68%</div>
                  <div className="text-muted">Techniques Covered</div>
                </div>
                <div className="d-flex justify-content-between text-center">
                  <div>
                    <div className="fw-bold">12/14</div>
                    <small className="text-muted">Initial Access</small>
                  </div>
                  <div>
                    <div className="fw-bold">8/12</div>
                    <small className="text-muted">Execution</small>
                  </div>
                  <div>
                    <div className="fw-bold">9/15</div>
                    <small className="text-muted">Persistence</small>
                  </div>
                  <div>
                    <div className="fw-bold">7/11</div>
                    <small className="text-muted">Exfiltration</small>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Active Hunting Queries</h5>
              <Button variant="outline-primary" size="sm">
                <RefreshCw size={16} className="me-1" />
                Refresh
              </Button>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Query Name</th>
                    <th>Category</th>
                    <th>Last Run</th>
                    <th>Status</th>
                    <th>Results</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {huntingQueries.map(query => (
                    <tr key={query.id}>
                      <td>{query.id}</td>
                      <td>{query.name}</td>
                      <td>{query.category}</td>
                      <td>{query.lastRun}</td>
                      <td>
                        <Badge bg={query.status === "Active" ? "success" : "secondary"}>
                          {query.status}
                        </Badge>
                      </td>
                      <td>
                        {query.results > 0 ? (
                          <Badge bg="warning">{query.results}</Badge>
                        ) : (
                          <Badge bg="success">0</Badge>
                        )}
                      </td>
                      <td>
                        <Button variant="outline-secondary" size="sm" className="me-1">Run</Button>
                        <Button variant="outline-primary" size="sm">View</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Recent Findings</h5>
              <Button variant="outline-secondary" size="sm">
                <Download size={16} className="me-1" />
                Export
              </Button>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Source Query</th>
                    <th>Severity</th>
                    <th>Timestamp</th>
                    <th>Host</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentFindings.map(finding => (
                    <tr key={finding.id}>
                      <td>{finding.id}</td>
                      <td>{finding.query}</td>
                      <td>{getSeverityBadge(finding.severity)}</td>
                      <td>{finding.timestamp}</td>
                      <td>{finding.host}</td>
                      <td>{finding.description}</td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle variant="outline-secondary" size="sm" id={`dropdown-${finding.id}`}>
                            Actions
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#">View Details</Dropdown.Item>
                            <Dropdown.Item href="#">Create Incident</Dropdown.Item>
                            <Dropdown.Item href="#">Mark as False Positive</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ThreatHunting;