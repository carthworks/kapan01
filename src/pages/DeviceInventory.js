import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const devices = [
    { id: 1, name: "LTINWIN001", os: "Windows", model: "Dell", type: "Laptop", risk: "HIGH", user: "user1@company.com" },
    { id: 2, name: "LTINWIN002", os: "MacOS", model: "MacBook Pro", type: "Laptop", risk: "MEDIUM", user: "user2@company.com" },
    { id: 3, name: "LTINWIN003", os: "Linux", model: "ThinkPad", type: "Laptop", risk: "LOW", user: "user3@company.com" },
    { id: 4, name: "LTINWIN004", os: "Windows", model: "HP", type: "Desktop", risk: "CRITICAL", user: "user4@company.com" },
    { id: 5, name: "LTINWIN005", os: "Windows", model: "Lenovo ThinkPad", type: "Laptop", risk: "HIGH", user: "alice@company.com" },
    { id: 6, name: "MBP2023", os: "macOS", model: "MacBook Pro", type: "Laptop", risk: "MEDIUM", user: "bob@company.com" },
    { id: 7, name: "DLXPS001", os: "Linux", model: "Dell XPS", type: "Desktop", risk: "LOW", user: "charlie@company.com" },
    { id: 8, name: "HPEB002", os: "Windows", model: "HP EliteBook", type: "Laptop", risk: "MEDIUM", user: "dave@company.com" },
    { id: 9, name: "SGS23", os: "Android", model: "Samsung Galaxy", type: "Mobile", risk: "LOW", user: "eve@company.com" },
    { id: 10, name: "IPH15", os: "iOS", model: "iPhone 15", type: "Mobile", risk: "CRITICAL", user: "frank@company.com" },
    { id: 11, name: "ACPRED001", os: "Windows", model: "Acer Predator", type: "Desktop", risk: "MEDIUM", user: "grace@company.com" },
    { id: 12, name: "RP4001", os: "Linux", model: "Raspberry Pi 4", type: "IoT", risk: "SAFE", user: "hank@company.com" },
    { id: 13, name: "SURPRO9", os: "Windows", model: "Surface Pro", type: "Tablet", risk: "CRITICAL", user: "ivy@company.com" },
    { id: 14, name: "MACMINI", os: "macOS", model: "Mac Mini", type: "Desktop", risk: "SAFE", user: "jack@company.com" }
  ];
  

  

const DeviceInventory = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleShow = (device) => {
    setSelectedDevice(device);
    setShowModal(true);
  };

  const filteredDevices = devices.filter((device) =>
    device.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
     <div id="content" className="app-content">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
              <li className="breadcrumb-item active"><Link to="/endpoint-security">End point</Link></li>
              <li className="breadcrumb-item active">Device Inventory</li>
            </ul>
            
            <h1 className="page-header">
            Device Inventory <small></small>
            </h1>
    <div className="container mt-4">
      {/* <h2 className="mb-4 text-center">🖥️ Device Inventory</h2> */}

      {/* Search Input */}
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="🔍 Search by Device Name..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form.Group>

      {/* Table */}
      <Table bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Device Name</th>
            <th>OS</th>
            <th>Model</th>
            <th>Type</th>
            <th>Risk</th>
            <th>User</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDevices.map((device, index) => (
            <tr key={device.id}>
              <td>{index + 1}</td>
              <td>{device.name}</td>
              <td>{device.os}</td>
              <td>{device.model}</td>
              <td>{device.type}</td>
              <td className={`text-${device.risk === "CRITICAL" ? "danger" : device.risk === "HIGH" ? "warning" : device.risk === "MEDIUM" ? "primary" : "success"}`}>
                {device.risk}
              </td>
              <td>{device.user}</td>
              <td>
                <Button variant="info" size="sm" onClick={() => handleShow(device)}>
                  Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Device Details */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Device Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDevice && (
            <ul className="list-group">
              <li className="list-group-item"><strong>Device Name:</strong> {selectedDevice.name}</li>
              <li className="list-group-item"><strong>OS:</strong> {selectedDevice.os}</li>
              <li className="list-group-item"><strong>Model:</strong> {selectedDevice.model}</li>
              <li className="list-group-item"><strong>Type:</strong> {selectedDevice.type}</li>
              <li className="list-group-item"><strong>Risk Level:</strong> {selectedDevice.risk}</li>
              <li className="list-group-item"><strong>User:</strong> {selectedDevice.user}</li>
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
};

export default DeviceInventory;
