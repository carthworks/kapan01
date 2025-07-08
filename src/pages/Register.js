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
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{
      background: '#212529'
    }}>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="card bg-dark border border-secondary rounded shadow-sm">
              <div className="card-body p-4">
                {/* Logo and Brand */}
                <div className="text-center mb-4">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-20 rounded-circle p-2 me-3" style={{width: '50px', height: '50px'}}>
                      <Shield className="text-primary" size={24} />
                    </div>
                    <h2 className="text-light fw-bold mb-0">CybersecAI</h2>
                  </div>
                  <p className="text-muted mb-0">Create your account to start protecting your digital assets</p>
                </div>

                {/* App Goals */}
                <div className="mb-4 p-3 bg-primary bg-opacity-10 rounded border border-primary border-opacity-25">
                  <h6 className="text-primary mb-2">🎯 What CybersecAI Offers:</h6>
                  <ul className="text-muted mb-0 small">
                    <li>Real-time threat detection and monitoring</li>
                    <li>Vulnerability assessment and management</li>
                    <li>Security incident response automation</li>
                    <li>Compliance reporting and audit trails</li>
                    <li>AI-powered security analytics</li>
                  </ul>
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
                        className="form-control form-control-lg bg-dark border-secondary text-light"
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
                        className="form-control form-control-lg bg-dark border-secondary text-light"
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
                      className="form-control form-control-lg bg-dark border-secondary text-light"
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
                      className="form-control form-control-lg bg-dark border-secondary text-light"
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
                        className="form-control form-control-lg bg-dark border-secondary text-light pe-5"
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
                        className="form-control form-control-lg bg-dark border-secondary text-light pe-5"
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
                    className="btn btn-primary btn-lg w-100 fw-bold mb-3 d-flex align-items-center justify-content-center"
                    disabled={isLoading || !acceptTerms}
                    style={{
                      background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
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
                  <p className="text-muted mb-0">
                    Already have an account? 
                    <Link to="/login" className="text-primary text-decoration-none fw-bold ms-1">
                      Sign In
                    </Link>
                  </p>
                </div>

                {/* Security Features */}
                <div className="mt-4 pt-4 border-top border-secondary">
                  <div className="row text-center">
                    <div className="col-4">
                      <CheckCircle className="text-success mb-2" size={24} />
                      <small className="text-muted d-block">Encrypted Data</small>
                    </div>
                    <div className="col-4">
                      <Shield className="text-primary mb-2" size={24} />
                      <small className="text-muted d-block">Secure Platform</small>
                    </div>
                    <div className="col-4">
                      <Lock className="text-warning mb-2" size={24} />
                      <small className="text-muted d-block">Privacy First</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
