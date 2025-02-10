import React, { Component } from 'react';
import './Profile.css'; 

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      age: '',
      bloodGroup: '',
      gender: '',
      users: [],
      errors: {} // To store validation errors
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, address, age, bloodGroup, gender, users } = this.state;

    // Validation checks
    let errors = {};

    if (!name) errors.name = "Name is required.";
    if (!address) errors.address = "Address is required.";
    if (!age || age <= 0) errors.age = "Age must be greater than 0.";
    if (!bloodGroup) errors.bloodGroup = "Blood group is required.";
    if (!gender) errors.gender = "Gender is required."; 

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    this.setState({
      users: [...users, { name, address, age, bloodGroup, gender, date: new Date().toLocaleDateString() }],
      name: '',
      address: '',
      age: '',
      bloodGroup: '',
      gender: '',
      errors: {} // Reset errors after successful submission
    });
  };

  handleDelete = (index) => {
    const users = [...this.state.users];
    users.splice(index, 1);
    this.setState({ users });
  };

  handleEdit = (index) => {
    const user = this.state.users[index];
    this.setState({
      name: user.name,
      address: user.address,
      age: user.age,
      bloodGroup: user.bloodGroup,
      gender: user.gender
    });
    this.handleDelete(index);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container1">
        <h2 className="title">User Registration Form</h2>
        
        <div className="card form-card">
          <form onSubmit={this.handleSubmit} className="form">
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={this.state.name} 
              onChange={this.handleChange} 
              placeholder="Enter Name" 
              className={`input-field first ${errors.name ? 'error' : ''}`}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
            
            <label>Address:</label>
            <textarea 
              name="address" 
              value={this.state.address} 
              onChange={this.handleChange} 
              placeholder="Enter Address" 
              className={`input-field ${errors.address ? 'error' : ''}`}
            ></textarea>
            {errors.address && <span className="error-message">{errors.address}</span>}
            
            <label>Age:</label>
            <input 
              type="number" 
              name="age" 
              value={this.state.age} 
              onChange={this.handleChange}
              placeholder="Enter Age" 
              className={`input-field first ${errors.age ? 'error' : ''}`}
            />
            {errors.age && <span className="error-message">{errors.age}</span>}
            
            <label>Blood Group:</label>
            <select 
              name="bloodGroup" 
              value={this.state.bloodGroup} 
              onChange={this.handleChange} 
              className={`input-field ${errors.bloodGroup ? 'error' : ''}`}
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            {errors.bloodGroup && <span className="error-message">{errors.bloodGroup}</span>}
            
            <label>Gender:</label>
            <div className="gender-group">
              <input 
                type="radio" 
                name="gender" 
                value="Male" 
                checked={this.state.gender === "Male"} 
                onChange={this.handleChange} 
              /> Male
              <input 
                type="radio" 
                name="gender" 
                value="Female" 
                checked={this.state.gender === "Female"} 
                onChange={this.handleChange} 
              /> Female
              <input 
                type="radio" 
                name="gender" 
                value="Others" 
                checked={this.state.gender === "Others"} 
                onChange={this.handleChange} 
              /> Others
            </div>
            {errors.gender && <span className="error-message">{errors.gender}</span>}
            
            <div className="button-group">
              <button type="submit" className="submit-button">Add</button>
              <button type="reset" className="cancel-button" onClick={() => this.setState({ name: '', address: '', age: '', bloodGroup: '', gender: '', errors: {} })}>Cancel</button>
            </div>
          </form>
        </div>
        
        <h2 className="user">User Data Table</h2>
        <div className="card table-card">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Age</th>
                <th>Blood Group</th>
                <th>Gender</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.address}</td>
                  <td>{user.age}</td>
                  <td>{user.bloodGroup}</td>
                  <td>{user.gender}</td>
                  <td>{user.date}</td>
                  <td>
                    <button onClick={() => this.handleEdit(index)} className="edit-button">Edit</button>
                    <button onClick={() => this.handleDelete(index)} className="delete-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Profile;
