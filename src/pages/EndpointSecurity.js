import React, { useState } from "react";
import {  Link  } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const EndpointSecurity = () => {
  // return <h2>Endpoint Security Management</h2>;
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const data = [
    { risk: "HIGH", os: "Windows", model: "Lenovo ThinkPad", type: "Laptop", device: "LTINWIN001", user: "alice@company.com" },
    { risk: "MEDIUM", os: "macOS", model: "MacBook Pro", type: "Laptop", device: "MBP2023", user: "bob@company.com" },
    { risk: "LOW", os: "Linux", model: "Dell XPS", type: "Desktop", device: "DLXPS001", user: "charlie@company.com" },
    { risk: "MEDIUM", os: "Windows", model: "HP EliteBook", type: "Laptop", device: "HPEB002", user: "dave@company.com" },
    { risk: "LOW", os: "Android", model: "Samsung Galaxy", type: "Mobile", device: "SGS23", user: "eve@company.com" },
    { risk: "CRITICAL", os: "iOS", model: "iPhone 15", type: "Mobile", device: "IPH15", user: "frank@company.com" },
    { risk: "MEDIUM", os: "Windows", model: "Acer Predator", type: "Desktop", device: "ACPRED001", user: "grace@company.com" },
    { risk: "SAFE", os: "Linux", model: "Raspberry Pi 4", type: "IoT", device: "RP4001", user: "hank@company.com" },
    { risk: "CRITICAL", os: "Windows", model: "Surface Pro", type: "Tablet", device: "SURPRO9", user: "ivy@company.com" },
    { risk: "SAFE", os: "macOS", model: "Mac Mini", type: "Desktop", device: "MACMINI", user: "jack@company.com" },
];


  const riskColors = {
    HIGH: "danger",
    MEDIUM: "warning",
    LOW: "info",
    CRITICAL: "dark",
    SAFE: "success",
  };

  const filteredData = data.filter(
    (item) =>
      item.device.toLowerCase().includes(search.toLowerCase()) ||
      item.user.toLowerCase().includes(search.toLowerCase())
  );


  const handleShowModal = (device) => {
    setSelectedDevice(device);
    setShowModal(true);
  };
  return (
    <div id="content" className="app-content">
    <ul className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
      <li className="breadcrumb-item active">Endpoint Security Management</li>
    </ul>
    
    <h1 className="page-header">
    Endpoint Security Management <small></small>
    </h1>
    
    <div className="container mt-4">
      

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Device or User..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Risk Level</th>
            <th>OS</th>
            <th>Model</th>
            <th>Device Type</th>
            <th>Device Name</th>
            <th>User</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>
                <span className={`badge bg-${riskColors[item.risk]}`}>
                  {item.risk}
                </span>
              </td>
              <td>{item.os}</td>
              <td>{item.model}</td>
              <td>{item.type}</td>
              <td>{item.device}</td>
              <td>{item.user}</td>
              <td>
              <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleShowModal(item)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedDevice && (
  <Modal show={showModal} onHide={() => setShowModal(false)} centered>
    <Modal.Header closeButton>
      <Modal.Title>📌 Endpoint Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h5>🖥 Device Info</h5>
      <p><strong>Device Name:</strong> {selectedDevice.device}</p>
      <p><strong>OS:</strong> {selectedDevice.os}</p>
      <p><strong>User:</strong> {selectedDevice.user}</p>

      <h5>📅 Activity</h5>
      <p><strong>Status:</strong> Idle</p>
      <p><strong>Last Active:</strong> {selectedDevice.lastActive}</p>

      {selectedDevice.location && (
        <>
          <h5>🌍 Location</h5>
          <p><strong>Latitude:</strong> {selectedDevice.location.lat}</p>
          <p><strong>Longitude:</strong> {selectedDevice.location.long}</p>
        </>
      )}

      <h5>⚡ Network</h5>
      <p><strong>Net Speed (Mbps):</strong> {selectedDevice.netSpeed?.join(", ") || "N/A"}</p>

      <h5>💻 Computer Details</h5>
      <p><strong>Domain:</strong> {selectedDevice.domain || "N/A"}</p>
      <p><strong>Serial Number:</strong> {selectedDevice.serialNumber || "N/A"}</p>

      <h5>🌐 IP & Ports</h5>
      <p><strong>Public IP:</strong> {selectedDevice.publicIP || "N/A"}</p>
      <p><strong>Private IP:</strong> {selectedDevice.privateIP || "N/A"}</p>
      <p><strong>Open Ports:</strong> {selectedDevice.ports?.join(", ") || "None"}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => setShowModal(false)}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
)}

    </div>


  </div>
  );
};

export default EndpointSecurity;
