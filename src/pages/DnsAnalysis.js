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
  if (!dnsData) return <p className="text-danger">No data available</p>;

const { domain, "canonical name": canonicalName, sections } = dnsData;
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
      <h2 className="text-primary">DNS Analysis Report</h2>
      <div className="card shadow-sm p-3">
        <h5 className="text-secondary">Domain Information</h5>
        <p><strong>Domain:</strong> {domain}</p>
        <p><strong>Canonical Name:</strong> {canonicalName}</p>
      </div>

      <div className="mt-3 card shadow-sm p-3">
        <h5 className="text-secondary">DNS Records</h5>
        <div>
          <h6>Answers:</h6>
          <ul className="list-group">
            {sections?.answer?.map((item, index) => (
              <li key={index} className="list-group-item">{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <h6>Authority:</h6>
          <ul className="list-group">
            {sections?.authority?.map((item, index) => (
              <li key={index} className="list-group-item">{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <h6>Additional Records:</h6>
          <ul className="list-group">
            {sections?.additional?.map((item, index) => (
              <li key={index} className="list-group-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-3 card shadow-sm p-3">
        <h5 className="text-secondary">Conclusions & Risks</h5>
        <ul>
          <li>Multiple authoritative nameservers indicate redundancy and reliability.</li>
          <li>Presence of MX records suggests email handling capability.</li>
          <li>Potential risks: DNS poisoning, hijacking, or lack of DNSSEC validation.</li>
        </ul>
      </div>

      <div className="mt-3 card shadow-sm p-3">
        <h5 className="text-secondary">Recommendations</h5>
        <ul>
          <li>Ensure DNSSEC is enabled for enhanced security.</li>
          <li>Monitor DNS changes regularly to detect anomalies.</li>
          <li>Use reputable DNS providers for better performance and security.</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default DnsAnalysis;
