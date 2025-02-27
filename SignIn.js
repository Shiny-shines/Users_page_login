import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === this.state.email && storedUser.password === this.state.password) {
      this.setState({ redirect: true });
    } else {
      alert("Invalid credentials");
    }
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/home" state={{ user: JSON.parse(localStorage.getItem("user")) }} />;
    }

    return (
      <div className="container">
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" placeholder="Email" onChange={this.handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} required />
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
