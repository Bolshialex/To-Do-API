import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import useAuth from "../hooks/useAuth";
import loginApi from "../api/loginApi";

function LoginCard() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (validator.isEmpty(username)) {
      validationErrors.username = "Username is required";
    }

    if (validator.isEmpty(password)) {
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      loginApi
        .login(username, password)
        .then((response) => {
          setAuth(response);
          setError(""); // Clear error message on successful login
          navigate("/home");
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            setError("Invalid username or password");
          } else {
            setError("An error occurred. Please try again later.");
          }
        });
    }
  };

  return (
    <div className="login-card">
      <div className="login-form-container">
        <h1 id="login-header">Taskly</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              id="username"
              autoComplete="off"
              value={username}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <br />
          <p>
            Don't have an account?{" "}
            <Link to={"/register"} id="register-text">
              Sign up
            </Link>
          </p>
          <button type="submit" className="btn w-100 login-btn">
            Login to Taskly
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginCard;
