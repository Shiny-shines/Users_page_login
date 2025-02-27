import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    const user = JSON.parse(localStorage.getItem("user"));
    this.state = { user };
  }

  render() {
    return (
      <div className="container">
        <h2>Welcome</h2>
        <p>Hi, {this.state.user?.firstName} {this.state.user?.lastName}!</p>
      </div>
    );
  }
}

export default Home;
