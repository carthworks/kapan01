// import React, { useState } from "react";
// import { Container, Row, Col, Card, Badge, Table, ProgressBar, Dropdown, Button, Modal } from "react-bootstrap";
// import { Line } from 'react-chartjs-2';
// import {  Link } from "react-router-dom";
// import {
//   Chart as ChartJS,
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";
// ChartJS.register(
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend
// );


// const DashboardOverview = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedDuration, setSelectedDuration] = useState("Last 5 Days");

//   const handleSelect = (eventKey) => {
//     setSelectedDuration(eventKey);
//   };

//   const chartData = {
//     labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
//     datasets: [{
//       label: "Critical Alerts",
//       data: [10, 15, 7, 20, 12],
//       borderColor: "#dc3545",
//       backgroundColor: "rgba(220, 53, 69, 0.2)",
//       fill: true,
//     }],
//   };

//   return (
//        <div id="content" className="app-content">
//       <ul className="breadcrumb">
//         <li className="breadcrumb-item">
//           <Link to="/dashboard">Home</Link>
//         </li>
//         <li className="breadcrumb-item active">DNS Analysis</li>
//       </ul>
        
//               {/* <h1 className="page-header">
//               DNS Analysis<small></small>
//               </h1> */}
//     <Container fluid className="p-4">
//       <Row className="mb-4 text-center">
//         <Col>
//           <h4>Dashboard Overview</h4>
//         </Col>
//       </Row>
//       <Row className="mb-3 text-center">
//       <Col md={5}>
//           <Badge pill bg="primary" className="p-3 m-1">Total Threats: 120</Badge>
//           <Badge pill bg="danger" className="p-3 m-1">Critical Alerts: 8</Badge>
//           <Badge pill bg="warning" className="p-3 m-1 text-dark">Pending Incidents: 15</Badge>
       

//         </Col>
//         <Col md={2}>   <Badge pill bg="success" className="p-3 m-1">System Health: Good</Badge></Col>
//         <Col md={5}> 
//         <Badge pill bg="info" className="p-3 m-1">Active Threats: 12</Badge>
//           <Badge pill bg="success" className="p-3 m-1">Resolved Incidents: 345</Badge>
//           <Badge pill bg="warning" className="p-3 m-1">Pending Investigations: 5</Badge>
//         </Col>
//       </Row>

//       <Row>
//         <Col md={6}>
//           <Card className="mb-3 shadow-sm">
//             <Card.Body>
//               <Card.Title>📊 Real-time Security Insights</Card.Title>
//               <Table striped bordered hover size="sm">
//                 <thead>
//                   <tr>
//                     <th>Time</th>
//                     <th>Event</th>
//                     <th>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>10:30 AM</td>
//                     <td>Unauthorized login attempt</td>
//                     <td><Badge bg="danger">Critical</Badge></td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={6}>
//           <Card className="mb-3 shadow-sm">
//             <Card.Body>
//               <Card.Title>🔍 AI-based Threat Intelligence</Card.Title>
//               <ProgressBar variant="danger" now={75} label="High Risk" className="mb-2" />
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row>
//         <Col md={4}>
//           <Card className="mb-3 shadow-sm">
//             <Card.Body>
//               <Card.Title>⚠️ Critical Alerts and Threat Trends</Card.Title>
//               <Dropdown onSelect={handleSelect} className="mb-3">
//                 <Dropdown.Toggle variant="secondary">{selectedDuration}</Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item eventKey="Last 5 Days">Last 5 Days</Dropdown.Item>
//                   <Dropdown.Item eventKey="Last 10 Days">Last 10 Days</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//               <Line data={chartData} options={{ responsive: true, maintainAspectRatio: true }} />

//             </Card.Body>
//           </Card>
//         </Col>
     
//         <Col md={4}>
//           <Card className="mb-3 shadow-sm">
//             <Card.Body>
//               <Card.Title>🔔 Recent Security Alerts</Card.Title>
//               <Table striped bordered hover size="sm">
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Alert</th>
//                     <th>Severity</th>
//                     <th>Source IP</th>
//                     <th>Time</th>
//                     <th>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>101</td>
//                     <td>Brute Force Attack</td>
//                     <td><Badge bg="danger">Critical</Badge></td>
//                     <td>192.168.1.10</td>
//                     <td>12:45 PM</td>
//                     <td>Active</td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </Card.Body>
//           </Card>
//         </Col>
    
//         <Col md={4}>
//           <Card className="mb-3 shadow-sm">
//             <Card.Body>
//               <Card.Title>🔒 Security Overview</Card.Title>
//               <Row>
//                 <Col md={3}><strong>Security Score:</strong> 75% <ProgressBar now={75} className="mb-2" /></Col>
//                 <Col md={3}><strong>Network Security:</strong> 85% <ProgressBar now={85} className="mb-2" /></Col>
//                 <Col md={3}><strong>Application Security:</strong> 72% <ProgressBar now={72} className="mb-2" /></Col>
//                 <Col md={3}><strong>Endpoint Security:</strong> 68% <ProgressBar now={68} className="mb-2" /></Col>
//               </Row>
//               <Button variant="primary" onClick={() => setShowPopup(true)}>View Details</Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Modal show={showPopup} onHide={() => setShowPopup(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Security Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Detailed security analysis will be displayed here.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowPopup(false)}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//     </div>
//   );
// };

// export default DashboardOverview;
import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Table, ProgressBar, Dropdown, Button, Modal } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const DashboardOverview = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState("Last 5 Days");

  const handleSelect = (eventKey) => {
    setSelectedDuration(eventKey);
  };

  const chartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [
      {
        label: "Critical Alerts",
        data: [10, 15, 7, 20, 12],
        borderColor: "#dc3545",
        backgroundColor: "rgba(220, 53, 69, 0.2)",
        fill: true,
      },
    ],
  };

  return (
       <div id="content" className="app-content">
            {/* <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
               <li className="breadcrumb-item"><Link to="/user-management">user-management</Link></li>
                <li className="breadcrumb-item active">User Role</li>
            </ul> */}
            
            {/* <h1 className="page-header">
                User Role <small></small>
            </h1> */}
    <Container fluid className="p-4">
      <Row className="mb-4 text-center">
        <Col>
          <h4>Dashboard </h4>
        </Col>
      </Row>

      <Row className="mb-3 text-center">
        <Col md={4}><Badge pill bg="primary" className="p-3 m-1">Total Threats: 120</Badge></Col>
        <Col md={4}><Badge pill bg="danger" className="p-3 m-1">Critical Alerts: 8</Badge></Col>
        <Col md={4}><Badge pill bg="success" className="p-3 m-1">System Health: Good</Badge></Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>📊 Real-time Security Insights</Card.Title>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Event</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10:30 AM</td>
                    <td>Unauthorized login attempt</td>
                    <td><Badge bg="danger">Critical</Badge></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>🔍 AI-based Threat Intelligence</Card.Title>
              <ProgressBar variant="danger" now={75} label="High Risk" className="mb-2" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>⚠️ Critical Alerts and Threat Trends</Card.Title>
              <Dropdown onSelect={handleSelect} className="mb-3">
                <Dropdown.Toggle variant="secondary">{selectedDuration}</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Last 5 Days">Last 5 Days</Dropdown.Item>
                  <Dropdown.Item eventKey="Last 10 Days">Last 10 Days</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Line data={chartData} options={{ responsive: true, maintainAspectRatio: true }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showPopup} onHide={() => setShowPopup(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Security Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>Detailed security analysis will be displayed here.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPopup(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </div>
  );
};

export default DashboardOverview;
