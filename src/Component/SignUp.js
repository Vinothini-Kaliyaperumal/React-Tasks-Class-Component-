import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      gender: "",
      role: "",
      errors: {},
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, errors: { ...this.state.errors, [name]: "" } });
  };

  validateForm = () => {
    let errors = {};
    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match!";
    }

    return errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validateForm();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    console.log(this.state);
    this.props.history.push("/signin");
  };

  render() {
    return (
      <div className="signup-container">
        <div className="signup-box">
          <h2 className="signup-title">Sign-Up Form</h2>
          <form onSubmit={this.handleSubmit} className="signup-form">
          <div className="input-row">
  {/* First Name & Last Name */}
  <div className="input-field">
    <label>First Name</label>
    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} required />
  </div>
  <div className="input-field">
    <label className="last">Last Name</label>
    <input className="last" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} required />
  </div>
</div>

<div className="input-row">
  {/* Email & Phone */}
  <div className="input-field">
    <label>Email</label>
    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
  </div>
  <div className="input-field">
    <label className="last">Phone Number</label>
    <input className="last" type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} required />
  </div>
</div>

<div className="input-row">
  {/* Password & Confirm Password */}
  <div className="input-field">
    <label>Password</label>
    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
  </div>
  <div className="input-field">
    <label className="last">Confirm Password</label>
    <input className="last" type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required />
    {this.state.errors.confirmPassword && <p className="error-text">{this.state.errors.confirmPassword}</p>}
  </div>
</div>

{/* Gender & Role */}
{/* <div className="gender-role">
  <div className="gender-options">
  <label>Gender</label>
    <input type="radio" name="gender" value="Male" onChange={this.handleChange} required /> Male
    <input type="radio" name="gender" value="Female" onChange={this.handleChange} required /> Female
  </div>
  <div className="role-select">
    <label>Role</label>
    <select name="role" value={this.state.role} onChange={this.handleChange} required>
      <option value="">Select Role</option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </select>
  </div>
</div> */}

            {/* Submit Button */}
            <button type="submit" className="signup-btn">Sign Up</button>
          </form>

          <p className="signup-link">Already have an account? <Link to="/signin">Sign In</Link></p>
        </div>
      </div>
    );
  }
}

export default SignUp;
