import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Badge, Table, ProgressBar, Alert, Button } from "react-bootstrap";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import { Shield, AlertTriangle, Activity, Users, Server, Lock, Eye, TrendingUp } from "react-feather";
import "bootstrap/dist/css/bootstrap.min.css";
import "chart.js/auto";

const DashboardMain = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Sample data for charts and metrics
  const securityScore = 87;
  const totalDevices = 1247;
  const activeThreats = 23;
  const criticalAlerts = 5;
  const resolvedIncidents = 156;
  const networkUptime = 99.8;

  // Threat trend data
  const threatTrendData = {
    labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
    datasets: [
      {
        label: "Threat Detections",
        data: [12, 8, 15, 25, 18, 22, 16],
        borderColor: "#dc3545",
        backgroundColor: "rgba(220, 53, 69, 0.1)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Blocked Attacks",
        data: [10, 6, 12, 20, 15, 18, 14],
        borderColor: "#28a745",
        backgroundColor: "rgba(40, 167, 69, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Security status distribution
  const securityStatusData = {
    labels: ["Secure", "Warning", "Critical", "Unknown"],
    datasets: [
      {
        data: [65, 20, 10, 5],
        backgroundColor: ["#28a745", "#ffc107", "#dc3545", "#6c757d"],
        borderWidth: 0,
      },
    ],
  };

  // Device types data
  const deviceTypesData = {
    labels: ["Workstations", "Servers", "Mobile", "IoT", "Network"],
    datasets: [
      {
        label: "Device Count",
        data: [450, 120, 380, 200, 97],
        backgroundColor: ["#007bff", "#6f42c1", "#fd7e14", "#20c997", "#e83e8c"],
      },
    ],
  };

  // Recent incidents data
  const recentIncidents = [
    { id: 1, type: "Malware", severity: "High", target: "WS-001", time: "2 min ago", status: "Active" },
    { id: 2, type: "Phishing", severity: "Medium", target: "Email Server", time: "15 min ago", status: "Investigating" },
    { id: 3, type: "DDoS", severity: "Critical", target: "Web Server", time: "1 hour ago", status: "Mitigated" },
    { id: 4, type: "Brute Force", severity: "High", target: "SSH Server", time: "2 hours ago", status: "Blocked" },
    { id: 5, type: "Data Exfiltration", severity: "Critical", target: "DB Server", time: "3 hours ago", status: "Resolved" },
  ];

  // Top vulnerabilities
  const topVulnerabilities = [
    { cve: "CVE-2024-0001", severity: "Critical", affected: 15, description: "Remote Code Execution" },
    { cve: "CVE-2024-0002", severity: "High", affected: 8, description: "Privilege Escalation" },
    { cve: "CVE-2024-0003", severity: "Medium", affected: 23, description: "Information Disclosure" },
    { cve: "CVE-2024-0004", severity: "High", affected: 5, description: "SQL Injection" },
  ];

  const getSeverityBadge = (severity) => {
    const variants = {
      Critical: "danger",
      High: "warning",
      Medium: "info",
      Low: "secondary"
    };
    return <Badge bg={variants[severity] || "secondary"}>{severity}</Badge>;
  };

  const getStatusBadge = (status) => {
    const variants = {
      Active: "danger",
      Investigating: "warning",
      Mitigated: "info",
      Blocked: "success",
      Resolved: "success"
    };
    return <Badge bg={variants[status] || "secondary"}>{status}</Badge>;
  };

  return (
    <div id="content" className="app-content">
      <ul className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
        <li className="breadcrumb-item active">Security Dashboard</li>
      </ul>

      <h1 className="page-header">
        🛡️ Security Dashboard <small>Real-time monitoring and threat intelligence</small>
      </h1>

      {/* Status Bar */}
      <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-dark rounded">
        <div className="d-flex align-items-center">
          <Activity className="text-success me-2" size={16} />
          <span className="text-light">System Status: </span>
          <Badge bg="success" className="ms-2">Operational</Badge>
        </div>
        <div className="text-end">
          <div className="text-muted small">Last Updated</div>
          <div className="text-light fw-bold">{currentTime.toLocaleTimeString()}</div>
        </div>
      </div>

      {/* Key Metrics Row */}
      <Row className="mb-4">
        <Col lg={3} md={6} className="mb-3">
          <Card className="h-100 bg-dark border border-secondary rounded shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <div className="flex-shrink-0 me-3">
                <div className="bg-success bg-opacity-20 p-3 rounded-circle">
                  <Shield className="text-success" size={24} />
                </div>
              </div>
              <div className="flex-grow-1">
                <div className="text-muted small">Security Score</div>
                <div className="h4 mb-1 text-light">{securityScore}%</div>
                <ProgressBar variant="success" now={securityScore} style={{ height: "4px" }} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} md={6} className="mb-3">
          <Card className="h-100 bg-dark border border-secondary rounded shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <div className="flex-shrink-0 me-3">
                <div className="bg-danger bg-opacity-20 p-3 rounded-circle">
                  <AlertTriangle className="text-danger" size={24} />
                </div>
              </div>
              <div className="flex-grow-1">
                <div className="text-muted small">Active Threats</div>
                <div className="h4 mb-1 text-light">{activeThreats}</div>
                <div className="small text-danger">
                  <TrendingUp size={12} className="me-1" />
                  +3 from yesterday
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} md={6} className="mb-3">
          <Card className="h-100 bg-dark border border-secondary rounded shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <div className="flex-shrink-0 me-3">
                <div className="bg-primary bg-opacity-20 p-3 rounded-circle">
                  <Server className="text-primary" size={24} />
                </div>
              </div>
              <div className="flex-grow-1">
                <div className="text-muted small">Protected Devices</div>
                <div className="h4 mb-1 text-light">{totalDevices.toLocaleString()}</div>
                <div className="small text-success">
                  <Activity size={12} className="me-1" />
                  {networkUptime}% uptime
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} md={6} className="mb-3">
          <Card className="h-100 bg-dark border border-secondary rounded shadow-sm">
            <Card.Body className="d-flex align-items-center">
              <div className="flex-shrink-0 me-3">
                <div className="bg-warning bg-opacity-20 p-3 rounded-circle">
                  <Eye className="text-warning" size={24} />
                </div>
              </div>
              <div className="flex-grow-1">
                <div className="text-muted small">Incidents Resolved</div>
                <div className="h4 mb-1 text-light">{resolvedIncidents}</div>
                <div className="small text-muted">This month</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Charts Row */}
      <Row className="mb-4">
        <Col lg={8} className="mb-3">
          <Card className="h-100 bg-dark border border-secondary rounded shadow-sm">
            <Card.Header className="bg-dark border-bottom border-secondary pb-0 rounded-top">
              <h5 className="mb-0 text-light">🔍 Threat Detection Timeline</h5>
              <small className="text-muted">Real-time threat monitoring (Last 24 hours)</small>
            </Card.Header>
            <Card.Body>
              <Line
                data={threatTrendData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'top',
                      labels: {
                        color: '#ffffff'
                      }
                    },
                  },
                  scales: {
                    x: {
                      ticks: {
                        color: '#ffffff'
                      },
                      grid: {
                        color: '#444'
                      }
                    },
                    y: {
                      beginAtZero: true,
                      ticks: {
                        color: '#ffffff'
                      },
                      grid: {
                        color: '#444'
                      }
                    },
                  },
                }}
                height={300}
              />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} className="mb-3">
          <Card className="h-100 bg-dark border border-secondary rounded shadow-sm">
            <Card.Header className="bg-dark border-bottom border-secondary pb-0 rounded-top">
              <h5 className="mb-0 text-light">🛡️ Security Status</h5>
              <small className="text-muted">Device security distribution</small>
            </Card.Header>
            <Card.Body className="d-flex align-items-center justify-content-center">
              <Doughnut
                data={securityStatusData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: {
                        color: '#ffffff'
                      }
                    },
                  },
                }}
                height={250}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Device Types and Recent Incidents */}
      <Row className="mb-4">
        <Col lg={6} className="mb-3">
          <Card className="h-100 bg-dark border border-secondary rounded shadow-sm">
            <Card.Header className="bg-dark border-bottom border-secondary pb-0 rounded-top">
              <h5 className="mb-0 text-light">💻 Device Distribution</h5>
              <small className="text-muted">Protected devices by type</small>
            </Card.Header>
            <Card.Body>
              <Bar
                data={deviceTypesData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      ticks: {
                        color: '#ffffff'
                      },
                      grid: {
                        color: '#444'
                      }
                    },
                    y: {
                      beginAtZero: true,
                      ticks: {
                        color: '#ffffff'
                      },
                      grid: {
                        color: '#444'
                      }
                    },
                  },
                }}
                height={250}
              />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} className="mb-3">
          <Card className="h-100 bg-dark border border-secondary rounded shadow-sm">
            <Card.Header className="bg-dark border-bottom border-secondary pb-0 rounded-top d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-0 text-light">⚠️ Recent Security Incidents</h5>
                <small className="text-muted">Latest security events</small>
              </div>
              <Button variant="outline-light" size="sm">View All</Button>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table className="mb-0 table-dark" hover>
                  <thead>
                    <tr>
                      <th className="border-0 ps-3">Type</th>
                      <th className="border-0">Severity</th>
                      <th className="border-0">Target</th>
                      <th className="border-0">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentIncidents.slice(0, 5).map((incident) => (
                      <tr key={incident.id}>
                        <td className="ps-3">
                          <div className="fw-medium text-light">{incident.type}</div>
                          <small className="text-muted">{incident.time}</small>
                        </td>
                        <td>{getSeverityBadge(incident.severity)}</td>
                        <td>
                          <code className="text-info">{incident.target}</code>
                        </td>
                        <td>{getStatusBadge(incident.status)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Vulnerabilities and Quick Actions */}
      <Row className="mb-4">
        <Col lg={8} className="mb-3">
          <Card className="h-100 bg-dark border border-secondary rounded shadow-sm">
            <Card.Header className="bg-dark border-bottom border-secondary pb-0 rounded-top d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-0 text-light">🔓 Top Vulnerabilities</h5>
                <small className="text-muted">Critical vulnerabilities requiring attention</small>
              </div>
              <Button variant="outline-danger" size="sm">Patch Management</Button>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <Table className="mb-0 table-dark" hover>
                  <thead>
                    <tr>
                      <th className="border-0 ps-3">CVE ID</th>
                      <th className="border-0">Severity</th>
                      <th className="border-0">Affected Systems</th>
                      <th className="border-0">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topVulnerabilities.map((vuln, index) => (
                      <tr key={index}>
                        <td className="ps-3">
                          <code className="text-info">{vuln.cve}</code>
                        </td>
                        <td>{getSeverityBadge(vuln.severity)}</td>
                        <td>
                          <Badge bg="secondary">{vuln.affected} systems</Badge>
                        </td>
                        <td className="text-muted">{vuln.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} className="mb-3">
          <Card className="h-100 bg-dark border border-secondary rounded shadow-sm">
            <Card.Header className="bg-dark border-bottom border-secondary pb-0 rounded-top">
              <h5 className="mb-0 text-light">⚡ Quick Actions</h5>
              <small className="text-muted">Security management tools</small>
            </Card.Header>
            <Card.Body>
              <div className="d-grid gap-2">
                <Button variant="outline-light" className="text-start">
                  <Lock className="me-2" size={16} />
                  Run Security Scan
                </Button>
                <Button variant="outline-warning" className="text-start">
                  <AlertTriangle className="me-2" size={16} />
                  Generate Report
                </Button>
                <Button variant="outline-success" className="text-start">
                  <Shield className="me-2" size={16} />
                  Update Policies
                </Button>
                <Button variant="outline-info" className="text-start">
                  <Users className="me-2" size={16} />
                  Manage Users
                </Button>
                <Button variant="outline-secondary" className="text-start">
                  <Activity className="me-2" size={16} />
                  System Health
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Critical Alerts */}
      {criticalAlerts > 0 && (
        <Row className="mb-4">
          <Col>
            <Alert variant="danger" className="border border-danger bg-dark rounded shadow-sm">
              <div className="d-flex align-items-center">
                <AlertTriangle className="me-3 text-danger" size={24} />
                <div className="flex-grow-1">
                  <Alert.Heading className="h6 mb-1 text-light">
                    🚨 {criticalAlerts} Critical Security Alert{criticalAlerts > 1 ? 's' : ''} Detected
                  </Alert.Heading>
                  <p className="mb-2 text-light">
                    Immediate attention required for high-priority security incidents.
                  </p>
                  <Button variant="danger" size="sm" className="me-2">
                    View Details
                  </Button>
                  <Button variant="outline-light" size="sm">
                    Acknowledge All
                  </Button>
                </div>
              </div>
            </Alert>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default DashboardMain;
