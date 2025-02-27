import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      redirect: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(this.state));
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/signin" />;
    }

    return (
      <div className="container">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={this.handleChange} required />
          <input type="text" name="mobile" placeholder="Mobile Number" onChange={this.handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Register;
