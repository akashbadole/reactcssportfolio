import React, { Component } from "react";

class Contact extends Component {
  state = { 
      name: "" 
    };
  myChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <form>
        <h1>Hello {this.state.name}</h1>
        <p>Enter your name: </p>
        <input type="text" onChange={this.changeHandler} />
      </form>
    );
  }
}

export default Contact;
