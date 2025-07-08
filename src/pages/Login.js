import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield, Eye, EyeOff, AlertTriangle } from "react-feather";
// import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate loading for better UX
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);

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
    <div className="min-vh-100 d-flex">
      {/* Left Side - Login Form */}
      <div className="col-lg-5 col-md-6 d-flex align-items-center justify-content-center bg-dark0">
        <div className="w-100" style={{ maxWidth: '400px', padding: '2rem' }}>
          <div className="mb-4">
            {/* Logo and Brand */}
            <div className="text-center mb-4">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-20 rounded-circle p-2 me-3" style={{width: '50px', height: '50px'}}>
                  <Shield className="text-primary" size={24} />
                </div>
                <h3 className="text-light fw-bold mb-0">CybersecAI</h3>
              </div>
              <p className="text-muted small mb-0">Sign in to your account</p>
            </div>

            {/* Error Alert */}
            {error && (
              <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
                <AlertTriangle size={20} className="me-2" />
                <div>{error}</div>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label text-light">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control bg-dark0 border-secondary text-light"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-light">
                  Password <span className="text-danger">*</span>
                </label>
                <div className="position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control bg-dark0 border-secondary text-light pe-5"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter your password"
                    required
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  />
                  <button
                    type="button"
                    className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-muted"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ border: 'none', background: 'none' }}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="mb-3 d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="rememberMe" />
                  <label className="form-check-label text-muted small" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password" className="text-primary text-decoration-none small">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="btn btn-success w-100 fw-bold mb-3 d-flex align-items-center justify-content-center"
                disabled={isLoading}
                style={{
                  background: 'linear-gradient(135deg, #28a745 0%, #1e7e34 100%)',
                  border: 'none',
                  height: '45px'
                }}
              >
                {isLoading ? (
                  <>
                    <div className="spinner-border spinner-border-sm me-2" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-muted small mb-0">
                Don't have an account?
                <Link to="/register" className="text-primary text-decoration-none ms-1">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Product Details with Background */}
      <div className="col-lg-7 col-md-6 d-none d-md-flex position-relative overflow-hidden">
        {/* Background Image */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(0, 123, 255, 0.8) 0%, rgba(0, 86, 179, 0.9) 100%), url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: 'cover, 60px 60px',
            backgroundPosition: 'center, 0 0',
            backgroundRepeat: 'no-repeat, repeat'
          }}
        ></div>

        {/* Content Overlay */}
        <div className="position-relative d-flex flex-column justify-content-center align-items-center text-center text-white p-5 w-100">
          <div className="mb-4">
            {/* <Shield size={40} className="text-white mb-4" /> */}
               {/* <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-20 rounded-circle p-2 me-3" style={{width: '50px', height: '50px'}}>
                  <Shield className="text-primary" size={24} />
                </div> */}
            <h1 className="display-4 fw-bold mb-3">CybersecAI</h1>
            <p className="lead mb-4">Advanced Cybersecurity Intelligence Platform</p>
          </div>

          <div className="row g-4 w-100" style={{ maxWidth: '500px' }}>
            <div className="col-12">
              <div className="d-flex align-items-center text-start">
                <div className="bg-white bg-opacity-20 rounded-circle p-3 me-3" style={{minWidth: '60px', height: '60px'}}>
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h5 className="mb-1">Real-time Threat Detection</h5>
                  <p className="mb-0 opacity-75">Monitor and identify security threats as they happen</p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex align-items-center text-start">
                <div className="bg-white bg-opacity-20 rounded-circle p-3 me-3" style={{minWidth: '60px', height: '60px'}}>
                  <AlertTriangle className="text-white" size={24} />
                </div>
                <div>
                  <h5 className="mb-1">Vulnerability Management</h5>
                  <p className="mb-0 opacity-75">Identify and remediate security vulnerabilities</p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex align-items-center text-start">
                <div className="bg-white bg-opacity-20 rounded-circle p-3 me-3" style={{minWidth: '60px', height: '60px'}}>
                  <Eye className="text-white" size={24} />
                </div>
                <div>
                  <h5 className="mb-1">Security Monitoring</h5>
                  <p className="mb-0 opacity-75">24/7 monitoring of your digital infrastructure</p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex align-items-center text-start">
                <div className="bg-white bg-opacity-20 rounded-circle p-3 me-3" style={{minWidth: '60px', height: '60px'}}>
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h5 className="mb-1">AI-Powered Analytics</h5>
                  <p className="mb-0 opacity-75">Machine learning algorithms for threat prediction</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <p className="opacity-75 mb-0">
              Trusted by <strong>10,000+</strong> security professionals worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
