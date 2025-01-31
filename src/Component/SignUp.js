import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      age: "",
      email: "",
      address: "",
      bloodGroup: "",
      gender: "",
      role: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.history.push("/signin");
  };

  render() {
    return (
      <div className="signup-container">
        <div className="signup-box">
          <h2 className="signup-title">Create an Account</h2>
          <form onSubmit={this.handleSubmit} className="signup-form">
            <div className="input-group">
              <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} required />
            </div>

            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
            <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} required />
            <textarea name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} required></textarea>

            <select name="bloodGroup" value={this.state.bloodGroup} onChange={this.handleChange} required>
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
            </select>

            <div className="gender-group">
              <label><input type="radio" name="gender" value="Male" onChange={this.handleChange} required /> Male</label>
              <label><input type="radio" name="gender" value="Female" onChange={this.handleChange} required /> Female</label>
            </div>

            <select name="role" value={this.state.role} onChange={this.handleChange} required>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>

            <button type="submit" className="signup-btn">Sign Up</button>
          </form>
          <p className="signup-link">Already have an account? <Link to="/signin">Sign In</Link></p>
        </div>
      </div>
    );
  }
}

export default SignUp;
