import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const dnsData = {
  "name-server (ip)": "127.0.0.53",
  port: 53,
  domain: "amazon.com.",
  "canonical name": "amazon.com.",
  metadata: {
    id: "6073",
    opcode: "QUERY",
    rcode: "NOERROR",
    flags: "QR RD RA",
    edns: "0",
    payload: "65494"
  },
  sections: {
    question: ["amazon.com. IN A"],
    answer: [
      "amazon.com. 187 IN A 54.239.28.85",
      "amazon.com. 187 IN A 52.94.236.248",
      "amazon.com. 187 IN A 205.251.242.103"
    ],
    authority: [
      "amazon.com. 5394 IN NS ns1.amzndns.net.",
      "amazon.com. 5394 IN NS ns2.amzndns.org.",
      "amazon.com. 5394 IN NS ns1.amzndns.co.uk.",
      "amazon.com. 5394 IN NS ns2.amzndns.net."
    ],
    additional: [
      "ns1.amzndns.co.uk. 2880 IN A 156.154.67.10",
      "ns1.amzndns.net. 1067 IN A 156.154.65.10",
      "ns1.amzndns.org. 1111 IN A 156.154.66.10"
    ]
  }
};

const DnsAnalysis = () => {
  return (
    <div id="content" className="app-content">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dashboard">Home</Link>
            </li>
            <li className="breadcrumb-item active">DNS Analysis</li>
          </ul>
    
          <h1 className="page-header">
          DNS Analysis<small></small>
          </h1>
    <div className="container mt-4">
    
      <div className="card p-3">
        <h5>Domain: {dnsData.domain}</h5>
        <p><strong>Canonical Name:</strong> {dnsData["canonical name"]}</p>
        <p><strong>Name Server (IP):</strong> {dnsData["name-server (ip)"]}</p>
        <p><strong>Port:</strong> {dnsData.port}</p>
        <hr />
        <h5>Metadata</h5>
        <ul>
          {Object.entries(dnsData.metadata).map(([key, value]) => (
            <li key={key}><strong>{key}:</strong> {value}</li>
          ))}
        </ul>
        <hr />
        {Object.entries(dnsData.sections).map(([section, records]) => (
          <div key={section}>
            <h5 className="text-info">{section.charAt(0).toUpperCase() + section.slice(1)}</h5>
            <ul className="list-group">
              {records.map((record, index) => (
                <li key={index} className="list-group-item">{record}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DnsAnalysis;
