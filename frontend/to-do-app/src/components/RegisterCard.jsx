import React from "react";
import { Link } from "react-router-dom";

function RegisterCard() {
  return (
    <div className="register-card">
      <div className="register-form-container">
        <h1 id="register-header">Register</h1>
        <hr />
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              autoComplete="off"
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="repeat-password" className="form-label">
              Repeat Password
            </label>
            <input
              type="repeat-password"
              className="form-control"
              id="repeat-password"
            />
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
