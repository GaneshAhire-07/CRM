import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./LoginForm.css";
import logo from "../Assets/Logo/logo.png";
import API from "../api/axios";
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  // ✅ Clear session storage on refresh
  useEffect(() => {
    const handleUnload = () => sessionStorage.clear();
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  // ✅ Clear errors on input change
  const handleInputChange = (fieldName, value) => {
    setValue(fieldName, value);
    clearErrors(fieldName);
  };

  // ✅ Submit handler
  const onSubmit = async (data) => {
    navigate("/");
  };
  return (
    <div className="page-wrapper">
      <div className="login-logo">
        <img src={logo} alt="App Logo" className="logo-img" />
      </div>

      <div>
        {/* Background illustration ✅ do not remove */}
        <div className="login-illustration"></div>

        <div className="login-box slide-in">
          <p className="login-subtitle">Sign in to your account</p>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Email */}
            <div className="form-group">
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                className="form-input"
                disabled={isSubmitting}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              {errors.email && (
                <div className="error-message">{errors.email.message}</div>
              )}
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="password-container">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                  className="password-input"
                  disabled={isSubmitting}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                  role="button"
                  tabIndex={0}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setShowPassword((prev) => !prev);
                    }
                  }}
                >
                  {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </span>
              </div>
              {errors.password && (
                <div className="error-message">{errors.password.message}</div>
              )}
            </div>

            {/* Remember me */}
            <div className="form-group remember-me">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  className="checkbox-input"
                />
                Remember Me
              </label>
            </div>

            {/* Forgot password */}
            <div className="forgot-password-link">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="login-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="infinity-loader"></div>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Sign up */}
            <div className="form-group signup-link">
              <label>
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="signup-link-text">
                  Sign Up
                </Link>
              </label>
            </div>
          </form>
        </div>

        {/* Toast notifications */}
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastClassName="custom-toast"
          bodyClassName="custom-toast-body"
          progressClassName="custom-toast-progress"
        />
      </div>
    </div>
  );
};

export default LoginForm;
