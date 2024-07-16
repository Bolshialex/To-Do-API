import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import axiosInstance from "../api/axios";

function RegisterCard() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (validator.isEmpty(name)) {
      validationErrors.name = "Name is required";
    }

    if (validator.isEmpty(email)) {
      validationErrors.email = "Email is required";
    } else if (!validator.isEmail(email)) {
      validationErrors.email = "Please enter a valid email";
    }

    if (validator.isEmpty(username)) {
      validationErrors.username = "Username is required";
    }

    if (!validator.isStrongPassword(password)) {
      validationErrors.password =
        "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character";
    }

    if (password !== repeatPassword) {
      validationErrors.repeatPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setServerError("");

    try {
      // Make the API call
      const response = await axiosInstance.post("/user/register", {
        name,
        username,
        email,
        password,
      });

      // Check for error in response data
      if (response.data.error) {
        throw new Error(response.data.error); // Throw an error if there's an error message
      }
      setAuth(response);
      // Proceed with successful registration
      navigate("/home");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setServerError("Username or email already exists. Please try again.");
      } else {
        setServerError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="register-card">
      <div className="register-form-container">
        <h1 id="register-header">Register</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          {serverError && (
            <div className="alert alert-danger" role="alert">
              {serverError}
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              id="name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              id="username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="repeat-password" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              className={`form-control ${
                errors.repeatPassword ? "is-invalid" : ""
              }`}
              id="repeat-password"
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            {errors.repeatPassword && (
              <div className="invalid-feedback">{errors.repeatPassword}</div>
            )}
          </div>
          <br />
          <p>
            Already have an Account?{" "}
            <Link id="register-text" to={"/login"}>
              Log In
            </Link>
          </p>
          <button type="submit" className="btn w-100 register-btn">
            Create a Taskly Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterCard;
