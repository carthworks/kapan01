import React, { useState } from "react";
import { Container, Table, Button, Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal, Form } from "react-bootstrap";

const NetworkControl = () => {

    const [search, setSearch] = useState("");
    
    const [devices, setDevices] = useState([
        { id: 1, name: "Laptop", ip: "192.168.1.2", mac: "00:1A:2B:3C:4D:5E", type: "Wi-Fi", dataUsage: "1.2GB", lastActive: "10 mins ago", manufacturer: "Dell", signal: "Strong", status: "Connected" },
        { id: 2, name: "Smartphone", ip: "192.168.1.3", mac: "00:1B:3C:4D:5E:6F", type: "Wi-Fi", dataUsage: "500MB", lastActive: "5 mins ago", manufacturer: "Apple", signal: "Medium", status: "Connected" },
        { id: 3, name: "Smart TV", ip: "192.168.1.4", mac: "00:2C:3D:4E:5F:6G", type: "Ethernet", dataUsage: "2.5GB", lastActive: "1 hour ago", manufacturer: "Samsung", signal: "N/A", status: "Disconnected" },
        { id: 4, name: "Tablet", ip: "192.168.1.5", mac: "00:3D:4E:5F:6G:7H", type: "Wi-Fi", dataUsage: "750MB", lastActive: "30 mins ago", manufacturer: "Lenovo", signal: "Weak", status: "Connected" },
        { id: 5, name: "Gaming Console", ip: "192.168.1.6", mac: "00:4E:5F:6G:7H:8I", type: "Ethernet", dataUsage: "3.0GB", lastActive: "2 hours ago", manufacturer: "Sony", signal: "N/A", status: "Connected" },
        { id: 6, name: "Smart Speaker", ip: "192.168.1.7", mac: "00:5F:6G:7H:8I:9J", type: "Wi-Fi", dataUsage: "200MB", lastActive: "15 mins ago", manufacturer: "Google", signal: "Medium", status: "Connected" },
        { id: 7, name: "Security Camera", ip: "192.168.1.8", mac: "00:6G:7H:8I:9J:AK", type: "Wi-Fi", dataUsage: "1.1GB", lastActive: "5 mins ago", manufacturer: "Ring", signal: "Strong", status: "Connected" },
        { id: 8, name: "Smart Fridge", ip: "192.168.1.9", mac: "00:7H:8I:9J:AK:BL", type: "Wi-Fi", dataUsage: "600MB", lastActive: "3 hours ago", manufacturer: "LG", signal: "Weak", status: "Disconnected" },
        { id: 9, name: "Desktop PC", ip: "192.168.1.10", mac: "00:8I:9J:AK:BL:CM", type: "Ethernet", dataUsage: "5.4GB", lastActive: "20 mins ago", manufacturer: "HP", signal: "N/A", status: "Connected" },
        { id: 10, name: "Router", ip: "192.168.1.1", mac: "00:9J:AK:BL:CM:DN", type: "Ethernet", dataUsage: "10GB", lastActive: "Always On", manufacturer: "Netgear", signal: "N/A", status: "Connected" }
      ]);

  const handleDisconnect = (id) => {
    setDevices(
      devices.map((device) =>
        device.id === id ? { ...device, status: "Disconnected" } : device
      )
    );
  };

  const filteredDevices = devices.filter((device) =>
    device.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
     <div id="content" className="app-content">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                  <li className="breadcrumb-item active"><Link to="/endpoint-security">End point</Link></li>
                  <li className="breadcrumb-item active">Network Control</li>
                </ul>
                
                <h1 className="page-header">
                Network Control Panel<small></small>
                </h1>
    <Container className="mt-4">
             <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="🔍 Search by Device Name..."
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form.Group>
      
             <Table bordered hover responsive className="shadow-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Device Name</th>
                <th>IP Address</th>
                <th>MAC Address</th>
                <th>Connection Type</th>
                <th>Data Usage</th>
                <th>Last Active</th>
                <th>Manufacturer</th>
                <th>Signal Strength</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device, index) => (
                <tr key={device.id}>
                  <td>{index + 1}</td>
                  <td>{device.name}</td>
                  <td>{device.ip}</td>
                  <td>{device.mac}</td>
                  <td>{device.type}</td>
                  <td>{device.dataUsage}</td>
                  <td>{device.lastActive}</td>
                  <td>{device.manufacturer}</td>
                  <td>{device.signal}</td>
                  <td>
                    <Badge bg={device.status === "Connected" ? "success" : "danger"}>
                      {device.status}
                    </Badge>
                  </td>
                  <td>
                    {device.status === "Connected" && (
                      <Button variant="danger" size="sm" onClick={() => handleDisconnect(device.id)}>
                        Disconnect
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        
    </Container>
    </div>

  );
};

export default NetworkControl;
