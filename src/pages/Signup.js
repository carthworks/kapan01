import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Invalid email format";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // Use a more modern approach with fetch API
      const response = await fetch("https://your-api-url.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error("Signup failed");
      
      setSuccessMessage("Account created successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setErrors({ server: "Signup failed. Try again." });
    }
  };

  return (
    <div id="app" className="app app-full-height app-without-header">
      <div className="register">
        <div className="register-content">
        <div className="d-flex align-items-center justify-content-center vh-100 ">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Create Account</h2>
        {errors.server && <div className="alert alert-danger">{errors.server}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <h1 className="text-center">Sign Up</h1>
					<p className="text-inverse text-opacity-50 text-center">One Admin ID is all you need to access all the Admin services.</p>
					
          <div className="mb-3">
          <label className="form-label">Name <span className="text-danger">*</span></label>
            <input
              type="text"
              className={`form-control form-control-lg bg-inverse bg-opacity-5 ${errors.name ? "is-invalid" : ""}`}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          {/* Email Field */}
          <div className="mb-3">
          <label className="form-label">Email Address <span className="text-danger">*</span></label>
            <input
              type="email"
              className={`form-control form-control-lg bg-inverse bg-opacity-5 ${errors.email ? "is-invalid" : ""}`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="username@address.com"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Password Field */}
          <div className="mb-3">
          <label className="form-label">Password <span className="text-danger">*</span></label>
            <input
              type="password"
              className={`form-control form-control-lg bg-inverse bg-opacity-5 ${errors.password ? "is-invalid" : ""}`}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          {/* Confirm Password Field */}
          <div className="mb-3">
          <label className="form-label">Confirm Password <span claclassNamess="text-danger">*</span></label>
            <input
              type="password"
              className={`form-control form-control-lg bg-inverse bg-opacity-5 ${errors.confirmPassword ? "is-invalid" : ""}`}
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          </div>

          {/* Submit Button */}
          <div className="mb-3">
						<button type="submit" className="btn btn-outline-theme btn-lg d-block w-100">Sign Up</button>
					</div>        </form>

        <p className="text-inverse text-opacity-50 text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
      </div></div>
   
    </div>
  );
};

export default Signup;
