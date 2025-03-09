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

    try {
      // const response = await axios.post("https://your-api-url.com/login", { email, password });
      // localStorage.setItem("token", response.data.token); // Store JWT
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      id="app"
      className="app-content app app-full-height app-without-header"
    >
      <div class="login">
        <div class="login-content">
          <h1 class="text-center">Login</h1>
          <div class="text-inverse text-opacity-50 text-center mb-4">
            For your protection, please verify your identity.
          </div>
          {error && <p className="text-danger">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label class="form-label">
                Email Address <span class="text-danger">*</span>
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
              <label class="form-label">
                Password <span class="text-danger">*</span>
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
            <div class="mb-3">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="customCheck1"/>
							<label class="form-check-label" for="customCheck1">Remember me</label>
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
