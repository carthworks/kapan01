import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    navigate("/dashboard");
    // try {
    //   // const response = await axios.post("https://your-api-url.com/login", { email, password });
    //   // localStorage.setItem("token", response.data.token); // Store JWT
    //   if (email === "user@kapan.com" && password === "user") {
    //     navigate("/dashboard");
    //   } else {
    //     setError("Invalid credentials. Please try again.");
    //   }
    // } catch (err) {
    //   setError("Invalid credentials. Please try again.");
    // }
  };

  return (
    <div
      id="app"
      className="app-content app app-full-height app-without-header"
    >
      <div className="login">
        <div className="login-content">
          <h1 className="text-center">Login</h1>
          <div className="text-inverse text-opacity-50 text-center mb-4">
            For your protection, please verify your identity.
          </div>
          {error && <p className="text-danger">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control form-control-lg bg-inverse bg-opacity-5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className="form-control form-control-lg bg-inverse bg-opacity-5"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder=""
                required
              />
            </div>
            <div className="mb-3">
						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="" id="customCheck1"/>
							<label className="form-check-label" for="customCheck1">Remember me</label>
						</div>
					</div>
            <button type="submit" className="btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3">
Signin            </button>
          </form>
          <p className="mt-3">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
