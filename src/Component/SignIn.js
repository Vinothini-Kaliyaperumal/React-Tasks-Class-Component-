import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css"; // Importing the CSS file

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <h2>Sign In</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>

            <button type="submit" className="submitBtn">Sign In</button>
          </form>

          <p className="signupText">
            Don't have an account? <Link to="/signup" className="signupLink">Sign Up</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default SignIn;
