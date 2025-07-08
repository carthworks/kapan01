import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield, Eye, EyeOff, Lock, Mail, User, Briefcase, CheckCircle, AlertTriangle, Check } from "react-feather";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return {
      minLength,
      hasUpper,
      hasLower,
      hasNumber,
      hasSpecial,
      isValid: minLength && hasUpper && hasLower && hasNumber && hasSpecial
    };
  };

  const passwordValidation = validatePassword(formData.password);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!passwordValidation.isValid) {
      setError("Password does not meet security requirements");
      return;
    }

    if (!acceptTerms) {
      setError("Please accept the Terms of Service and Privacy Policy");
      return;
    }

    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-vh-100 d-flex">
      {/* Left Side - Registration Form */}
      <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center bg-dark0">
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
              <p className="text-muted small mb-0">Create your account to start protecting your digital assets</p>
            </div>

            {/* Error Alert */}
            {error && (
              <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
                <AlertTriangle size={20} className="me-2" />
                <div>{error}</div>
              </div>
            )}

            {/* Registration Form */}
            <form onSubmit={handleRegister}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label text-light">
                        <User size={16} className="me-2" />
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control form-control-lg bg-dark0 border-secondary text-light"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter first name"
                        required
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label text-light">
                        <User size={16} className="me-2" />
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className="form-control form-control-lg bg-dark0 border-secondary text-light"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter last name"
                        required
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-light">
                      <Mail size={16} className="me-2" />
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg bg-dark0 border-secondary text-light"
                      value={formData.email}
                      onChange={handleInputChange}
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
                      <Briefcase size={16} className="me-2" />
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="form-control form-control-lg bg-dark0 border-secondary text-light"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter company name (optional)"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-light">
                      <Lock size={16} className="me-2" />
                      Password <span className="text-danger">*</span>
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="form-control form-control-lg bg-dark0 border-secondary text-light pe-5"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a strong password"
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
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    
                    {/* Password Requirements */}
                    {formData.password && (
                      <div className="mt-2">
                        <small className="text-muted">Password requirements:</small>
                        <div className="mt-1">
                          <small className={passwordValidation.minLength ? "text-success" : "text-muted"}>
                            {passwordValidation.minLength ? <Check size={12} className="me-1" /> : "○ "}
                            At least 8 characters
                          </small><br />
                          <small className={passwordValidation.hasUpper ? "text-success" : "text-muted"}>
                            {passwordValidation.hasUpper ? <Check size={12} className="me-1" /> : "○ "}
                            One uppercase letter
                          </small><br />
                          <small className={passwordValidation.hasLower ? "text-success" : "text-muted"}>
                            {passwordValidation.hasLower ? <Check size={12} className="me-1" /> : "○ "}
                            One lowercase letter
                          </small><br />
                          <small className={passwordValidation.hasNumber ? "text-success" : "text-muted"}>
                            {passwordValidation.hasNumber ? <Check size={12} className="me-1" /> : "○ "}
                            One number
                          </small><br />
                          <small className={passwordValidation.hasSpecial ? "text-success" : "text-muted"}>
                            {passwordValidation.hasSpecial ? <Check size={12} className="me-1" /> : "○ "}
                            One special character
                          </small>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-light">
                      <Lock size={16} className="me-2" />
                      Confirm Password <span className="text-danger">*</span>
                    </label>
                    <div className="position-relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        className="form-control form-control-lg bg-dark0 border-secondary text-light pe-5"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm your password"
                        required
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                      />
                      <button
                        type="button"
                        className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-muted"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        style={{ border: 'none', background: 'none' }}
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                      <small className="text-danger">Passwords do not match</small>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="acceptTerms"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                      />
                      <label className="form-check-label text-muted" htmlFor="acceptTerms">
                        I agree to the <Link to="/terms" className="text-primary">Terms of Service</Link> and{" "}
                        <Link to="/privacy" className="text-primary">Privacy Policy</Link>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success btn-lg w-100 fw-bold mb-3 d-flex align-items-center justify-content-center"
                    disabled={isLoading || !acceptTerms}
                    style={{
                      background: 'linear-gradient(135deg, #28a745 0%, #1e7e34 100%)',
                      border: 'none',
                      height: '50px'
                    }}
                  >
                    {isLoading ? (
                      <>
                        <div className="spinner-border spinner-border-sm me-2" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        <Shield size={20} className="me-2" />
                        Create Secure Account
                      </>
                    )}
                  </button>
                </form>

            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-muted small mb-0">
                Already have an account?
                <Link to="/login" className="text-primary text-decoration-none ms-1">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Product Details with Background */}
      <div className="col-lg-6 col-md-6 d-none d-md-flex position-relative overflow-hidden">
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
            <h1 className="display-4 fw-bold mb-3">Join CybersecAI</h1>
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
                  <CheckCircle className="text-white" size={24} />
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

export default Register;
