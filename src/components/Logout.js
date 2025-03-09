import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove authentication data from local storage
    localStorage.removeItem("authToken");

    // Redirect to login page after logout
    navigate("/login");
  }, [navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <h3 className="text-danger">Logging out...</h3>
    </div>
  );
};

export default Logout;
