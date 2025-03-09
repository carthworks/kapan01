import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
