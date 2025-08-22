import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./LoginForm.css";
import logo from "../Assets/Logo/logo.png";
import API from "../api/axios";
const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    clearErrors,
  } = useForm();

  // Clear session storage on refresh
  useEffect(() => {
    const handleUnload = () => sessionStorage.clear();
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  const handleInputChange = (fieldName) => {
    clearErrors(fieldName);
  };

  const onSubmit = async (data) => {
    navigate("/");
  };

  return (
    <div className="page-wrapper">
      <div className="login-logo">
        <img src={logo} alt="App Logo" className="logo-img" />
        {/* <h1 className="logo-text">grow</h1> */}
      </div>

      <div>
        {/* <div className="login-container"> */}

        <div className="login-illustration"></div>
        <div className="login-box slide-in">
          <p className="login-title">Welcome Back</p>
          <p className="login-subtitle">Sign in to your account</p>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            
            <div className="form-group">
              <input
                id="firstname"
                type="text"
                placeholder="First Name"
                {...register("firstname", {
                  required: "FirstName address is required"
                })}
                className="form-input"
                disabled={isSubmitting}
                onChange={(e) => {
                  setValue("firstname", e.target.value);
                  handleInputChange("firstname");
                }}
              />
              {errors.firstname && (
                <div className="error-message">{errors.firstname.message}</div>
              )}
            </div>

            <div className="form-group">
              <input
                id="lastname"
                type="text"
                placeholder="Last Name"
                {...register("lastname", {
                  required: "Lastname address is required"
                })}
                className="form-input"
                disabled={isSubmitting}
                onChange={(e) => {
                  setValue("lastname", e.target.value);
                  handleInputChange("lastname");
                }}
              />
              {errors.lastname && (
                <div className="error-message">{errors.lastname.message}</div>
              )}
            </div>

            <div className="form-group">
              <input
                id="company"
                type="text"
                placeholder="Company Name"
                {...register("company", {
                  required: "Company name is required"
                })}
                className="form-input"
                disabled={isSubmitting}
                onChange={(e) => {
                  setValue("company", e.target.value);
                  handleInputChange("company");
                }}
              />
              {errors.lastname && (
                <div className="error-message">{errors.lastname.message}</div>
              )}
            </div>

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
                onChange={(e) => {
                  setValue("email", e.target.value);
                  handleInputChange("email");
                }}
              />
              {errors.email && (
                <div className="error-message">{errors.email.message}</div>
              )}
            </div>

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
                  onChange={(e) => {
                    setValue("password", e.target.value);
                    handleInputChange("password");
                  }}
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  role="button"
                  tabIndex={0}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setShowPassword(!showPassword);
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

            <div className="form-group">
              <div className="password-container">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("password", {
                    required: "Confirm Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                  className="password-input"
                  disabled={isSubmitting}
                  onChange={(e) => {
                    setValue("password", e.target.value);
                    handleInputChange("password");
                  }}
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  role="button"
                  tabIndex={0}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setShowPassword(!showPassword);
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

            <div className="form-group signup-link">
              <label>
                Already have an account!{" "}
                <Link to="/login" className="signup-link-text">
                  Login
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

export default SignUpForm;
