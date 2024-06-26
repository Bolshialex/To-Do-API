import React from "react";
import { Link } from "react-router-dom";

function LoginCard() {
  return (
    <div className="login-card">
      <div className="login-form-container">
        <h1 id="login-header">Login</h1>
        <hr />
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
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
