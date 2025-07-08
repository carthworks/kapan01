import React from "react";
import { Link } from "react-router-dom";
import { ShieldX, AlertTriangle, ArrowLeft } from "react-feather";

const NotFound = () => {
  return (
    <div id="app" className="app app-full-height app-without-header">
      <div className="error-page">
        <div className="error-page-content">
          <div className="card mb-5 mx-auto">
            <div className="card-body">
              <div className="card">
                <div className="error-code">404</div>
                <ShieldX size={60} className="text-danger mb-3" />
                <div className="card-arrow">
                  <div className="card-arrow-top-left"></div>
                  <div className="card-arrow-top-right"></div>
                  <div className="card-arrow-bottom-left"></div>
                  <div className="card-arrow-bottom-right"></div>
                </div>
              </div>
            </div>
            <div className="card-arrow">
              <div className="card-arrow-top-left"></div>
              <div className="card-arrow-top-right"></div>
              <div className="card-arrow-bottom-left"></div>
              <div className="card-arrow-bottom-right"></div>
            </div>
          </div>
          <h1>Security Perimeter Breach!</h1>
          <p className="mb-4">
            The resource you're attempting to access doesn't exist or you don't have proper authorization.
            <br />
            This access attempt has been logged for security purposes.
          </p>
          
          <div className="alert alert-danger d-flex align-items-center">
            <AlertTriangle className="me-2" />
            <div>
              If you believe this is an error, please contact the security team immediately.
            </div>
          </div>
          
          <Link to="/dashboard" className="btn btn-primary btn-lg">
            <ArrowLeft className="me-1" size={18} />
            Return to Secure Zone
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
