import React, { Component } from "react";
import LoginCard from "./logincard/LoginCard.jsx";
import LoginScreenStyles from "./LoginScreen.module.css";

class LoginScreen extends Component {
  state = {
    currentStep: 0,
    info: [
      {
        name: "username",
        text: "Username",
        kind: "input",
        label: "Please enter your username",
        icon: "IconUser",
      },
      {
        name: "email",
        text: "Email",
        kind: "input",
        label: "Please enter your email",
        icon: "IconEmail",
      },
      {
        name: "password",
        text: "Password",
        kind: "input",
        label: "Please enter a password",
        icon: "IconKey",
      },
      {
        name: "thankyou",
        text: "Thank you for registering!",
        kind: "message",
        label: "Successfully registered",
        icon: "IconSuccess",
      },
    ],
    inputData: {
      username: "",
      email: "",
      password: "",
    },
    errors: "",
  };

  getCurrentStep = () => {
    const { currentStep, errors, info, inputData } = this.state;
    const getStepInfo = info[currentStep];
    const getStepName = getStepInfo.name;
    const getValue = inputData[getStepName];

    return { errors, getStepInfo, getStepName, getValue };
  };

  handleChange = ({ currentTarget: input }) => {
    const inputData = { ...this.state.inputData };
    inputData[input.name] = input.value;
    console.log(input.name);
    this.setState({ inputData });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const getCurrentInfo = this.getCurrentStep();

    const errors = this.validate(
      getCurrentInfo.getStepName,
      getCurrentInfo.getValue
    );

    errors === ""
      ? this.setState({ errors, currentStep: this.state.currentStep + 1 })
      : this.setState({ errors });
  };

  validate = (name, value) => {
    let errors = "";
    switch (name) {
      case "username":
        errors = value.length < 4 ? "At least 4 characters are required" : "";
        break;
      case "email":
        errors = this.regExp.test(value) ? "" : "Email address is invalid";
        break;
      case "password":
        errors = value.length < 6 ? "At least 6 characters are required" : "";
        break;
      default:
        errors = "";
    }
    return errors;
  };

  regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

  render() {
    const getCurrentInfo = this.getCurrentStep();

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <LoginCard
            data={getCurrentInfo.getStepInfo}
            hasErrors={getCurrentInfo.errors}
            onChange={this.handleChange}
            onClick={this.handleSubmit}
            value={getCurrentInfo.getValue}
          />
        </form>
        <a href="https://github.com/the-glitch-ui">
          <p className={LoginScreenStyles.footer}>©2020 The Glitch UI</p>
        </a>
      </>
    );
  }
}

export default LoginScreen;
