import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Download, Filter, RefreshCw, Eye } from "react-feather";
import { Card, Row, Col, Form, Button, Table, Badge, InputGroup, Pagination } from "react-bootstrap";

const SecurityAuditLog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState("today");
  const [currentPage, setCurrentPage] = useState(1);
  
  const auditLogs = [
    { 
      id: "LOG-10045", 
      timestamp: "2023-06-16 14:23:45", 
      user: "admin@company.com", 
      action: "User Login", 
      resource: "Admin Portal",
      ipAddress: "192.168.1.45",
      status: "Success",
      details: "Successful login via 2FA"
    },
    { 
      id: "LOG-10044", 
      timestamp: "2023-06-16 14:22:30", 
      user: "john.smith@company.com", 
      action: "File Access", 
      resource: "financial-report-2023.pdf",
      ipAddress: "10.0.0.23",
      status: "Denied",
      details: "Insufficient permissions"
    },
    { 
      id: "LOG-10043", 
      timestamp: "2023-06-16 14:20:15", 
      user: "system", 
      action: "Configuration Change", 
      resource: "Firewall Rules",
      ipAddress: "10.0.0.1",
      status: "Success",
      details: "Rule #45 modified"
    },
    { 
      id: "LOG-10042", 
      timestamp: "2023-06-16 14:18:22", 
      user: "sarah.jones@company.com", 
      action: "User Logout", 
      resource: "Customer Portal",
      ipAddress: "192.168.2.56",
      status: "Success",
      details: "Session timeout"
    },
    { 
      id: "LOG-10041", 
      timestamp: "2023-06-16 14:15:10", 
      user: "api-service", 
      action: "API Access", 
      resource: "/api/v1/users",
      ipAddress: "10.0.0.5",
      status: "Success",
      details: "GET request"
    },
    { 
      id: "LOG-10040", 
      timestamp: "2023-06-16 14:12:05", 
      user: "admin@company.com", 
      action: "User Creation", 
      resource: "User Management",
      ipAddress: "192.168.1.45",
      status: "Success",
      details: "Created user: jane.doe@company.com"
    },
    { 
      id: "LOG-10039", 
      timestamp: "2023-06-16 14:10:30", 
      user: "unknown", 
      action: "User Login", 
      resource: "Admin Portal",
      ipAddress: "203.0.113.45",
      status: "Failed",
      details: "Invalid credentials (3rd attempt)"
    }
  ];

  const getStatusBadge = (status) => {
    const colors = {
      "Success": "success",
      "Failed": "danger",
      "Denied": "warning",
      "Warning": "warning"
    };
    return <Badge bg={colors[status]}>{status}</Badge>;
  };

  return (
    <div id="content" className="app-content">
      <ul className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
        <li className="breadcrumb-item active">Security Audit Log</li>
      </ul>
      
      <h1 className="page-header">
        Security Audit Log <small>System Activity Monitoring</small>
      </h1>
      
      <Card className="mb-4">
        <Card.Header className="bg-transparent">
          <h5 className="mb-0">Search & Filter</h5>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row className="mb-3">
              <Col md={5}>
                <InputGroup>
                  <InputGroup.Text><Search size={18} /></InputGroup.Text>
                  <Form.Control 
                    type="text" 
                    placeholder="Search by user, action, or resource..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Col md={3}>
                <InputGroup>
                  <InputGroup.Text><Calendar size={18} /></InputGroup.Text>
                  <Form.Select 
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                  >
                    <option value="today">Today</option>
                    <option value="yesterday">Yesterday</option>
                    <option value="week">Last 7 days</option>
                    <option value="month">Last 30 days</option>
                    <option value="custom">Custom range</option>
                  </Form.Select>
                </InputGroup>
              </Col>
              <Col md={4} className="d-flex">
                <Button variant="primary" className="me-2">
                  <Search size={16} className="me-1" />
                  Search
                </Button>
                <Button variant="outline-secondary" className="me-2">
                  <Filter size={16} className="me-1" />
                  Advanced Filters
                </Button>
                <Button variant="outline-secondary">
                  <Download size={16} className="me-1" />
                  Export
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Audit Events</h5>
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
                <th>Timestamp</th>
                <th>User</th>
                <th>Action</th>
                <th>Resource</th>
                <th>IP Address</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.map(log => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>{log.timestamp}</td>
                  <td>{log.user}</td>
                  <td>{log.action}</td>
                  <td>{log.resource}</td>
                  <td>{log.ipAddress}</td>
                                    <td>{getStatusBadge(log.status)}</td>
                                    <td>
                                      {/* Add action buttons or details here */}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  };
                  
                  export default SecurityAuditLog;
                

