import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Admin.css"; // Separate CSS file for styling

class User extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <h2>User Dashboard</h2>
        </div>
        <div className="navbar-right">
          <Link to="/myprofile" className="nav-link">My Profile</Link>
          <Link to="/user" className="nav-link">User</Link>
          <Link to="/user" className="nav-link">Settings</Link>
        </div>
      </nav>
    );
  }
}

export default User;
